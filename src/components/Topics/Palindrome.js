import React, {useState} from 'react';



export default function Palindrome() {

    const [userInput, setUserInput] = useState('');
    const [res, getRes] = useState('');

    function check (input){
        var re = /[\W_]/g;
        var lowRegStr = input.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        const answer = reverseStr === lowRegStr
        getRes(answer);
        
    }

  return (
    <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => check(userInput)}> Check </button>
        <span className="resultsBox">Result: {`${res}`}</span>
    </div>
  )
}