import React, {useState} from 'react';

export default function Sum() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    function sum(inp){
        let total = 0;
        var num = inp.split(',');
        num.forEach(v => total+=parseInt(v))
        setResult(total)
    }
  return (
    <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"></span>
    </div>
  )
}