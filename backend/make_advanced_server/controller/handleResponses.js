function acceptCall(data) {
  var callerId = data["callerId"];
  var reply = data["reply"];
  //   const callerSocketId = userSocketMap.get(callerId);
  console.log(`This is the ${data["response"]}`);
  //   if (callerSocketId) {
  //     console.log(`Call accepted by ${userId} for ${callerId}`);
  //     // IO.to(callerSocketId).emit("accept", {
  //     //   calleeId: userId,
  //     //   reply: "accept",
  //     // });
  //   } else {
  //     emitError(
  //       socket,
  //       "callFailed",
  //       `Caller with ID ${callerId} is not connected.`
  //     );
  //   }
}

function rejectCall(data) {
  // const callerSocketId = userSocketMap.get(callerId);
  console.log(`This is the ${data["response"]}`);
  // if (callerSocketId) {
  //   console.log(`Call rejected by ${userId} for ${callerId}`);
  //   // IO.to(callerSocketId).emit("reject", {
  //   //   calleeId: userId,
  //   //   reply: "Reject",
  //   // });
  // } else {
  //   emitError(
  //     socket,
  //     "callFailed",
  //     `Caller with ID ${callerId} is not connected.`
  //   );
  // }
}

module.exports = {
  acceptCall,
  rejectCall,
};
