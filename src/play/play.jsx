import React from 'react';
import './play.css';

import Button from 'react-bootstrap/Button';
import { dropPiece } from './dropPiece';

import { useState } from 'react';

// import { ConnectGame } from './connectGame';
import { PickColor } from './pickColor';

export function Play({ myColor, setMyColor, board, setBoard }) {

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
          <div className="row">
            <div className="cell" style={{ backgroundColor: board[0][0] || "white" }}></div><div className="cell" style={{ backgroundColor: board[0][1] || "white" }}></div><div className="cell" style={{ backgroundColor: board[0][2] || "white" }}></div>
            <div className="cell" style={{ backgroundColor: board[0][3] || "white" }}></div><div className="cell" style={{ backgroundColor: board[0][4] || "white" }}></div><div className="cell" style={{ backgroundColor: board[0][5] || "white" }}></div><div className="cell" style={{ backgroundColor: board[0][6] || "white" }}></div>
          </div>
          <div className="row">
            <div className="cell" style={{ backgroundColor: board[1][0] || "white" }}></div><div className="cell" style={{ backgroundColor: board[1][1] || "white" }}></div><div className="cell" style={{ backgroundColor: board[1][2] || "white" }}></div>
            <div className="cell" style={{ backgroundColor: board[1][3] || "white" }}></div><div className="cell" style={{ backgroundColor: board[1][4] || "white" }}></div><div className="cell" style={{ backgroundColor: board[1][5] || "white" }}></div><div className="cell" style={{ backgroundColor: board[1][6] || "white" }}></div>
          </div>
          <div className="row">
            <div className="cell" style={{ backgroundColor: board[2][0] || "white" }}></div><div className="cell" style={{ backgroundColor: board[2][1] || "white" }}></div><div className="cell" style={{ backgroundColor: board[2][2] || "white" }}></div>
            <div className="cell" style={{ backgroundColor: board[2][3] || "white" }}></div><div className="cell" style={{ backgroundColor: board[2][4] || "white" }}></div><div className="cell" style={{ backgroundColor: board[2][5] || "white" }}></div><div className="cell" style={{ backgroundColor: board[2][6] || "white" }}></div>
          </div>
          <div className="row">
            <div className="cell" style={{ backgroundColor: board[3][0] || "white" }}></div><div className="cell" style={{ backgroundColor: board[3][1] || "white" }}></div><div className="cell" style={{ backgroundColor: board[3][2] || "white" }}></div>
            <div className="cell" style={{ backgroundColor: board[3][3] || "white" }}></div><div className="cell" style={{ backgroundColor: board[3][4] || "white" }}></div><div className="cell" style={{ backgroundColor: board[3][5] || "white" }}></div><div className="cell" style={{ backgroundColor: board[3][6] || "white" }}></div>
          </div>
          <div className="row">
            <div className="cell" style={{backgroundColor: board[4][0] || "white"}}></div><div className="cell" style={{backgroundColor: board[4][1] || "white"}}></div><div className="cell" style={{backgroundColor: board[4][2] || "white"}}></div>
            <div className="cell"style={{backgroundColor: board[4][3] || "white"}}></div><div className="cell"style={{backgroundColor: board[4][4] || "white"}}></div><div className="cell"style={{backgroundColor: board[4][5] || "white"}}></div><div className="cell"style={{backgroundColor: board[4][6] || "white"}}></div>
          </div>
          <div className="row">
            <div className="cell" style={{backgroundColor: board[5][0] || "white"}}></div><div className="cell" style={{backgroundColor: board[5][1] || "white"}}></div><div className="cell" style={{backgroundColor: board[5][2] || "white"}}></div>
            <div className="cell"style={{backgroundColor: board[5][3] || "white"}}></div><div className="cell"style={{backgroundColor: board[5][4] || "white"}}></div><div className="cell"style={{backgroundColor: board[5][5] || "white"}}></div><div className="cell"style={{backgroundColor: board[5][6] || "white"}}></div>
        </div>
        </section>
      </div>
    </main>
  )
}