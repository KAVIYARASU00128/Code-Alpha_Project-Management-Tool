function socketSetup(io) {
  io.on('connection', (socket) => {
    console.log('User connected: ', socket.id);

    socket.on('joinProject', (projectId) => {
      socket.join(projectId);
      console.log(`User joined project room: ${projectId}`);
    });

    socket.on('taskUpdated', (projectId, task) => {
      io.to(projectId).emit('updateTask', task);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected: ', socket.id);
    });
  });
}

module.exports = { socketSetup };
