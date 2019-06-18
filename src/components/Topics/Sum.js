import React, { useState } from 'react';

export default function Sum() {
  const [result, setResult] = useState();
  const [userInput, setUserInput] = useState('');
  
function sum(input){
   var added = 0;
   input.split(',').forEach( (e) => {
     added += Number(e);
   })
   setResult(added);
}

return (
    <div className="puzzleBox sumPB">
  <h4> Sum </h4>
  <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
  <button className="confirmationButton" onClick={() => sum(userInput)}> Add </button>
  <span className="resultsBox">
    Result: {JSON.stringify(result, null, 10)}
  </span>
</div>
  )
}