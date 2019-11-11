import React, { useState } from "react";

export default function EvenAndOdd() {
  const [evens, setEvens] = useState([]);
  const [odds, setOdds] = useState([]);
  const [userInput, setUserInput] = useState("");

  function solve(x) {
    let odd = [];
    let even = [];

    if (x % 2 === 0) {
      even.push(x);
    } else {
      odd.push(x);
    }

    setEvens(even);
    setOdds(odd);
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Even and Odd</h4>
      <input
        type="number"
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => solve(userInput)}>
        Split
      </button>
      <span className="resultsBox">Evens: [{evens}]</span>
      <span className="resultsBox">Odds:[{odds}]</span>
    </div>
  );
}
