import React, { useState } from 'react';

export default function EvenAndOdd() {

    const [evens, setEvens] = useState([]);
    const [odds, setOdds] = useState([]);
    const [userInput, setUserInput] = useState('');

    function solve(input) {
        var even = [];
        var odd = [];
        input.split(",").forEach(arrValue => {
            var temp =parseInt(arrValue);
            if(temp % 2 == 0){
                even.push(arrValue);
            }else{
                odd.push(arrValue);
            }
        });
        setEvens("[" + (even).join(" , ") +"]");
        setOdds("[" + (odd).join(" , ") +"]");
       }

    return (
        <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
          <button className="confirmationButton" onClick={() => solve(userInput)}>Split</button>
          <span className="resultsBox">Evens: {evens}</span>
          <span className="resultsBox">Odds: {odds}</span>
        </div>
      )
}