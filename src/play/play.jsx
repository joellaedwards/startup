import React from 'react';
import './play.css';

import Button from 'react-bootstrap/Button';
import { DropPiece } from './dropPiece';

import { useState } from 'react';

// import { ConnectGame } from './connectGame';
import { PickColor } from './pickColor';

export function Play({ myColor, setMyColor, board, setBoard }) {

  const [errorMessage, setErrorMessage] = React.useState('')
    const ROWS = 6;
    const COLS = 7;
  if (myColor === "") {
    return <PickColor setMyColor={setMyColor} />;
  }


  function dropPiece(pieceCol) {
    const newBoard = board.map(row => [...row]);
        
    for (let row = ROWS - 1; row >= 0; --row) {
            if (!newBoard[row][pieceCol]) {
                newBoard[row][pieceCol] = myColor;
                setBoard(newBoard)
                setErrorMessage('')
                return true
            }
        }
        setErrorMessage("This column is already full. Try a different column.")
        return false
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
      </div>
    </main>
  )
}