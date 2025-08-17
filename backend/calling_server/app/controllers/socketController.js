const userSocketMap = require("../models/userSocketMap");
const axios = require("axios");
const { rejectCall } = require("./handle_calling/reject_call");
const { acceptCall } = require("./handle_calling/accept_call");
const {
  sendCallRequest,
} = require("../controllers/handle_calling/sendCallRequest");

function emitError(socket, event, message) {
  socket.emit(event, { success: false, message });
}
const socketController = (IO) => {
  IO.use((socket, next) => {
    const callerId = socket.handshake.query.callerId;
    if (callerId) {
      socket.user = callerId;
      next();
    } else {
      console.error("❌ Connection attempt with missing caller ID");
      next(new Error("Invalid caller ID"));
    }
  });

  IO.on("connection", (socket) => {
    const userId = socket.user;
    console.log(`✅ User ${userId} connected (Socket ID: ${socket.id})`);

    userSocketMap.addUser(userId, socket.id);
    console.log("Current user map:", userSocketMap.getAllUsers());

    let currentIndex = 0; // Track which user is being called
    let userLists = []; // Store user list for calling

    // Handle call requests
    // socket.on("search", searchPeople);
    socket.on("search", async (data) => {
      currentIndex = 0; // Reset index for a new search
      try {
        if (!data.category) {
          emitError(socket, "searchFailed", "Category is required.");
          return;
        }

        console.log("🔍 Search request received for category:", data.category);
        console.log("callerId : ", data.callerId);

        // Fetch users based on category
        const response = await axios.post(
          `http://192.168.253.104:9000/userDetails/filter`,
          { category: data.category }
        );

        userLists = response.data?.data?.map((user) => user.user_id) || [];

        if (userLists.length === 0) {
          emitError(socket, "searchFailed", "No users found.");
          return;
        }

        currentIndex = 0; // Reset index for a new search
        // console.log(`inital Current Index: ${currentIndex}`);
        sendCallRequest(
          IO,
          userSocketMap,
          socket,
          currentIndex,
          userLists,
          data.callerId
        );
        console.log("📞 Calling users:", userLists);
      } catch (error) {
        console.error("❌ Error in search event:", error.message);
        emitError(socket, "searchFailed", "Internal server error.");
      }
    });

    // socket.on("rejectCall", (data) => {
    //   console.log(`🚫 Call rejected by ${data.callerId}`);
    //   userLists = data.userList;

    //   ++currentIndex; // Move to the next user
    //   console.log(`next calling ${currentIndex}`);
    //   console.log(`Current Index: ${currentIndex}`);
    //   if (currentIndex < userLists.length) {
    //     console.log(`calling next user: ${userLists[currentIndex]}`);
    //     sendCallRequest(IO, userSocketMap, socket, currentIndex, userLists);
    //   } else {
    //     currentIndex = 0;
    //     userLists = [];
    //     console.log("❌ No more users left to call.");
    //     emitError(socket, "callFailed", "No more users available.");
    //   }
    // });

    // socket.on("r", (data) => {
    //   console.log("client index", data.index);
    //   console.log(`🚫 Call rejected by ${data.callerId}`);
    //   currentIndex = data.index;
    //   if (Array.isArray(data.userList) && data.userList.length > 0) {
    //     userLists = data.userList;
    //   } else {
    //     console.log("⚠️ Invalid or empty user list received.");
    //     return;
    //   }

    //   // currentIndex++; // Move to the next usercd
    //   console.log(`🔄 Moving to the next user (Index: ${currentIndex})`);

    //   if (currentIndex < userLists.length) {
    //     console.log(`📞 Calling next user: ${userLists[currentIndex]}`);
    //     sendCallRequest(IO, userSocketMap, socket, currentIndex, userLists);
    //   } else {
    //     console.log("❌ No more users left to call. Resetting state.");
    //     currentIndex = 0;
    //     userLists = [];
    //     emitError(socket, "callFailed", "No more users available.");
    //   }
    // });

    socket.on("reject_call", (data) =>
      rejectCall(data, socket, IO, userSocketMap)
    );

    socket.on("accept_call", (data) =>
      acceptCall(data, socket, IO, userSocketMap)
    );

    // Handle making a call
    socket.on("makeCall", (data) => {
      const { calleeId, sdpOffer } = data;
      console.log(`THis is the data coming from ${sdpOffer}`);
      console.log(`THis is the data coming from ${calleeId}`);
      if (!calleeId || !sdpOffer) {
        emitError(socket, "callFailed", "Callee ID or SDP offer is missing.");
        return;
      }

      const calleeSocketId = userSocketMap.getUserSocketId(calleeId);
      console.log(calleeSocketId);
      if (calleeSocketId) {
        // console.log`User ${userId} is calling ${calleeId} with SDP offer ${sdpOffer}.`;
        // console.log(sdpOffer);
        IO.to(calleeSocketId).emit("newCall", {
          callerId: userId,
          sdpOffer,
        });
      } else {
        emitError(
          socket,
          "callFailed",
          `Callee with ID ${calleeId} is not connected.`
        );
      }
    });

    // Handle answering a call
    socket.on("answerCall", ({ callerId, sdpAnswer }) => {
      const callerSocketId = userSocketMap.getUserSocketId(callerId);
      if (callerSocketId) {
        console.log(`${userId} answered the call from ${callerId}`);
        IO.to(callerSocketId).emit("callAnswered", {
          calleeId: userId,
          sdpAnswer,
        });
      } else {
        emitError(
          socket,
          "callFailed",
          `Caller with ID ${callerId} is not connected.`
        );
      }
    });

    // Handle ICE candidate
    socket.on("IceCandidate", ({ calleeId, iceCandidate }) => {
      if (!calleeId || !iceCandidate) {
        emitError(
          socket,
          "callFailed",
          "Callee ID or ICE candidate is missing."
        );
        return;
      }

      console.log(`${socket.user} is sending an ICE candidate to ${calleeId}`);
      const calleeSocketId = userSocketMap.getUserSocketId(calleeId);
      if (calleeSocketId) {
        IO.to(calleeSocketId).emit("IceCandidate", {
          sender: userId,
          iceCandidate,
        });
      } else {
        emitError(
          socket,
          "callFailed",
          `Callee with ID ${calleeId} is not connected.`
        );
      }
    });

    // Handle initiating a call
    socket.on("callUser", ({ callerId, calleeId }) => {
      console.log("callerId", callerId);
      console.log("calleeId", calleeId);
      // if (!callerId || !calleeId) {
      //   console.error("Caller ID or Callee ID missing in callUser event");
      //   emitError(socket, "callFailed", "Caller ID or Callee ID missing.");
      //   return;
      // }

      // const calleeSocketId = userSocketMap.get(calleeId);
      // if (calleeSocketId) {
      //   console.log(`User ${callerId} is calling ${calleeId}`);
      //   IO.to(calleeSocketId).emit("incomingCall", {
      //     callerId,
      //     message: `User ${callerId} is calling you.`,
      //   });
      // } else {
      //   console.log(`Callee with ID ${calleeId} is not connected`);
      //   emitError(socket, "callFailed", "Callee is not connected.");
      // }
    });

    socket.on("disconnect", () => {
      userSocketMap.removeUser(userId);
      console.log(
        `❌ User ${userId} disconnected. Updated user map:`,
        userSocketMap.getAllUsers()
      );
    });

    // async function sendCallRequest(
    //   IO,
    //   userSocketMap,
    //   socket,
    //   index,
    //   userLists
    // ) {
    //   console.log("📞 Calling users:", userLists[index]);
    //   if (!userLists || userLists.length === 0) {
    //     console.log("❌ No users to call.");
    //     return;
    //   }

    //   if (index < 0 || index >= userLists.length) {
    //     console.log("❌ No more users to call.");
    //     return;
    //   }

    //   const userId = userLists[index];
    //   const userSocketId = userSocketMap.getUserSocketId(userId);

    //   if (userSocketId) {
    //     console.log(
    //       `📞 Sending call request to ${userId} (Socket: ${userSocketId})`
    //     );
    //     IO.to(userSocketId).emit("n", {
    //       success: true,
    //       userIds: userLists,
    //       index: currentIndex,
    //     });
    //   } else {
    //     console.log(`⚠️ User ${userId} is not connected.`);
    //     socket.emit("searchFailed", {
    //       success: false,
    //       userId,
    //       message: "User is not connected.",
    //     });

    //     // Move to the next user if available
    //     index++;
    //     if (index < userLists.length) {
    //       console.log("useung this");
    //       sendCallRequest(IO, userSocketMap, socket, index, userLists);
    //     } else {
    //       console.log("❌ No more users left to call.");
    //       emitError(socket, "callFailed", "No more users available.");
    //     }
    //   }
    // }
  });
};

// Function to send call request to a specific user by index

module.exports = socketController;
