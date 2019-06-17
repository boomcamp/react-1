import React, {useState} from 'react';

function EvenAndOdd(){
  const [evens, setEvens] = useState([]);
  const [odds, setOdds] = useState([]);
  const [userInput, setUserInput] = useState('');

  function solve(input){
    const results = {
      evens: [],
      odds: []
    }
    for(let x of input.split(',').map(arr => parseInt(arr))){
      if(x % 2 === 0){
        results.evens.push(x);
      }else{
        results.odds.push(x);
      }
    }

    setEvens(results.evens);
    setOdds(results.odds);
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
      <button className="confirmationButton" onClick={() => solve(userInput)}>Split</button>
      <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
    </div>
  )
}

export default EvenAndOdd;