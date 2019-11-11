import React, { useState } from "react";

export default function Sum() {
  const [sum, setSum] = useState([]);
  const [addSum, addInput] = useState("");

  function Addnumber(x) {
    const results = {
      sum: []
    };
    var a = x
      .toString()
      .split("")
      .map(Number)
      .reduce(function(a, b) {
        return a + b;
      }, 0);
    results.sum.push(a);
    setSum(results.sum);
  }
  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        onChange={event => addInput(event.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => Addnumber(addSum)}>
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox">{sum}</span>
    </div>
  );
}
