import React,{useState}  from 'react'

export default function Palindrome() {

    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    function solve(input) {

        for(let i = 0; i < input.length/2; i++){

            if(input[i] !== input[input.length-1-i])
                return setResult('false');  

        }
        setResult('true');
    }

    return (
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>

            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>

            <button className="confirmationButton" onClick={() => solve(userInput)}> Check </button>

    <span className="resultsBox">{result}</span>
        </div>
    )
}
