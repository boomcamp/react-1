import React, { useState } from 'react';

export default function Sum() {

    const [userInput, setUserInput] = useState('');
    const [sum, setSum] = useState();
    
    function sums(num) {
        var arr = num.split(','),
            total = 0;
        arr.forEach(n => total += Number(n.trim()));
        setSum(total)
    }

    return (
        <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => sums(userInput)}> Add </button>
        <span className="resultsBox">{JSON.stringify(sum)}</span>
        </div>
    );
}