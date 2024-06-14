import React from "react";
// Question: Create a component that displays a random quote each time it is rendered
function Eleven() {
  const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "A journey of a thousand miles begins with a single step.",
    "Fortune favors the bold.",
    "Time and tide wait for no man.",
    "Brevity is the soul of wit.",
    "Actions speak louder than words.",
    "The pen is mightier than the sword.",
    "When in Rome, do as the Romans do.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return (
    <div>
      <p>{quote}</p>
    </div>
  );
}

export default Eleven;
