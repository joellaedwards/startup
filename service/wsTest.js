// const http = require('http')
// const { WebSocketServer } = require('ws')

const port = 4000

const

server.listen(3000, () => console.log('Server listening on 3000'));



const http = require('http');
const { WebSocketServer } = require('ws');

const server = http.createServer();
server.listen(3000, () => console.log('Server listening on 3000'));

const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', socket => {
  console.log('Client connected');
  socket.send(JSON.stringify({ type: 'status', message: 'connected_to_server' }));
});
