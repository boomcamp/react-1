import React, {useState} from 'react'

export default function Sum() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    function sum(inp){
        var num = inp.split(',');
        setResult(parseInt(num[0]) + parseInt(num[1]))
    }
    return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input onChange={e=>setInput(e.target.value)} className="inputLine"></input>
            <button onClick={()=>sum(input)} className="confirmationButton"> Add </button>
            <span className="resultsBox">{result}</span>
        </div>
    );
}