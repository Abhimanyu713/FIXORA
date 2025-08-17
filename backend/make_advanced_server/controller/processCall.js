function processNextUser(connectedUser, currentIndex, userSocketMap) {
  if (currentIndex >= connectedUser.length) {
    console.log("All users processed or no connected users available.");
    return;
  }

  const singleUser = connectedUser[currentIndex];
  console.log(`Calling user: ${singleUser}`);

  // Emit message to the current user
  IO.to(userSocketMap.get(singleUser)).emit("message", {
    callerId: socket.id,
    msg: "Incoming call",
  });
}

module.exports = {
  processNextUser,
};
