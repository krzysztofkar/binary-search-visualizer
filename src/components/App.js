import React from "react";
import Board from "./Board";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="title">Application for binary search visualization</div>
      <div className="desc">
        On each step application makes a guess and colors it red.
        <br />
        Then, it colors all the impossible values grey. <br />
        When the value is found it colors it green and displays a message.
      </div>
      <Board />
    </div>
  );
};

export default App;
