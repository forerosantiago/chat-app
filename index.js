const express = require('express');
const app = express();
const http = require('http').createServer(app);

const path = require('path');
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname + '/public')));

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)

    });
  });

// start server
http.listen(3000, () => {
    console.log('listening on *:3000');
});