import React, { useCallback, useState, useEffect } from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const PLAYER_ONE = "Player 1";
const PLAYER_TWO = "Player 2";
const NO_WINNER = "No Winner";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

const GameLayout = ({}) => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);

  const checkCells = (cellOne, cellTwo, cellThree) => {
    return (cellOne === cellTwo && cellOne === cellThree && cellOne != null);
  }

  const checkWin = (cells) => {
    //Check Rows and Columns
    for(let i = 0; i < 3; i++) {
      if (checkCells(cells[(3 * i) + 0], cells[(3 * i) + 1], cells[(3 * i) + 2])) {
        return true;
      }
      if (checkCells(cells[(3 * 0) + i], cells[(3 * 1) + i], cells[(3 * 2) + i])) {
        return true;
      }
    }
    //Check Diagonal
    if (checkCells(cells[0], cells[4], cells[8]) || checkCells(cells[2], cells[4], cells[6])) {
      return true;
    }
      return false;
  }

  const reStart = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer(PLAYER_ONE);
  }

  useEffect(() => {
    const winner =  checkWin(cells) ? (currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE) : NO_WINNER;
    if (winner === NO_WINNER && cells.find(cell => cell === null) === undefined) {
      reStart();
    } 
    if (winner !== NO_WINNER) {
      const timer = setTimeout(() => {
        alert(winner + ' has win');
        reStart();
      }, 50);
      return () => clearTimeout(timer);
    }
  },[currentPlayer]);

  const handleClickCell = useCallback((i) => {
    if (cells[i] === null) {
      const isPlayerOne = currentPlayer === PLAYER_ONE;
      const cellContent = isPlayerOne ? "X" : "O";
      setCells([...cells.map((c, index) => i === index ? cellContent : c)]);
      setCurrentPlayer(isPlayerOne ? PLAYER_TWO : PLAYER_ONE);
    }
  }, [currentPlayer, cells]);

  return (
    <div style={gameLayoutStyle}>
      <GameInfo currentPlayer={currentPlayer} />  
      <Board onClickCells={handleClickCell} cells={cells}/>
    </div>
  );
};

// For the record: the exact same Component, using class
//
// class GameLayout extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cells: Array(9).fill(null),
//       currentPlayer: "player 1"
//     };
//   }

//   // getDerivedStateFromProps is called before every render,
//   // use it to infer new state values from props or state changes.
//   static getDerivedStateFromProps(props, state) {
//     return state;
//   }

//   handleClick = () => {
//     console.log(this.state.currentPlayer);
//   };

//   render() {
//     return (
//       <div
//         style={gameLayoutStyle}
//         onClick={() => this.setState({ currentPlayer: "toto" })}
//       >
//         <GameInfo onClick={this.handleClick} />
//         <Board onClickCell={cellIndex => this.handleClickCell(cellIndex)} />
//       </div>
//     );
//   }
// }

export default GameLayout;
