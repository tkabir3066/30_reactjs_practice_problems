import React, { useState } from "react";
// Question: Create a component that changes its background color when its  clicked
function Nine() {
  const [backgroundColor, setBackgroundcolor] = useState("yellow");
  const handleClick = () => {
    const newColor = backgroundColor == "yellow" ? "green" : "red";
    setBackgroundcolor(newColor);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: "700px",
        height: "500px",
        cursor: "pointer",
      }}
    >
      Nine
    </div>
  );
}

export default Nine;
