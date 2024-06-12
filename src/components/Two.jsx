import React, { useState } from "react";
// Question: Build a counter application with increment and decrement buttons
function Two() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement} disabled={count >= 5 ? true : false}>
        Increment
      </button>
      <button onClick={handleDecrement} disabled={count <= 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
}

export default Two;
