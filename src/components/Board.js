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
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="input-field col l12 m12 s12">
            <input
              id="number"
              placeholder="Provide a number"
              type="number"
              className="validate"
              value={number}
              onChange={e => setNumber(e.target.value)}
              required="1"
              aria-required="true"
              min="1"
              max="100"
            />
          </div>
          <button className="waves-effect waves-light btn" type="submit">
            Show binary search
          </button>
        </form>
        <button
          className="waves-effect waves-light btn button"
          onClick={() => window.location.reload()}
        >
          Reset board
        </button>
      </div>
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
