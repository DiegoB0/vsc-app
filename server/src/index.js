const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: '*',
	},
});

io.on('connection', (socket) => {
	console.log('A client has connected!');
});

server.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
