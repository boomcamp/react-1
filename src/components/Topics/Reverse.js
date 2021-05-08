import React, { useState } from "react";

export default function Reverse() {
  const [userInput, setUserInput] = useState([]);
  const [result, setResult] = useState();

  function reverse(input) {
    var temp = [];
    input.split(",").forEach(val => {
      temp.push(val);
    });
    setResult(temp.reverse().join(","));
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Reverse </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => reverse(userInput)}>
        {" "}
        Reverse{" "}
      </button>
      <span className="resultsBox">{JSON.stringify(result)}</span>
    </div>
  );
}
