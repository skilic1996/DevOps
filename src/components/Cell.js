import React, { useState } from "react";
import * as styles from "./styles.js"

const Cell = ({onClick = () => {}, value = "?", index}) => {
  const [style, setStyle] = useState(styles.cellStyleOnMouseOut);

  const handleMouseEvent = (type) => {
    if (type === "onMouseOver" && (style != styles.cellStyleOnMouseOver)) {
      setStyle(styles.cellStyleOnMouseOver);
    }
    if (type === "onMouseOut" && (style != styles.cellStyleOnMouseOut)) {
      setStyle(styles.cellStyleOnMouseOut);
    }
  }

  return(
    <div style={style} onMouseOut={ () => handleMouseEvent("onMouseOut")} onMouseOver={() => handleMouseEvent("onMouseOver")} 
    onClick={() => onClick(index)}><span style={value === "X" ? styles.blue : styles.green}>{value}</span></div>
  );
};

export default Cell;
