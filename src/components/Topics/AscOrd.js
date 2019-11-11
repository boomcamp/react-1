import React, { useState } from "react";

export default function AscOrd() {
  const [userInput, setUserInput] = useState([]);
  const [result, setResult] = useState();

  function ascending(input) {
    var temp = [];
    input.split(",").forEach(val => {
      temp.push(val);
    });

    for (var i = 0; i < temp.length - 1; i++) {
      if (temp[i + 1] > temp[i]) {
        console.log(temp[i]);
        continue;
      } else {
        return setResult(false);
      }
    }
    setResult(true);
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Is Ascending Order? </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button
        className="confirmationButton"
        onClick={() => ascending(userInput)}
      >
        {" "}
        Check{" "}
      </button>
      <span className="resultsBox">{JSON.stringify(result)}</span>
    </div>
  );
}
