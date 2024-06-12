import React, { useState } from "react";
// Question: Create a form that takes user input and displays it in real-time
function Three() {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>User Input: {input} </p>
    </div>
  );
}
export default Three;
