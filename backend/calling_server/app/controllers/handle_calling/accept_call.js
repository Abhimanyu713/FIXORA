const userSocketMap = require("../../models/userSocketMap");

const acceptCall = (data, socket, IO, userSocketMap) => {
  console.log("call accepted");
  console.log("caller id", data.calleeId);
  console.log("data", data);
  const userSocketId = userSocketMap.getUserSocketId(data.callerId);

  IO.to(userSocketId).emit("call_accepted", {
    callerId: data.calleeId,
    success: true,
  });
};

module.exports = { acceptCall };
