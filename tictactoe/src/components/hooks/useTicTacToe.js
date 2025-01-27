import React, { useState } from "react";
const initialState = () => Array(9).fill(null);
const useTicTacToe = () => {
  const [borad, SetBorad] = useState(initialState());
  const [playerTurn, SetPlayerTurn] = useState(true);
  const winningCateria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const calculatWineer = (currentBorad) => {
    for (let i = 0; i < winningCateria.length; i++) {
      let [a, b, c] = winningCateria[i];
      if (
        currentBorad[a] &&
        currentBorad[a] === currentBorad[b] &&
        currentBorad[a] === currentBorad[c]
      ) {
        return `${currentBorad[a]}`;
      }
    }
    return null;
  };
  const handleClick = (index) => {
    const winner = calculatWineer(borad);
    if (winner || borad[index] !== null) return null;
    let newBorad = borad;
    newBorad[index] = playerTurn ? "X" : "0";
    SetBorad(newBorad);
    SetPlayerTurn(!playerTurn);
  };
  const getStatus = () => {
    const winner = calculatWineer(borad);
    if (winner) return ` Player ${winner} winner of the game!!`;
    if (!borad.includes(null)) return `it's draw Try Again`;
    return `Player ${playerTurn ? "X" : "0"} Turn `;
  };

  const reset = () => {
    SetBorad(initialState());
  };

  return {
    winningCateria,
    calculatWineer,
    handleClick,
    getStatus,
    borad,
    calculatWineer,
    reset,
  };
};

export default useTicTacToe;
