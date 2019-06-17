import React, { useState } from 'react';
import { directive } from '@babel/types';

export default function EvenAndOdd() {

    const [evens, setEvens] = useState([]);
    const [odds, setOdds] = useState([]);
    const [userInput, setUserInput] = useState('');

    function solve(input){
        const evens = [], odds = [];
        input.split(',').forEach(val => {
            if (val % 2 === 0) {
                evens.push(parseInt(val));
            } else {
                odds.push(parseInt(val));
            }
        })
        setEvens(evens);
        setOdds(odds);
    }

    return (
        <div className="puzzleBox evenAndOddPB">
            <h4> Even And Odd </h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => solve(userInput)}> Split </button>
            <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
        </div>
    )
}