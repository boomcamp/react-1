import React, { useState } from 'react';

export default function Palindrome() {

  
  const [userInput, setUserInput] = useState('');
  const [resultWord, setResultWord] = useState('');

  function checkWord(string){
    var reverseString = string.split("").reverse().join("");

    if(string === reverseString){
      setResultWord('true');
    }else{
      setResultWord('false');
    }
  }

  return (
    <div className="puzzleBox palindromePB">
  <h4> Palindrome </h4>
  <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
  <button className="confirmationButton" onClick={() => checkWord(userInput)}> Check </button>
  <span className="resultsBox">{resultWord}</span>
</div>
  )
}