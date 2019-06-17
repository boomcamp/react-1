import React, {useState} from 'react';

function Palindrome(){
  const [palindrome, setPalindrome] = useState([]);
  const [userInput, setUserInput] = useState('Enter a word');

  function check(input){
    const normal = input.toLowerCase();
    const reversed = normal.split('').reverse().join('');
    setPalindrome(normal === reversed); 
  }

  return (
    <div className="puzzleBox palindromePB">
      <h4> Palindrome </h4>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
      <button className="confirmationButton" onClick={() => check(userInput)}> Check </button>
      <span className="resultsBox">Results: {JSON.stringify(palindrome)}</span>
    </div>
  )
}

export default Palindrome;