const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  socket.on('message', data => {
    socket.broadcast.emit('message', data);
    console.log(data);
  });
  console.log('hi');
});

server.listen(3002, () => console.log('hi'));
