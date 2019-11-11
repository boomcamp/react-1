import React, { useState } from 'react';


export default function EvenAndOdd(){
    
  const [add, setAdd ] = useState([]);
  const [userInput, setUserInput] = useState('');

  function getSum(input){
    const results = {
      add: []
    } 
    var  sum = input.toString().split('').map(Number).reduce(function (a, b) {
            return a + b;
        }, 0);   

    results.add.push(sum)
    setAdd(results.add)
  }
  return ( 
    <div className="puzzleBox sumPB">
    <h4> Sum </h4>
    <input className="inputLine" onChange={e=> setUserInput(e.target.value)} type ="number"></input>
    <button className="confirmationButton" onClick={() => getSum(userInput)}> Add </button>
    <span className="resultsBox">{add}</span>
  </div>
  )
}