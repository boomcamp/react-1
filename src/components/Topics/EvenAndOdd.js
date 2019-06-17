import React, {useState} from 'react';

export default function EvenAndOdd() {
    const [evens, setEvens ] = useState([]);
    const [odds, setOdds] = useState([]);
    const [userInput, setUserInput] = useState('');

    function splitEvenOdd(input){
        const results = {
            evens: [],
            odds: [],
        }
        
        input.split(',').forEach(val => 
            (parseInt(val) % 2 === 0) ?
            results.evens.push(val) :
            results.odds.push(val)
        );

        setEvens(results.evens);
        setOdds(results.odds);
    }

    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={e=>setUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick={()=>splitEvenOdd(userInput)}>Split</button>
            <span className="resultsBox">Evens: {evens.join(',')}</span>
            <span className="resultsBox">Odds: {odds.join(',')}</span>
        </div>
    );
}