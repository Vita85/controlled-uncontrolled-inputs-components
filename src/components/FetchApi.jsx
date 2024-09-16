import React, { useState, useEffect } from "react";

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let mask = document.querySelector(".mask");
  window.addEventListener("load", () => {
    mask.classList.add("hide");
    setTimeout(() => {
      mask.remove();
    }, 600);
  });

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="mask">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="jokes-container">
      <h1>Jokes <img src="https://api.chucknorris.io/img/avatar/chuck-norris.png" alt="" /></h1>
      <p>Jokes type: <em>{data.type}</em></p>
      <p>Setup: <span>{data.setup}</span></p>
      <p>Punchline: <span>{data.punchline}</span></p>
      <span>Id: {data.id}</span>
    </div>
  );
};

export default ApiComponent;
