import React, { useState } from 'react';

export default function Palindrome() {

    const [userInput, setUserInput] = useState('');
    const [checkInput, setcheckInput] = useState('Enter a word to check');
    const arr = [];

    function check(input) {
      input = input.toLowerCase();
      var reverseInput = input.toLowerCase().split('').reverse().join('');
       
       if(input === reverseInput){
        setcheckInput(true)
       } else{
        setcheckInput(false)
       }
       
        }


  return (
  <div className="puzzleBox palindromePB">
  <h4> Palindrome </h4>
  <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
  <button className="confirmationButton" onClick={() => check(userInput)}> Check </button>
  <span className="resultsBox">{JSON.stringify(checkInput)}</span>
</div>
  )
}