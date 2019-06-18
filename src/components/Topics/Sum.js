import React, { useState } from 'react';

export default function Sum() {

    const [sums, solveSums] = useState();
    const [userInput, setUserInput] = useState('');

    function solve(input) {
        var answer = 0;
        for (let val of input.split(',').map(v => parseInt(v))) {
           answer += val;
          }
          
        solveSums(answer);   
   }

  return (
    <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => solve(userInput)}>Check</button>
        <span className="resultsBox">{JSON.stringify(sums)}</span>
    </div>
    
  )
}