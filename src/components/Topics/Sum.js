import React, {useState} from 'react';

export default function Sum() {
  const [userInput,setUserInput] = useState('');
  const [result, setResult] = useState('');

  function sumStr(num){
    var res=0;
    var split = num.split(',');
    split.map(num=>{
      res += Number(num);
    })
    setResult(res);
  }
    return (
      <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
      <button className="confirmationButton" onClick={()=>sumStr(userInput)}> Add </button>
      <span className="resultsBox">{result}</span>
    </div>
    )
  }