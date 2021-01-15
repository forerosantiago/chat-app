const express = require('express');
const app = express();
const server = require('http').createServer(app);

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});