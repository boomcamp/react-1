import React,{useState} from 'react'

export default function EvenAndOdd() {

    const [evens, setEvens] = useState([]);
    const [odds, setOdds] = useState([]);
    const [userInput, setUserInput] = useState('');

    function solve(input) {
       let odds = [], evens = [];
        input.split(',').map(input=>{
            if(input % 2 === 0)
                evens.push(parseInt(input));
            if(input % 2 !== 0)
                odds.push(parseInt(input));
        });

        setEvens(evens);
        setOdds(odds);
    }

    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
    <button className="confirmationButton" onClick={() => solve(userInput)}>Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
        </div>
    )
}
