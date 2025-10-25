import React from 'react';
import './play.css';

import Button from 'react-bootstrap/Button';

import { useState } from 'react';

// import { ConnectGame } from './connectGame';
import { PickColor } from './pickColor';

export function Play({myColor, setMyColor}) {

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
      <div className="arrow">↓</div><div className="arrow">↓</div><div className="arrow">↓</div>
      <div className="arrow">↓</div><div className="arrow">↓</div><div className="arrow">↓</div>
      <div className="arrow">↓</div>
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
     <div className="row">
 <div className="cell"></div><div className="cell"></div><div className="cell"></div>
<div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
</div>
</section>
</div> 
</main>
    )
}