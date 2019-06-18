import React, {useState} from 'react';

export default function Palindrome() {
  const [userInput, setUserInput] = useState('');
  const [palindrome, setPalindrome] = useState('');

  function Palindrome(input){
      var newStr = input.split('').reverse().join('');
      if(input === newStr){
       setPalindrome('Word is a Palindrome');
      }
      else{
        setPalindrome('Word is not a Palindrome');
      }
  }
    return (
      <div className="puzzleBox palindromePB">
      <h4> Palindrome </h4>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
      <button className="confirmationButton" onClick={()=>Palindrome(userInput)}> Check </button>
      <span className="resultsBox">{palindrome}</span>
    </div>
    )
  }