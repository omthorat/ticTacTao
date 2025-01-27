import React from "react";
import useTicTacToe from "./hooks/useTicTacToe";
import "./tictactoe.css";

const TicTacToe = () => {
  const {
    borad,
    winningCateria,
    handleClick,
    getStatus,
    calculatWineer,
    reset,
  } = useTicTacToe();

  return (
    <div className="gameContainer">
      <div className="gameHeader">
        <h2 className="gameTitle">Tic Tac Toe</h2>
        <h4 className="gameStatus">{getStatus()}</h4>
        <button className="resetButton" onClick={reset}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {borad.map((b, index) => (
          <button
            key={index}
            className={`boardCell ${
              b ? (b === "X" ? "playerX" : "playerO") : ""
            }`}
            onClick={() => handleClick(index)}
            disabled={b !== null}>
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
