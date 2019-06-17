import React, { useState } from 'react';

export default function Sum() {

    const [userInput, setUserInput] = useState('');
    const [result, setResult]  = useState('');

    function add(userInput){
        const val = userInput.split(',');
        var sum = 0;
        val.forEach(e => {
            sum += parseInt(e)
        });

        setResult(sum);
    }

    return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange= { e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick= { () => add(userInput)}> Add </button>
            <span className="resultsBox">{result}</span>
        </div>
    )
}