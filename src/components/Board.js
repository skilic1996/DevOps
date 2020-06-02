import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};

const Board = ({ cells = [], onClickCells = () => {}}) => {

  return (
  <div style={boardStyle}>
    {cells.map((c, i) => (
      <Cell onClick={onClickCells} value={c} key={i} index={i}/>
    ))}
  </div>
  );
}
export default Board;
