import React from 'react';
import './play.css';
import Button from 'react-bootstrap/Button';
import { PickColor } from './pickColor';
import { useParams } from 'react-router-dom';

export function Play({ myColor, setMyColor, board, setBoard, myTurn, setMyTurn}) {

    
  const [errorMessage, setErrorMessage] = React.useState('')
  const [winMessage, setWinMessage] = React.useState('')
  const [loseMessage, setLoseMessage] = React.useState('')
  const [myFact, setMyFact] = React.useState("")
  const { gameId } = useParams();

  const wsRef = React.useRef(null)
  console.log("setup wsRef")

  React.useEffect(() => {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';

    console.log("port: ", port)
    console.log("protocol: ", protocol)

    // console.log("port: ", port)
    // console.log("protocol: ", protocol)
    // console.log()
    // wsRef.current = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    if (!window.gameSocket) {
        window.gameSocket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    }

    // connect to backend websocket
    // if (!window.gameSocket) {
        // window.gameSocket = new WebSocket('ws://localhost:4000/ws')
        // wsRef.current = new WebSocket('ws://localhost:4000/ws')


        // wsRef.current.onopen = () => {
        window.gameSocket.onopen = () => {
            console.log("backend websocket connected!! from play function")
        }

        // wsRef.current.onmessage = (event) => {
        window.gameSocket.onmessage = (event) => {

            console.log("received message: ", event.data)
            const data = JSON.parse(event.data)

            if (data.type === "status") {

                console.log("server status:", data.message)
            }

            if (data.type === "turn") {
                setMyTurn(true)
            }

            if (data.type === "opponentMove") {
                console.log("opponent move received in front end")
                const col = data.column;
                const row = data.row;
                console.log("column: ", data.column)
                setMyTurn(true)
                applyOpponentMove(row, col);

            }

            if (data.type === "lose") {
                setLoseMessage("Sorry, you lost.")
            }
        }

        window.gameSocket.onclose = () => console.log('connection closed.')
        // wsRef.current.onclose = () => console.log('connection closed.')

    // }
  })

  console.log("current game id in play: " + gameId)
  let currURL = window.location.href

  React.useEffect(() => {
    async function getFact() {
     try {
            const response = await fetch(`/api/mathfact`);
            if (!response.ok) {
                setMyFact("Error calling backend API.");
                return
            }
            
            const data = await response.json();
            const fact = data.fact
            setMyFact(fact);
        } catch (err) {
            setMyFact("Error fetchiing number fact.")
        }
    }
    getFact();
  }, []);

if (myColor === "") {
    return <PickColor setMyColor={setMyColor} />;
  }
  

  return (
    <main>
      <div>        
      <div className="share-link">
        Share this link to play with a friend! {currURL}
      </div>
        <section className="game-updates">
          You are playing with Bill.
          <br />
          Bill just placed a token SOMEWHERE
          <br />
          It's your turn.
        </section>

        <br />
        <section className="game-board">
          <div className="arrow-row">
            <Button className="arrow" onClick={() => dropPiece(0, board, setBoard, myColor)}>↓</Button><Button className="arrow" onClick={() => dropPiece(1, board, setBoard, myColor)}>↓</Button><Button className="arrow" onClick={() => dropPiece(2, board, setBoard, myColor)}>↓</Button>
            <Button className="arrow" onClick={() => dropPiece(3, board, setBoard, myColor)}>↓</Button><Button className="arrow" onClick={() => dropPiece(4, board, setBoard, myColor)}>↓</Button><Button className="arrow" onClick={() => dropPiece(5, board, setBoard, myColor)}>↓</Button>
            <Button className="arrow" onClick={() => dropPiece(6, board, setBoard, myColor)}>↓</Button>
          </div>
          {board.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((color, colIndex) => (
                  <div
                    key={colIndex}
                    className="cell"
                    style={{ backgroundColor: color || "white" }}
                  ></div>
                ))}
              </div>
            ))}
        </section>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {winMessage && <div className="win=actions"><h1 className="win-message">{winMessage}</h1>
        <Button onClick={saveGame}>Save Game</Button></div>}
        {loseMessage && <div className="lose=actions"><h1 className="lose-message">{loseMessage}</h1>
        <Button onClick={saveGame}>Save Game</Button></div>}
      </div>
      <div className="number-fact">
        Your random dog fact: {myFact}
      </div>


      
    </main>
  )

  function applyOpponentMove(pieceRow, pieceCol) {

    console.log("applying opponents move...")

    setBoard(prev => {
        const newBoard = prev.map(row => [...row])
        for (let row = 5; row >= 0; --row) {
            newBoard[pieceRow][pieceCol] = "black"
            break
        }
        return newBoard
    })
  }

  function dropPiece(pieceCol) {
    if (myTurn === false) {
      setErrorMessage("Not your turn.");
      return
    }
    let pieceRow = isAvailable(pieceCol)
    if (pieceRow != -1) {
      setMyTurn(false)
      console.log("sending message type move")

        // wsRef.current.send(JSON.stringify({
      window.gameSocket.send(JSON.stringify({
        type: "move",
        column: pieceCol,
        row: pieceRow
      }))
      if (isFourInARow(pieceRow, pieceCol)) {
        // wsRef.current.send(JSON.stringify({
        window.gameSocket.send(JSON.stringify({
                type: "WIN"
        }))        
        setWinMessage("YOU WIN!")
        return
      }
    }
  }

  function isAvailable(pieceCol) {

    setBoard(prev => {
        const newBoard = prev.map(row => [...row])

        for (let row = 5; row >= 0; --row) {
            if (!newBoard[row][pieceCol]) {
                newBoard[row][pieceCol] = myColor;
                break;
            }
        }
        return newBoard
    })

    const newBoard = board.map(row => [...row]);
    for (let row = 5; row >= 0; --row) {
            if (!newBoard[row][pieceCol]) {
                newBoard[row][pieceCol] = myColor;
                setBoard(newBoard)
                setErrorMessage('')
    
                // setMyTurn(false)
                // uncomment after webhook is set up. leave commented out now for testing four in a row and save game
                return row
            }
        }
        setErrorMessage("This column is already full. Try a different column.")
        return -1
    }

    function isFourInARow(pieceRow, pieceCol) {
        let numInOrder = 1;
        for (let i = 1; i < 4; ++i) {
           let testRow = pieceRow - i;
            if (testRow < 0) {
                break
            }
            if (board[testRow][pieceCol] == myColor) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        let testRow = pieceRow
        for (let i = 1; i < 4; ++i) {
            testRow = pieceRow + i;
            if (testRow > 5) {
                break
            }
            if (board[testRow][pieceCol] == myColor) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        // horizontally
        numInOrder = 1;
        for (let i = 1; i < 4; ++i) {
            let testCol = pieceCol - i;
            if (testCol < 0) {
                break
            }
            if (board[pieceRow][testCol] == myColor) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        let testCol = pieceCol
        for (let i = 1; i < 4; ++i) {
            testCol = pieceCol + i;
            if (testCol > 6) {
                break
            }
            if (board[pieceRow][testCol] == myColor) {
                numInOrder = numInOrder + 1
            }
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        // up right
        numInOrder = 1;
        for (let i = 1; i < 4; ++i) {
            testRow = pieceRow + i;
            testCol = pieceCol + 1;
            if (testRow > 5 || testCol > 6) {
                break
            }
            if (board[testRow][testCol] == myColor) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }
        // down left
        for (let i = 1; i < 4; ++i) {
            testRow = pieceRow - i;
            testCol = pieceCol - i;
            if (testRow < 0 || testCol < 0) {
                break
            }
            if (board[testRow][testCol] == myColor) {
                numInOrder = numInOrder + 1
            }   
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        // up left
        numInOrder = 1;
        for (let i = 1; i < 4; ++i) {
            testRow = pieceRow + i;
            testCol = pieceCol - 1;
            if (testRow > 5 || testCol < 0) {
                break
            }
            if (board[testRow][testCol] == myColor) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }
        // down right
        for (let i = 1; i < 4; ++i) {
            testRow = pieceRow - i;
            testCol = pieceCol + i;
            if (testRow < 0 || testCol > 6) {
                break
            }
            if (board[testRow][testCol] == myColor) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        return false
    }

        async function saveGame() {
        console.log("in saveGame havent called api yet though")
        const newGame = {
            
            colorWon: myColor,
            gameDate: new Date().toISOString()
        };

        await fetch('/api/game', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newGame),
        });
    }

}