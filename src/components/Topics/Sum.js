import React, { useState } from 'react';



export default function Sum(){
  const [num, setNum] = useState();
  const [userInput, setUserInput] = useState('');



  function add(val){
    var result = 0;
    val.split(',').forEach((res) => {
      result += Number(res);
    })
    setNum(result);
  }
    return(
  <div className="puzzleBox sumPB">
  <h4> Sum </h4>
  <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
  <button className="confirmationButton" onClick={() => add(userInput)}> Add </button>
  <span className="resultsBox">Result: {JSON.stringify(num, 10)}</span>
</div>
    )
}