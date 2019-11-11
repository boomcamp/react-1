import React, { useState } from "react";

function Sum() {
  const [userInput, setUserInput] = useState([]);
  const [sum, setSum] = useState();
  function solution(str) {
    var arr = str.split(",");
    var sum = 0;
    for (var a in arr) {
      sum += parseInt(arr[a]);
    }
    setSum(sum);
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
        onClick={() => solution(userInput)}
      >
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox">{JSON.stringify(sum)}</span>
    </div>
  );
}

export default Sum;
