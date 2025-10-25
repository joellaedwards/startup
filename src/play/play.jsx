import React from 'react';
import './play.css';

import { ConnectGame } from './connectGame';

export function Play(props) {

    const [fourFact, setFourFact] = React.useState('');
    
    React.useEffect(() => {
        setFourFact("placeholder fact")
    }, []);
    


  return (
    <main>
    {/* <section className="color-choices">
        <h2>Pick Your Color:</h2>
        <ul className="colors">
            <li className="color" style={{color: '#17197c'}}>Blue</li>
            <li className="color" style={{color: '#d81db0'}}>Pink</li>
            <li className="color" style={{color: 'green'}}>Green</li>
            <li className="color" style={{color: 'yellow'}}>Yellow</li>
            <li className="color" style={{color: '#571870'}}>Purple</li>
            <li className="color" style={{color: 'red'}}>Red</li>
        </ul>
    </section> */}
    <section className="game-updates">
        You are playing with Bill.
        <br  />
        Bill just placed a token in the {props.pieceCol}
        <br  />
        It's your turn.
    </section>

    <br />
    <section className="game-board">
        
        onClick={() => }
        <ConnectGame pieceCol={props.}
    </section>



    <br />
    <br />

    <h3>{fourFact}</h3>
    <button type="submit">Save Game</button>

</main>
  );
}