import React, {useState} from 'react';

export default function EvenAndOdd() {

    const [evens, setEvens] = useState([]);
    const [odds, setOdds] = useState([]);
    const [userInput, setUserInput] = useState('');

    function solve(nums) {
        const res = {
            evens: [],
            odds: [],
        }
        
        for(let val of nums.split(',').map(num => parseInt(num))) {
            if(val % 2 === 0 ){
                res.evens.push(val);
            }
            else {
                res.odds.push(val);
            }
        }
        setEvens(res.evens);
        setOdds(res.odds);
    }


    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)} />
            <button className="confirmationButton" onClick={() => solve(userInput)}>Split</button>
            <span className="resultsBox">Even: {JSON.stringify(evens)}</span>
            <span className="resultsBox">Odd: {JSON.stringify(odds)}</span>
        </div>
    );
}