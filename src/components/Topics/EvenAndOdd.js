import React, { useState } from "react";

function EvenAndOdd() {
  const [evens, setEvens] = useState([]);
  const [odds, setOdds] = useState([]);
  const [userInput, setUserInput] = useState([]);
  function solution() {
    const result = {
      even: [],
      odd: []
    };
    userInput
      .split(",")
      .map(x =>
        parseInt(x) % 2 === 0
          ? result.even.push(parseInt(x))
          : result.odd.push(parseInt(x))
      );
    setEvens(result.even);
    setOdds(result.odd);
  }
  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => solution()}>
        Split
      </button>
      <span className="resultsBox">Even: {JSON.stringify(evens)}</span>
      <span className="resultsBox">Odd: {JSON.stringify(odds)}</span>
    </div>
  );
}

export default EvenAndOdd;
