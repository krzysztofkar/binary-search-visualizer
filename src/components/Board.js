import React, { useState } from "react";
import "./Board.css";
import binarySearch from "./binarySearch";

const createBoxes = () => {
  const boxes = [];
  for (let i = 1; i <= 100; i++) {
    boxes.push(i);
  }
  return boxes;
};

const Board = () => {
  let [board] = useState(createBoxes());
  const [number, setNumber] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const boxes = document.querySelectorAll(".box");
    binarySearch(boxes, number);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <button type="submit"> Show binarySearch </button>
      </form>
      <button onClick={() => window.location.reload()}>Reset board</button>
      <div className="container">
        {board.map((number, index) => {
          return (
            <div className="box" key={number} id={number}>
              <span>{number}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
