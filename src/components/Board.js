import React, { useState } from "react";
import "./Board.css";

const createBoxes = () => {
  const boxes = [];
  for (let i = 1; i <= 10; i++) {
    boxes.push(i);
  }
  return boxes;
};

const Board = () => {
  let [board, setBoard] = useState(createBoxes());

  return (
    <div>
      <div className="container">
        {board.map(number => {
          return (
            <div className="box" key={number}>
              <span>{number}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
