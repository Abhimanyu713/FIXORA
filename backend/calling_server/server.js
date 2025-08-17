const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const signalingRoutes = require("./app/routes/signalingRoutes");
const socketController = require("./app/controllers/socketController");

const app = express();
const port = process.env.PORT || 4004;

// Middleware
app.use(express.json());
app.use("/", signalingRoutes);

// HTTP Server
const server = http.createServer(app);

// Socket.IO Server
const IO = new Server(server);
socketController(IO);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
