import React, {useState} from 'react';

function EvenAndOdd(){
    const [evens, setEvens] = useState([]);
    const [odds, setOdds] = useState([]);
    const [userInput, setUserInput] = useState([]);

    function solve(input){
        const results = {
            evens: [],
            odds: [],
        }
        for(let num of input.split(',').map(v => parseInt(v))){
            if(num % 2 === 0){
                results.evens.push(num);
            }else{
                results.odds.push(num)
            }
        }
        setEvens(results.evens)
        setOdds(results.odds)
    }
    
    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input onChange={e => setUserInput(e.target.value)} className="inputLine"></input>
            <button onClick={() => solve(userInput)} className="confirmationButton">Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
        </div>
    )
}

export default EvenAndOdd;