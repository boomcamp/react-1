import React, { useState } from 'react';

export default function Sum(){
    const [sum, setSum ] = useState([]);
    const [userInput, setUserInput] = useState(0);

    function add(input){  
        let sum = 0;

        input.split(',').forEach(e => {
            sum += parseInt(e);
        });

        setSum(sum);
    }

    return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={e => add(userInput)}> Add </button>
            <span className="resultsBox" >Sum: {sum}</span>
        </div>
    )
}