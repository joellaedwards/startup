import React from 'react';
import Button from 'react-bootstrap/Button';

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
}