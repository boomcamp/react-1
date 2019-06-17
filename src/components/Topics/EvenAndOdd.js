import React, {useState} from 'react'

export default function EvenAndOdd() {
    const [evens, setEvens] = useState([])
    const [odds, setOdds] = useState([])
    const [userInput, setUserInput] = useState('');

    function solve(input) {
        var odd = [], even = [];
          for (let wal of input.split(',').map(w => parseInt(w))) {
            if (wal % 2 === 0) {
                even.push(wal);
            } else {
                odd.push(wal);
            }
          }
      
          setEvens(even);
          setOdds(odd);
    }
    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className='inputLine' onChange={e => setUserInput(e.target.value)}></input>
            <button className='confirmationButton' onClick={() => solve(userInput)}>Split</button>
            <span className="resultsBox">Evens: [{evens.join(',')}]</span>
            <span className="resultsBox">Odds: [{odds.join(',')}]</span>
        </div>
    );
}