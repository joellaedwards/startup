import React from 'react';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { playGame } from './playGame';



export function PickColor({ setMyColor }) {

    return (
    <main>
        <h2>Pick Your Color:</h2>
        <ul className="colors" style={{listStyleType: 'none'}}>
            <li>
                <Button style={{ backgroundColor: '#d81db0' }} onClick={() => setMyColor("pink")}>Pink</Button>
            </li>
            <li>
                <Button style={{ backgroundColor: 'green' }} onClick={() => setMyColor("green")}>Green</Button>
            </li>
            <li>
                <Button style={{ backgroundColor: 'yellow', color: 'black'}} onClick={() => setMyColor("yellow")}>Yellow</Button>
            </li>
            <li>
                <Button style={{ backgroundColor: 'red' }} onClick={() => setMyColor("red")}>Red</Button>
            </li>
        </ul>
    </main>
    )


    console.log("color set as " + Color)


    return (<h1>OH HI IT WORKS!</h1>)

//     return (   
//         <div>
//         <h2>Your color is {color}</h2>
//     <section className="game-updates">
//         You are playing with Bill.
//         <br  />
//         Bill just placed a token SOMEWHERE
//         <br  />
//         It's your turn.
//     </section>

//     <br />
//  <section className="game-board">
//      <div className="row">
//       <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//    </div>
//     <div className="row">
//         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     </div>
//      <div className="row">
//      <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//       <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//      </div>
//     <div className="row">
//        <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//      </div>
//     <div className="row">
//          <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//          <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     </div>
//      <div className="row">
//  <div className="cell"></div><div className="cell"></div><div className="cell"></div>
// <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
// </div>
// </section>
// </div> )
        
        {/* onClick={() => }
        <ConnectGame pieceCol={props.}
    </section>



    <br />
    <br />

    <h3>{fourFact}</h3>
    <button type="submit">Save Game</button> */}

}