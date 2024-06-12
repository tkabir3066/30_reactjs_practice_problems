import React from "react";

// Question: Build a list component to display a list of items

const items = ["item1", "item2", "item3", "item4", "item5"];
function Four() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Four;
