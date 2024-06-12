import React, { useEffect, useState } from "react";
// Question: create a component that fetches data from an API and displays it
function Six() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <p>Title: {data?.title}</p>
          <p>Description: {data?.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Six;
