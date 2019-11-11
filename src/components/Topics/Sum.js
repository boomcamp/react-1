import React, { useState } from "react";

export default function Sum() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState();

  function sum() {
    var sumofnums = 0;
    var nums = userInput.split(",");
    for (var i = 0; i < nums.length; i++) {
      sumofnums += parseInt(nums[i]);
    }
    setResult(sumofnums);
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => sum(userInput)}>
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox">{JSON.stringify(result)}</span>
    </div>
  );
}
