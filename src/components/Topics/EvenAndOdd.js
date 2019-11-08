import React, {useState} from 'react';

export default function EvenAndOdd(){
    const [evens, setEvens] = useState([]);
    const [odds, setOdds] = useState([]);
    const [userInput, setUserInput] = useState([]);

    function solve(input){
        const result ={
            evens: [],
            odds: []
        }
        let new_input = input.split(',')
        let parsed_input = new_input.map(x=> parseInt(x))
        (parsed_input % 2 === -1)?result.odds.push(parsed_input):result.evens.push(parsed_input)
        setOdds(result.odds);
        setEvens(result.evens);
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