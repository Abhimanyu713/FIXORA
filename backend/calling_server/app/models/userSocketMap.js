// userSocketMap.js
class UserSocketMap {
    constructor() {
      this.map = new Map();
    }
  
    addUser(userId, socketId) {
      this.map.set(userId, socketId);
    }
  
    getUserSocketId(userId) {
      return this.map.get(userId);
    }
  
    removeUser(userId) {
      this.map.delete(userId);
    }
  
    getAllUsers() {
      return this.map;
    }
  }
  
  module.exports = new UserSocketMap();
  