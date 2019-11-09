import React, {useState} from 'react';

export default function EvenAndOdd(){
    var [evens, setEvens] = useState([]);
    var [odds, setOdds] = useState([]);
    const [userInput, setUserInput] = useState([]);

    function solve(input){
        evens = [];
        odds = [];
        input.split(',').map(x=> 
            (parseInt(x) % 2 === 0)?evens.push(parseInt(x)):odds.push(parseInt(x))          
        )
        setOdds(odds);
        setEvens(evens);
    }
    return(
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={e=>setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>solve(userInput)}>Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(evens)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(odds)}</span>
        </div>
    )
}