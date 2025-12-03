const { WebSocketServer, WebSocket } = require('ws')

function peerProxy(httpServer) {
    console.log("in peer proxy")
    // this is the backend so it'll be ws not wss and it will be http because my backend is just on
    // localhost:4000
    const socketServer = new WebSocketServer({ server: httpServer })

    let player1 = null
    let player2 = null

    socketServer.on('connection', (socket) => {
        console.log("socket is connected wohoo!")


        if (!player1) {
            console.log("player1 joined")
            player1 = socket
            socket.send(JSON.stringify({ type: 'status', message: 'waiting_for_player'}))
        } else if (!player2) {
            console.log("player2 joined")
            player2 = socket
            player2.send(JSON.stringify({ type: 'status', message: 'lets_play'}))
            player1.send(JSON.stringify({ type: 'status', message: 'lets_play'}))
        } else {
            console.log('oh no the games full')
            socket.send(JSON.stringify({ type: 'full' }))
            socket.close()
            return
        }

        socketServer.on('message', function message(data) {
            socketServer.clients.forEach((client) => {
                if (client !== socket && client.readyState === WebSocket.OPEN) {
                    client.send(data)
                }
            })
        })

        socket.on('close', () => {
            console.log('player disconnected')

            if (socket === player1) {
                player1 = null
                console.log("player1 quit")
            } else if (socket === player2) {
                player2 = null
                console.log("player2 quit")
            }
        })


        
    })




}

module.exports = { peerProxy }


