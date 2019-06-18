import React, {useState} from 'react';

export default function Sum() {
  const [userInput, setUserInput] = useState('');
  const [sum, setSum] = useState('');

  function sumation(str){
    setSum(str.split(',')
      .reduce((res,val)=>res+parseInt(val),0)
    );
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input className="inputLine" onChange={e=>setUserInput(e.target.value)}></input>
      <button className="confirmationButton" onClick={e=>sumation(userInput)}> Add </button>
      <span className="resultsBox">{sum}</span>
    </div>
  );
}