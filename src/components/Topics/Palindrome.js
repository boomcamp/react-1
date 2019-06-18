import React, {useState} from 'react';
import { reverse } from 'dns';

export default function Palindrome() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');

  function reverseStr(str){
    const reverStr = str.split('').reverse().join('');
    setResult( reverStr === str ? true:false);
  }

  return (
    <div className="puzzleBox palindromePB">
    <h4> Palindrome </h4>
    <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
    <button className="confirmationButton" onClick={() => reverseStr(userInput)}> Check </button>
    <span className="resultsBox">{result!==''?JSON.stringify(result, null, 10):'"Enter a word to check"'}</span>
  </div>
  );
}