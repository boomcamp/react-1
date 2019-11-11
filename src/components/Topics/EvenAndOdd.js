import React, { useState } from "react";

export default function EvenAndOdd() {
  const [evens, setEvens] = useState([]);
  const [odds, setOdds] = useState([]);
  const [userInput, setUserInput] = useState("");

  function solve(input) {
    const results = {
      evens: [],
      odds: []
    };

    input.split(",").forEach(value => {
      let temp = parseInt(value);
      temp % 2 === 0 ? results.evens.push(temp) : results.odds.push(temp);
    });
    setEvens(results.evens);
    setOdds(results.odds);
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => solve(userInput)}>
        Split
      </button>
      <span className="resultsBox">Evens:{JSON.stringify(evens)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
    </div>
  );
}
