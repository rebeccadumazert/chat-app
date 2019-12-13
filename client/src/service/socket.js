import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:3002');

function getMessage(cb) {
  socket.on('message', data => {
    cb(data);
  });
}
function sendMessage(message) {
  socket.emit('message', message);
}

export { getMessage, sendMessage };
