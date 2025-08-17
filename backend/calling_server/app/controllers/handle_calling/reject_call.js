const { sendCallRequest } = require("./sendCallRequest");

function emitError(socket, event, message) {
  socket.emit(event, { success: false, message });
}

const rejectCall = (data, socket, IO, userSocketMap) => {
  // console.log("client index", data.index);
  console.log(`🚫 Call rejected by ${data.calleeId}`);
  console.log("call is from ", data.callerId);
  currentIndex = data.index;
  if (Array.isArray(data.userList) && data.userList.length > 0) {
    userLists = data.userList;
  } else {
    console.log("⚠️ Invalid or empty user list received.");
    return;
  }

  // currentIndex++; // Move to the next usercd
  // console.log(`🔄 Moving to the next user (Index: ${currentIndex})`);

  if (currentIndex < userLists.length) {
    console.log(`📞 Calling next user: ${userLists[currentIndex]}`);
    sendCallRequest(
      IO,
      userSocketMap,
      socket,
      currentIndex,
      userLists,
      data.callerId
    );
  } else {
    console.log("❌ No more users left to call. Resetting state.");
    currentIndex = 0;
    userLists = [];
    emitError(socket, "callFailed", "No more users available."); 
  }
};

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
//       sendCallRequest(IO, userSocketMap, socket, index, userLists);
//     } else {
//       console.log("❌ No more users left to call.");
//       emitError(socket, "callFailed", "No more users available.");
//     }
//   }
// }

module.exports = { rejectCall };
