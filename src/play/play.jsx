import React from 'react';
import './play.css';
import { myColor } from './Color';

import Button from 'react-bootstrap/Button';

import { playGame } from './playGame';
import { useState } from 'react';

// import { ConnectGame } from './connectGame';
import { PickColor } from './pickColor';

export function Play(props) {

    const [myColor, setMyColor] = useState("");

    console.log("in play!")
    

    // const [fourFact, setFourFact] = React.useState('');
    
    // React.useEffect(() => {
    //     setFourFact("placeholder fact")
    // }, []);


    if (myColor === "") {
      return <PickColor setMyColor={setMyColor} />;
    }


    return (
      <main>
        <h2>your color is picked?</h2>

        </main>
    )
}