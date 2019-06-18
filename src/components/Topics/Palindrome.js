import React , {useState}  from 'react';

export default function Palindrome() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('Enter a word to check');
    function check(inp){
        if(inp === inp.split('').reverse().join('')){
            setResult('true')
        }
        else{
            setResult('false')
        }
    }
  return (
    <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input onChange={e => setInput(e.target.value)}className="inputLine"></input>
        <button onClick={() => check(input)} className="confirmationButton"> Check </button>
        <span className="resultsBox">{result}</span>
    </div>
  )
}