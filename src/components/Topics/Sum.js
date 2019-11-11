import React, { useState } from "react";

function Sum() {
  const [userInput, setUserInput] = useState("");
  const [getResult, setgetResult] = useState()

  function solveSum(input) {
    let sum = 0,
      sumsArr = [];
    input.split(",").map(num => {
      sum += parseInt(num);
      return 0;
    });

    sumsArr.push(sum);
    setgetResult(sumsArr);
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => solveSum(userInput)}>
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox">{getResult}</span>
    </div>
  );
}
export default Sum;
