import React, {useState} from 'react'

export default function Sum() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    function valid(inp){
        var counts = {
            '(': 0,
            ')': 0
        }
        inp.split('').forEach(function(char) {
            if (counts[char] != null) {
                counts[char]++
            }
        })
        setResult( (counts['('] == counts[')']).toString())
    }
    return (
        <div className="puzzleBox sumPB">
            <h4> Valid Parenthesis </h4>
            <input onChange={e=>setInput(e.target.value)} className="inputLine"></input>
            <button onClick={()=>valid(input)} className="confirmationButton"> Check </button>
            <span className="resultsBox">{result}</span>
        </div>
    );
}