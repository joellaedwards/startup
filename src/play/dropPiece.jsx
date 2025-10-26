import React from 'react';


export function dropPiece(pieceCol, board, setBoard, myColor) {

    console.log('dropped in colNum: ' + pieceCol)
    console.log("color: " + myColor)
    console.log("board: " + board)


    const ROWS = 6;
    const COLS = 7;

    
    let pieceRow = isAvailable(pieceCol)
    if (pieceRow === -1) {
        return (<h3>Column is already full. Try a different one.</h3>)
    }
    



    function isAvailable(pieceCol) {
        const newBoard = board.map(row => [...row]);
        
        for (let row = ROWS - 1; row >= 0; --row) {
            if (!newBoard[row][pieceCol]) {
                newBoard[row][pieceCol] = myColor;
                setBoard(newBoard)
                return row
            }
        }
        return -1
    }



    function isFourInARow(pieceRow, pieceCol) {
        let numInOrder = 1;
        for (i = 1; i < 4; ++i) {
            testRow = pieceRow - i;
            if (testRow < 0) {
                break
            }
            if (board[testRow][pieceCol] == color) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        testRow = pieceRow
        for (i = 1; i < 4; ++i) {
            testRow = pieceRow + i;
            if (testRow > 5) {
                break
            }
            if (board[testRow][pieceCol] == color) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }


        // horizontally
        numInOrder = 1;
        for (i = 1; i < 4; ++i) {
            testCol = pieceCol - i;
            if (testCol < 0) {
                break
            }
            if (board[pieceRow][testCol] == color) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        testCol = pieceCol
        for (i = 1; i < 4; ++i) {
            testCol = pieceCol + i;
            if (testCol > 6) {
                break
            }
            if (board[pieceRow][testCol] == color) {
                numInOrder = numInOrder + 1
            }
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        // up right
        numInOrder = 1;
        for (i = 1; i < 4; ++i) {
            testRow = pieceRow + i;
            testCol = pieceCol + 1;
            if (testRow > 5 || testCol > 6) {
                break
            }
            if (board[testRow][testCol] == color) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }
        // down left
        for (i = 1; i < 4; ++i) {
            testRow = pieceRow - i;
            testCol = pieceCol - i;
            if (testRow < 0 || testCol < 0) {
                break
            }
            if (board[testRow][testCol] == color) {
                numInOrder = numInOrder + 1
            }   
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        // up left
        numInOrder = 1;
        for (i = 1; i < 4; ++i) {
            testRow = pieceRow + i;
            testCol = pieceCol - 1;
            if (testRow > 5 || testCol < 0) {
                break
            }
            if (board[testRow][testCol] == color) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }
        // down right
        for (i = 1; i < 4; ++i) {
            testRow = pieceRow - i;
            testCol = pieceCol + i;
            if (testRow < 0 || testCol > 6) {
                break
            }
            if (board[testRow][testCol] == color) {
                numInOrder = numInOrder + 1
            } 
            else {
                break
            }
        }
        if (numInOrder >= 4) {
            return true
        }

        return false
    }


}