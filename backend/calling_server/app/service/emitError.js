function emitError(socket, event, message) {
  socket.emit(event, { success: false, message });
}

module.exports = {
  emitError,
};
