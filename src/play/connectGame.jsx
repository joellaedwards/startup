import React from 'react';


export function ConnectGame(props) {
    const userName = props.userName;
    const color = props.color;
    const ROWS = 6;
    const COLS = 7;

    const [board, setBoard] = React.useState(
        Array.from({ length: ROWS }, () => Array(COLS).fill(null))
    );    

    function onDropped(pieceCol) {
        const newBoard = board.map(row => [...row]);
        for (let row = 0; row < ROWS; row++) {
            if (!board[row][pieceCol]) {
                newBoard[row][pieceCol] = color
                setBoard(newBoard)
                return true;
            }
        }
        // that column is full :(
        return false
    }
    


    return (

        // style for row is flex

        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <div
                        key={colIndex}
                        onClick={() => onDropped(colIndex)}
                    ></div>    
                    ))}
                </div>
            ))}
        </div>


    // <section className="game-board">
    //     <div className="row">
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //     </div>
    //     <div className="row">
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //     </div>
    //     <div className="row">
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //     </div>
    //     <div className="row">
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //     </div>
    //     <div className="row">
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //     </div>
    //     <div className="row">
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
    //     </div>
    // </section>








    )

}