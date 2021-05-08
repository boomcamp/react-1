import React, { useState } from "react";

export default function Sum() {
  const [userInput, setUserInput] = useState("");
  const [addResult, setAddResult] = useState();

  function add(input) {
    var total = 0;
    input.split(",").forEach(val => {
      total = total + parseInt(val);
    });

    setAddResult(total);
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => add(userInput)}>
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox">{JSON.stringify(addResult)}</span>
    </div>
  );
}
