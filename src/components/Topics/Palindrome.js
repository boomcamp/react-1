import React, { useState } from 'react';

export default function Palindrome() {

    const [userInput, setUserInput] = useState('');
    const [result, setResult]  = useState('');

    function check(userInput){
        if(userInput===userInput.split('').reverse().join('')){
            setResult('true')
        }
        else {
            setResult('false')
        }
    }

    return (
    <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ e => setUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={ () => check(userInput)}> Check </button>
        <span className="resultsBox">{result}</span>
    </div>
    )
}