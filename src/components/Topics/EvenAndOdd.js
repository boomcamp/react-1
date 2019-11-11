import React, { useState } from 'react';

export default function EvenAndOdd() {
  const [ evens, setEvens ] = useState([]);
  const [odds, setOdds] = useState([]);
  const [userInput, setUserInput] = useState('');

  function solve(input) {
    const results = {
      evens: [],
      odds: [],
    } 
      if (input % 2) {
        results.evens.push(input);
      } else{
        results.odds.push(input);
      }
    // else{
    //   results.odds.push(null);
    // }

    setEvens(results.evens);
    setOdds(results.odds);
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={c=> setUserInput(c.target.value)} type ="number"/>
      <button className="confirmationButton" onClick={() => solve(userInput)}>Split</button>
      <span className="resultsBox">Evens: {(evens)}</span>
      <span className="resultsBox">Odds: {(odds)}</span>
    </div>
  )
}