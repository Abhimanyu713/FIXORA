// this is the server for new proccess

const port = process.env.PORT || 4004;
const axios = require("axios");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const { acceptCall, rejectCall } = require("./controller/handleResponses");
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

  // Handle accepting a call
  socket.on("acceptCall", acceptCall);

  // Handle rejecting a call
  // socket.on("rejectCall", rejectCall);
  socket.on("rejectCall", (data) => {
    // const callerSocketId = userSocketMap.get(callerId);
    console.log(`This is the ${data["response"]}`);
    // processNextUser();
  });

  socket.on("CP", ({ role }) => {
    console.log("Received role:", role);
    const userIdArray = [];
    const connectedUser = [];
    let currentIndex = 0;
    const x = null;
    axios
      .post("http://192.168.1.3:8080/role/api/roles/role", { role: role })
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
        // socket.on("rejectCall", rejectCall);
        // Start processing users sequentially
        firstcall(connectedUser);
      })
      .catch((error) => {
        console.error("Error posting role:", error.message);
      });
  });

  function firstcall(x) {
    console.log(x);
    // console.log(currentIndex);
    // if (currentIndex >= connectedUser.length) {
    //   console.log("All users processed or no connected users available.");
    //   return;
    // }

    // const singleUser = connectedUser[currentIndex];
    // console.log(`Calling user: ${singleUser}`);

    // Emit message to the current user

    // IO.to(userSocketMap.get(singleUser)).emit("message", {
    //   callerId: socket.id,
    //   msg: "Incoming call",
    // });
    IO.to(socket.id).emit("message", {
      callerId: socket.id,
      msg: x,
    });
  }

  socket.on("makeCall", ({ callerId }) => {
    IO.to(
      userSocketMap.get(callerId).emit("Incoming Call", {
        callerId,
      })
    );
  });
  // function processNextUser() {
  //   currentIndex++;
  //   console.log(currentIndex);
  //   console.log(connectedUser.length);
  //   if (currentIndex >= connectedUser.length + 1) {
  //     console.log("All users processed or no connected users available.");
  //     console.log(currentIndex);

  //     return;
  //   }

  //   const singleUser = connectedUser[currentIndex];
  //   console.log(`Calling user: ${singleUser}`);

  //   // Emit message to the current user
  //   IO.to(userSocketMap.get(singleUser)).emit("message", {
  //     callerId: socket.id,
  //     msg: "Incoming call",
  //   });
  // }

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
