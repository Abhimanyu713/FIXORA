async function sendCallRequest(
  IO,
  userSocketMap,
  socket,
  index,
  userLists,
  callerId
) {
  // console.log("this is the sending ", index);
  // console.log("📞 Calling users:", userLists[index]);
  if (!userLists || userLists.length === 0) {
    console.log("❌ No users to call.");
    return;
  }

  if (index < 0 || index >= userLists.length) {
    console.log("❌ No more users to call.");
    return;
  }

  const userId = userLists[index];
  const userSocketId = userSocketMap.getUserSocketId(userId);

  if (userSocketId) {
    console.log(
      `📞 Sending call request to ${userId} (Socket: ${userSocketId})`
    );
    IO.to(userSocketId).emit("n", {
      success: true,
      userIds: userLists,
      // index: currentIndex,
      index: index,
      callerId: callerId,
    });
  } else {
    console.log(`⚠️ User ${userId} is not connected.`);
    socket.emit("searchFailed", {
      success: false,
      userId,
      message: "User is not connected.",
    });

    // Move to the next user if available
    index++;
    if (index < userLists.length) {
      sendCallRequest(IO, userSocketMap, socket, index, userLists);
    } else {
      console.log("❌ No more users left to call.");
      emitError(socket, "callFailed", "No more users available.");
    }
  }
}
 
module.exports = {
  sendCallRequest,
};

// // before callerId is added
// async function sendCallRequest(IO, userSocketMap, socket, index, userLists) {
//   // console.log("this is the sending ", index);
//   // console.log("📞 Calling users:", userLists[index]);
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
//       // index: currentIndex,
//       index: index,
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
//       sendCallRequest(IO, userSocketMap, socket, index, userLists);
//     } else {
//       console.log("❌ No more users left to call.");
//       emitError(socket, "callFailed", "No more users available.");
//     }
//   }
// }

// module.exports = {
//   sendCallRequest, 
// };
  