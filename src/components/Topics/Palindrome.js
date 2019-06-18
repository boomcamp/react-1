import React, { useState } from 'react';
import { booleanLiteralTypeAnnotation } from '@babel/types';

export default function Palindrome(){

    const [userInput, setUserInput] = useState('');
    const [result, setResult ] = useState('');

    function palinCheck(input) {
        var reversed =  input.split('').reverse().join('');
        if (reversed === input) {
            setResult(`${input} is a palindrome!`)
        }
        else {
            setResult(`${input} is not a palindrome!`)
        }
    }
    
    return (
    <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={e => palinCheck(userInput)}> Check </button>
        <span className="resultsBox">{result}</span>
    </div>
    )
}