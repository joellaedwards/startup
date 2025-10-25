import React from 'react';
import './play.css';

import Button from 'react-bootstrap/Button';

import { playGame } from './playGame';
import { useState } from 'react';

// import { ConnectGame } from './connectGame';
import { PickColor } from './pickColor';

export function Play({myColor, setMyColor}) {

    console.log("in play!")
    


    if (myColor === "") {
      return <PickColor setMyColor={setMyColor} />;
    }


    return (
      <main>
        <h2>your color is picked! {myColor}</h2>

        </main>
    )
}