const { WebSocketServer, WebSocket } = require('ws')

function peerProxy(httpServer) {
    console.log("in peer proxy")
    // this is the backend so it'll be ws not wss and it will be http because my backend is just on
    // localhost:4000
    const socketServer = new WebSocketServer({ server: httpServer })

    socketServer.on('connection', (socket) => {
        socketServer.isAlive = true;
        console.log("socket is alive wohoo!")

        socketServer.on('message', function message(data) {
            socketServer.clients.forEach((client) => {
                if (client !== socket && client.readyState === WebSocket.OPEN) {
                    client.send(data)
                }
            })
        })


        
    })




}

module.exports = { peerProxy }





// const { WebSocketServer } = require('ws');

// // TODO finish making this page work lol also have to make the board work between people but that's fine

// function peerProxy(httpServer) {
//     // create websocket object
//     const socketServer = new WebSocketServer({ server: httpServer })


//     let player1 = null
//     let player2 = null

//     socketServer.on('connection', socket => {
//         console.log("new client connected hi!")
//         if (!player1) {
//             player1 = socket;
//             console.log("waiting for other player...")
//             socket.send(JSON.stringify({ type: "status", message: "waiting_for_player" }) )
//         } 
//         else if (!player2) {
//             player2 = socket;
//             console.log("omg welcome!! lets start playing!")

//             player1.send(JSON.stringify({ type: "status", message: "player_joined "}))
//             player2.send(JSON.stringify({ type: "status", message: "player_joined "}))

//         } else {
//             console.log("oh no its full so sorry!")
//             socket.send(JSON.stringify({type: "full"}))
//             socket.close()
//             return;
//         }

//         socket.on('message', msg => {
//             const data = JSON.parse(msg)
//             if (data.type === "move") {
//                 // is this player1's socket and is player2 connected
//                 if (socket === player1 && player2) {
//                     player2.send(JSON.stringify({ type: "opponentMove", column: data.column }))
//                 } else if (socket === player2 && player1) {
//                     player1.send(JSON.stringify({ type: "opponentMove", column: data.column }))

//                 }
//             }
//         })

//         socket.on('close', () => {
//             if (socket === player1) {
//                 player1 = null
//             }
//             if (socket === player2) {
//                 player2 = null
//             }
//         })
    

// })
// }

// module.exports = { peerProxy };