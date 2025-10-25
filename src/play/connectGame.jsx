// import React from 'react';


// export function ConnectGame(props) {
//     const userName = props.userName;
//     let color = "red";
//     const ROWS = 6;
//     const COLS = 7;

//     const [board, setBoard] = React.useState(
//         Array.from({ length: ROWS }, () => Array(COLS).fill(null))
//     );    


//     async function onPressed(clickPosition) {
//         if (placePiece(POSITION HERE) != -1) {

//         }
//     }

//     function placePiece(pieceCol) {
//         const newBoard = board.map(row => [...row]);
//         for (let row = 0; row < ROWS; row++) {
//             if (!board[row][pieceCol]) {
//                 newBoard[row][pieceCol] = color
//                 setBoard(newBoard)
//                 return row;
//             }
//         }
//         // that column is full :(
//         return -1
//     }

//     function isFourInARow(pieceRow, pieceCol) {

//         // vertically
//         let numInOrder = 1;
//         for (i = 1; i < 4; ++i) {
//             testRow = pieceRow - i;
//             if (testRow < 0) {
//                 break
//             }
//             if (board[testRow][pieceCol] == color) {
//                 numInOrder = numInOrder + 1
//             } 
//             else {
//                 break
//             }
//         }
//         if (numInOrder >= 4) {
//             return true
//         }

//         testRow = pieceRow
//         for (i = 1; i < 4; ++i) {
//             testRow = pieceRow + i;
//             if (testRow > 5) {
//                 break
//             }
//             if (board[testRow][pieceCol] == color) {
//                 numInOrder = numInOrder + 1
//             } 
//             else {
//                 break
//             }
//         }
//         if (numInOrder >= 4) {
//             return true
//         }
            

//         // horizontally
//         numInOrder = 1;
//         for (i = 1; i < 4; ++i) {
//             testCol = pieceCol - i;
//             if (testCol < 0) {
//                 break
//             }
//             if (board[pieceRow][testCol] == color) {
//                 numInOrder = numInOrder + 1
//             } 
//             else {
//                 break
//             }
//         }
//         if (numInOrder >= 4) {
//             return true
//         }

//         testCol = pieceCol
//         for (i = 1; i < 4; ++i) {
//             testCol = pieceCol + i;
//             if (testCol > 6) {
//                 break
//             }
//             if (board[pieceRow][testCol] == color) {
//                 numInOrder = numInOrder + 1
//             }
//             else {
//                 break
//             }
//         }
//         if (numInOrder >= 4) {
//             return true
//         }

//         // up right
//         numInOrder = 1;
//         for (i = 1; i < 4; ++i) {
//             testRow = pieceRow + i;
//             testCol = pieceCol + 1;
//             if (testRow > 5 || testCol > 6) {
//                 break
//             }
//             if (board[testRow][testCol] == color) {
//                 numInOrder = numInOrder + 1
//             } 
//             else {
//                 break
//             }
//         }
//         if (numInOrder >= 4) {
//             return true
//         }
//         // down left
//         for (i = 1; i < 4; ++i) {
//             testRow = pieceRow - i;
//             testCol = pieceCol - i;
//             if (testRow < 0 || testCol < 0) {
//                 break
//             }
//             if (board[testRow][testCol] == color) {
//                 numInOrder = numInOrder + 1
//             } 
//             else {
//                 break
//             }
//         }
//         if (numInOrder >= 4) {
//             return true
//         }

//         // up left
//         numInOrder = 1;
//         for (i = 1; i < 4; ++i) {
//             testRow = pieceRow + i;
//             testCol = pieceCol - 1;
//             if (testRow > 5 || testCol < 0) {
//                 break
//             }
//             if (board[testRow][testCol] == color) {
//                 numInOrder = numInOrder + 1
//             } 
//             else {
//                 break
//             }
//         }
//         if (numInOrder >= 4) {
//             return true
//         }
//         // down right
//         for (i = 1; i < 4; ++i) {
//             testRow = pieceRow - i;
//             testCol = pieceCol + i;
//             if (testRow < 0 || testCol > 6) {
//                 break
//             }
//             if (board[testRow][testCol] == color) {
//                 numInOrder = numInOrder + 1
//             } 
//             else {
//                 break
//             }
//         }
//         if (numInOrder >= 4) {
//             return true
//         }

//         return false
//     }

//     function changeTurn() {
//         if (color == "red") {
//             color = "yellow"
//         }
//     }
    


//     return (

//         // style for row is flex

//         <div className="board">
//             {board.map((row, rowIndex) => (
//                 <div key={rowIndex} className="row">
//                     {row.map((cell, colIndex) => (
//                         <div
//                         key={colIndex}
//                         onClick={() => onDropped(colIndex)}
//                     ></div>    
//                     ))}
//                 </div>
//             ))}
//         </div>


//     // <section className="game-board">
//     //     <div className="row">
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //     </div>
//     //     <div className="row">
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //     </div>
//     //     <div className="row">
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //     </div>
//     //     <div className="row">
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //     </div>
//     //     <div className="row">
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //     </div>
//     //     <div className="row">
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //         <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
//     //     </div>
//     // </section>








//     )
// }
