import React from 'react';
import './play.css';
import Button from 'react-bootstrap/Button';
import { PickColor } from './pickColor';

export function Play({ myColor, setMyColor, board, setBoard, myTurn, setMyTurn, savedGames, setSavedGames}) {

  const [errorMessage, setErrorMessage] = React.useState('')
  const [winMessage, setWinMessage] = React.useState('')
  
  if (myColor === "") {
    return <PickColor setMyColor={setMyColor} />;
  }

  return (
    <main>
      <div>
        <h2>Your color is a {myColor}</h2>
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
      </div>
    </main>
  )

  function dropPiece(pieceCol) {
    if (myTurn === false) {
      setErrorMessage("Not your turn.");
      return
    }
    let pieceRow = isAvailable(pieceCol)
    if (pieceRow != -1) {
      if (isFourInARow(pieceRow, pieceCol)) {
        setWinMessage("YOU WIN!")
        return
      }
    }
  }

  function isAvailable(pieceCol) {
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

    function saveGame() {
        const newGame = {
            gameNumber: savedGames.length + 1,
            colorWon: myColor,
            gameDate: new Date().toISOString()
        };
        setSavedGames([...savedGames, newGame])
    }


}