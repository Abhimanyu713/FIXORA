// this is the server for new proccess

const port = process.env.PORT || 4004;
const axios = require("axios");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const IO = new Server(
  server
  //   {
  //   cors: {
  //     origin: "*",
  //     methods: ["GET", "POST"],
  //   },
  // }
);

// Map to track custom user IDs with their socket IDs
const userSocketMap = new Map();

// Middleware for caller ID verification
IO.use((socket, next) => {
  const callerId = socket.handshake.query.callerId;
  if (callerId) {
    socket.user = callerId;
    next();
  } else {
    console.error("Connection attempt with missing caller ID");
    next(new Error("Invalid caller ID"));
  }
});

// Utility function to send error messages to clients
function emitError(socket, event, message) {
  socket.emit(event, { success: false, message });
}

IO.on("connection", (socket) => {
  const userId = socket.user;
  console.log(`User ${userId} connected with socket ID ${socket.id}`);

  // Store the user ID and corresponding socket ID in the map
  userSocketMap.set(userId, socket.id);
  console.log(`Current user map:`, userSocketMap);

  // Handle initiating a call
  //   socket.on("callUser", ({ callerId, calleeId }) => {
  //     if (!callerId || !calleeId) {
  //       console.error("Caller ID or Callee ID missing in callUser event");
  //       emitError(socket, "callFailed", "Caller ID or Callee ID missing.");
  //       return;
  //     }

  //     const calleeSocketId = userSocketMap.get(calleeId);
  //     if (calleeSocketId) {
  //       console.log(`User ${callerId} is calling ${calleeId}`);
  //       IO.to(calleeSocketId).emit("incomingCall", {
  //         callerId,
  //         message: `User ${callerId} is calling you.`,
  //       });
  //     } else {
  //       console.log(`Callee with ID ${calleeId} is not connected`);
  //       emitError(socket, "callFailed", "Callee is not connected.");
  //     }
  //   });

  // Handle accepting a call
  socket.on("acceptCall", (data) => {
    var callerId = data["callerId"];
    var reply = data["reply"];
    const callerSocketId = userSocketMap.get(callerId);
    console.log(`This is the ${reply}`);
    if (callerSocketId) {
      console.log(`Call accepted by ${userId} for ${callerId}`);
      IO.to(callerSocketId).emit("accept", {
        calleeId: userId,
        reply: "accept",
      });
    } else {
      emitError(
        socket,
        "callFailed",
        `Caller with ID ${callerId} is not connected.`
      );
    }
  });

  // Handle rejecting a call
  socket.on("rejectCall", ({ callerId }) => {
    const callerSocketId = userSocketMap.get(callerId);
    if (callerSocketId) {
      console.log(`Call rejected by ${userId} for ${callerId}`);
      IO.to(callerSocketId).emit("reject", {
        calleeId: userId,
        reply: "Reject",
      });
    } else {
      emitError(
        socket,
        "callFailed",
        `Caller with ID ${callerId} is not connected.`
      );
    }
  });

  //   // Handle making a call
  //   socket.on("makeCall", (data) => {
  //     const { calleeId, sdpOffer } = data;
  //     // console.log(`THis is the data coming from ${data}`);
  //     if (!calleeId || !sdpOffer) {
  //       emitError(socket, "callFailed", "Callee ID or SDP offer is missing.");
  //       return;
  //     }

  //     const calleeSocketId = userSocketMap.get(calleeId);
  //     if (calleeSocketId) {
  //       // console.log`User ${userId} is calling ${calleeId} with SDP offer ${sdpOffer}.`;
  //       // console.log(sdpOffer);
  //       IO.to(calleeSocketId).emit("newCall", {
  //         callerId: userId,
  //         sdpOffer,
  //       });
  //     } else {
  //       emitError(
  //         socket,
  //         "callFailed",
  //         `Callee with ID ${calleeId} is not connected.`
  //       );
  //     }
  //   });

  // call from professional
  // Handle calls from professionals
  //   socket.on("callFromProfessional", ({ callerId, calleeId }) => {
  //     if (!callerId || !calleeId) {
  //       emitError(socket, "callFailed", "Caller ID or Callee ID is missing.");
  //       return;
  //     }

  //     const calleeSocketId = userSocketMap.get(calleeId);
  //     if (calleeSocketId) {
  //       console.log(`Professional ${callerId} is calling ${calleeId}`);
  //       IO.to(calleeSocketId).emit("incomingCallFromProfessional", {
  //         callerId,
  //         message: `Professional ${callerId} is calling you.`,
  //       });
  //     } else {
  //       console.log(`Callee with ID ${calleeId} is not connected`);
  //       emitError(socket, "callFailed", "Callee is not connected.");
  //     }
  //   });

  //   // Handle ICE candidate
  //   socket.on("IceCandidate", ({ calleeId, iceCandidate }) => {
  //     if (!calleeId || !iceCandidate) {
  //       emitError(socket, "callFailed", "Callee ID or ICE candidate is missing.");
  //       return;
  //     }

  //     console.log(`${socket.user} is sending an ICE candidate to ${calleeId}`);
  //     const calleeSocketId = userSocketMap.get(calleeId);
  //     if (calleeSocketId) {
  //       IO.to(calleeSocketId).emit("IceCandidate", {
  //         sender: userId,
  //         iceCandidate,
  //       });
  //     } else {
  //       emitError(
  //         socket,
  //         "callFailed",
  //         `Callee with ID ${calleeId} is not connected.`
  //       );
  //     }
  //   });

  //   // Handle answering a call
  //   socket.on("answerCall", ({ callerId, sdpAnswer }) => {
  //     const callerSocketId = userSocketMap.get(callerId);
  //     if (callerSocketId) {
  //       console.log(`${userId} answered the call from ${callerId}`);
  //       IO.to(callerSocketId).emit("callAnswered", {
  //         calleeId: userId,
  //         sdpAnswer,
  //       });
  //     } else {
  //       emitError(
  //         socket,
  //         "callFailed",
  //         `Caller with ID ${callerId} is not connected.`
  //       );
  //     }
  //   });

  // Handle the end of the call
  // Array to store the user IDs
  // // Handle the end of the call
  // socket.on("CP", ({ role }) => {
  //   // Declare the arrays inside the event listener
  //   const userIdArray = [];
  //   const connectedUser = [];

  //   // Log the received role
  //   console.log("Received role:", role);

  //   // Make a POST request to the server
  //   axios
  //     .post("http://192.168.1.2:8080/role/api/roles/role", {
  //       role: role,
  //     })
  //     .then((response) => {
  //       // Extract user IDs from the response and push them into the array
  //       if (response.data.users && Array.isArray(response.data.users)) {
  //         response.data.users.forEach((user) => {
  //           if (user._id) {
  //             userIdArray.push(user._id);
  //             if (userSocketMap.has(user._id)) {
  //               connectedUser.push(user._id);
  //             }
  //           }
  //         });
  //       }

  //       // Log the updated user ID array
  //       console.log("Updated User ID Array:", userIdArray);
  //       console.log("usersocketMap:", connectedUser);

  //       // Emit messages to connected users
  //       connectedUser.forEach((singleUser) => {
  //         IO.to(userSocketMap.get(singleUser)).emit("message", {
  //           callerId: singleUser,
  //           msg: "heo",
  //         });
  //         socket.on("callResponse", (data) => {
  //           console.log(data);
  //         });
  //       });
  //     })
  //     .catch((error) => {
  //       // Log any errors that occur during the request
  //       console.error("Error posting role:", error.message);
  //     });
  // });

  socket.on("CP", ({ role }) => {
    const userIdArray = [];
    const connectedUser = [];
    let currentIndex = 0;

    console.log("Received role:", role);

    axios
      .post("http://192.168.1.2:8080/role/api/roles/role", {
        role: role,
      })
      .then((response) => {
        if (response.data.users && Array.isArray(response.data.users)) {
          response.data.users.forEach((user) => {
            if (user._id) {
              userIdArray.push(user._id);
              if (userSocketMap.has(user._id)) {
                connectedUser.push(user._id);
              }
            }
          });
        }

        console.log("Updated User ID Array:", userIdArray);
        console.log("Connected Users:", connectedUser);

        // Start processing users sequentially
        processNextUser();
      })
      .catch((error) => {
        console.error("Error posting role:", error.message);
      });
    // Listen for call response from the current user
    socket.on("callResponse", ({ callerId, response }) => {
      console.log("Response from user:", response);

      if (response === "accept") {
        console.log(`Call accepted by user: ${singleUser}`);
        // Stop processing further users since the call is accepted
        return;
      } else if (response === "reject") {
        console.log(`Call rejected by user: ${singleUser}`);
        // Move to the next user in the list
        currentIndex++;
        processNextUser();
      }
    });

    function processNextUser() {
      if (currentIndex >= connectedUser.length) {
        console.log("All users processed or no connected users available.");
        return;
      }

      const singleUser = connectedUser[currentIndex];
      console.log(`Calling user: ${singleUser}`);

      IO.to(userSocketMap.get(singleUser)).emit("message", {
        callerId: singleUser,
        msg: "Incoming call",
      });
    }
  });

  // Clean up on disconnect
  socket.on("disconnect", () => {
    console.log(`User ${userId} disconnected`);
    userSocketMap.delete(userId);
    console.log(`User ${userId} removed. Current user map:`, userSocketMap);
  });
});

// Route for server status check
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "This is a signaling server which is working properly.",
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
