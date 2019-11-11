import React, { useState } from "react";

export default function Sum() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("total sum");

  function totalsum(input) {
    var sum = 0;
    input.split(",").forEach(val => {
      sum = sum + parseInt(val);
    });
    setResult(sum);
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button
        className="confirmationButton"
        onClick={() => totalsum(userInput)}
      >
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox">{JSON.stringify(result)}</span>
    </div>
  );
}
