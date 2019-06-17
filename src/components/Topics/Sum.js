import React, { useState } from 'react';

export default function Sum() {

  const [sum, setSum] = useState();
  const [userInput, setUserInput] = useState('');
  var temp = 0;
  function solve(input){
    for (let val of input.split(',').map(v => parseInt(v))) {
     temp = temp + val;
    }
    setSum(temp);
  }


  return (
    <div className="puzzleBox sumPB">
    <h4> Sum </h4>
    <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
    <button className="confirmationButton" onClick={() => solve(userInput)}> Add </button>
    <span className="resultsBox">{JSON.stringify(sum)}</span>
  </div>
  )
}