import React, { useState } from "react";

export default function Sum() {
  const [sum, setsum] = useState([]);
  const [userInput, setUserInput] = useState("");
  function Add(input) {
    let add = 0;
    const val = input.split(",");
    val.forEach(n => (add += parseInt(n)));
    setsum(add);                                                                                            
  }
  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => Add(userInput)}>
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox">{sum}</span>
    </div>
  );
}
