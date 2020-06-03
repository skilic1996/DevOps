import React from "react";
import * as styles from "./styles.js"

const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => (
  <React.Fragment>
    <h3 style={{float:"left"}}>It's your turn <span style={currentPlayer === "Player 1" ? styles.blue: styles.green}>{currentPlayer}</span></h3>
    <div style={{textAlign: "right"}}>
      <h4 data-testid="player1" style={styles.blue}>Player 1</h4>
      <h4 data-testid="player2" style={styles.green}>Player 2</h4>
    </div>
  </React.Fragment>
);

export default GameInfo;
