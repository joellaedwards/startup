import React from 'react';
import './play.css';

import Button from 'react-bootstrap/Button';
import { dropPiece } from './dropPiece';

import { useState } from 'react';

// import { ConnectGame } from './connectGame';
import { PickColor } from './pickColor';

export function Play({myColor, setMyColor, board, setBoard}) {

    if (myColor === "") {
      return <PickColor setMyColor={setMyColor} />;
    }


    return (
      <main>
        <div>
        <h2>Your color is a {myColor}</h2>
    <section className="game-updates">
        You are playing with Bill.
        <br  />
        Bill just placed a token SOMEWHERE
        <br  />
        It's your turn.
    </section>

    <br />
 <section className="game-board">
    <div className="arrow-row">
      <Button className="arrow" onClick={() => dropPiece(0, board, setBoard, myColor)}>↓</Button><Button className="arrow" onClick={() => dropPiece(1, board, myColor)}>↓</Button><Button className="arrow" onClick={() => dropPiece(2, board, myColor)}>↓</Button>
      <Button className="arrow" onClick={() => dropPiece(3, board, setBoard, myColor)}>↓</Button><Button className="arrow" onClick={() => dropPiece(4, board, myColor)}>↓</Button><Button className="arrow" onClick={() => dropPiece(5, board, myColor)}>↓</Button>
      <Button className="arrow" onClick={() => dropPiece(6, board, setBoard, myColor)}>↓</Button>
    </div>
     <div className="row">
      <div className="cell" style={{backgroundColor: board[0][0] || "white"}}></div><div className="cell" style={{backgroundColor: board[0][1] || "white"}}></div><div className="cell"></div>
        <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
   </div>
    <div className="row">
        <div className="cell"></div><div className="cell"></div><div className="cell"></div>
        <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
    </div>
     <div className="row">
     <div className="cell"></div><div className="cell"></div><div className="cell"></div>
      <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
     </div>
    <div className="row">
       <div className="cell"></div><div className="cell"></div><div className="cell"></div>
        <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
     </div>
    <div className="row">
         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
    </div>
     <div className="row">
 <div className="cell"></div><div className="cell"></div><div className="cell"></div>
<div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
</div>
</section>
</div> 
</main>
    )
}