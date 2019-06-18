import React, { useState } from "react";

export default function EvenAndOdd() {
  const [evens, setEvens] = useState([]);
  const [odds, setOdds] = useState([]);
  const [userInput, setUserInput] = useState("");

  function solve(input) {
    var even = [];
    var odd = [];
    input.split(",").map(num => {
      if (num % 2 == 0) {
        even.push(num);
      }
      else{
        odd.push(num);
      }
    
    });
    
    setEvens((even).join(' ,'));
    setOdds((odd).join(' ,'));
  }
  return (
    <div className="puzzleBox EvenAndOddPB">
      <h4>Even And Odds</h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => solve(userInput)}>
        Split
      </button>
      <span className="resultsBox">Evens: {(evens)}</span>
      <span className="resultsBox">Odds: {(odds)}</span>
    </div>
  );
}
