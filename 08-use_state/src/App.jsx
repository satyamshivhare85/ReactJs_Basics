import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [nums, setNums] = useState(0);

  // ---- Separate functions ----
  function handleIncrement() {
    setNums(nums + 1);
  }

  function handleDecrement() {
    setNums(nums - 1);
  }

  function handleReset() {
    setNums(0);
  }

  return (
    <div className="container">
      <h2>Number is {nums}</h2>

      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="btn reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default App;
