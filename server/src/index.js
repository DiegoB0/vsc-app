import http from 'http';
import { Server as webSocketServer } from 'socket.io';
import app from './app';

const server = http.createServer(app);
const httpServer = server.listen(process.env.PORT || 4000);
const io = new webSocketServer(httpServer);

console.log('Server on port 4000');
