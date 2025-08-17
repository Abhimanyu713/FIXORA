const axios = require("axios");

function emitError(socket, event, message) {
  socket.emit(event, { success: false, message });
}

const searchPeople = async (data) => {
  currentIndex = 0; // Reset index for a new search
  try {
    if (!data.category) {
      emitError(socket, "searchFailed", "Category is required.");
      return;
    }

    console.log("🔍 Search request received for category:", data.category);

    // Fetch users based on category
    const response = await axios.post(
      `http://192.168.1.4:9000/userDetails/filter`,
      { category: data.category }
    );

    userLists = response.data?.data?.map((user) => user.user_id) || [];

    console.log(`📋 Found users: ${userLists} and length: ${userLists.length}`);

    if (userLists.length === 0) {
      emitError(socket, "searchFailed", "No users found.");
      return;
    }

    currentIndex = 0; // Reset index for a new search
    console.log(`inital Current Index: ${currentIndex}`);
    sendCallRequest(IO, userSocketMap, socket, currentIndex, userLists);
    console.log("📞 Calling users:", userLists);
  } catch (error) {
    console.error("❌ Error in search event:", error.message);
    emitError(socket, "searchFailed", "Internal server error.");
  }
};

module.exports = { searchPeople };
