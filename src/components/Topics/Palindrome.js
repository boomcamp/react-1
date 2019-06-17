import React, { useState } from 'react';

const Palindrome = () => {
    const [str, setStr] = useState([]);
    const [word, setWord] = useState('Enter word to check');

    const check = (e) => {
        if(e.toUpperCase() == e.split('').reverse().join('').toUpperCase()) {
            setWord(true);
        } else {
            setWord(false);
        }
    }

    return (
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={e => setStr(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => check(str)}> Check </button>
            <span className="resultsBox">{JSON.stringify(word)}</span>
        </div>
    )
}

export default Palindrome;