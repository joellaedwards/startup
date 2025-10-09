import React from 'react';
import './play.css';

export function Play() {
  return (
<main>
    <section className="color-choices">
        <h2>Pick Your Color:</h2>
        <ul className="colors">
            <li className="color" style={{color: '#17197c'}}>Blue</li>
            <li className="color" style={{color: '#d81db0'}}>Pink</li>
            <li className="color" style={{color: 'green'}}>Green</li>
            <li className="color" style={{color: 'yellow'}}>Yellow</li>
            <li className="color" style={{color: '#571870'}}>Purple</li>
            <li className="color" style={{color: 'red'}}>Red</li>
        </ul>
    </section>
    <section className="game-updates">
        You are playing with Bob.
        <br  />
        Bob just placed a token in the second column.
        <br  />
        It's your turn.
    </section>

    <br />
    <br />

    <section className="game-board">
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

    <br />
    <br />

    <h3>Random fact about the number 4 from the numbers API</h3>
    <button type="submit">Save Game</button>

</main>
  );
}