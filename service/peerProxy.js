const { WebSocketServer, WebSocket } = require('ws')

function peerProxy(httpServer) {
    const socketServer = new WebSocketServer({ server: httpServer })

    let player1 = null
    let player2 = null
    let currTurn = 1

    socketServer.on('connection', (socket) => {

        if (!player1) {
            player1 = socket
            socket.send(JSON.stringify({ type: 'status', message: 'waiting_for_player'}))
        } else if (!player2) {
            player2 = socket
            player2.send(JSON.stringify({ type: 'status', message: 'lets_play'}))
            player1.send(JSON.stringify({ type: 'status', message: 'lets_play'}))
            player1.send(JSON.stringify({ type: 'turn', message: 'your_turn'}))
        } else {
            socket.send(JSON.stringify({ type: 'full' }))
            socket.close()
            return
        }

        socket.on('message', (raw) => {
            const msg = JSON.parse(raw)
            if (msg.type === 'move') {
                if (currTurn === 1) {
                    currTurn = 2
                    player2.send(JSON.stringify({ type: 'opponentMove', column: msg.column, row: msg.row }))
                } else if (currTurn === 2) {
                    currTurn = 1
                    player1.send(JSON.stringify({ type: 'opponentMove', column: msg.column, row: msg.row }))
                }
            } else if (msg.type === "WIN") {
                if (currTurn === 2) {
                    player2.send(JSON.stringify({ type: 'lose' }))
                } else if (currTurn === 1) {
                    player1.send(JSON.stringify({ type: 'lose' }))
                }
            }
        })

        socket.on('close', () => {
            if (socket === player1) {
                player1 = null
                console.log("player1 quit")
                currTurn = 1
            } else if (socket === player2) {
                player2 = null
                console.log("player2 quit")
                currTurn = 1
            }
        })   
    })

}

module.exports = { peerProxy }


