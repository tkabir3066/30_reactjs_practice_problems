import React, { useEffect, useState } from "react";
// Question: Build a timer that counts down from a specified time
function Seven() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [time]);
  return (
    <div>
      <p>
        Time left : <b>{time}</b> second
      </p>
    </div>
  );
}

export default Seven;
