import React, { useState } from 'react';

export default function Palindrome() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('Enter a word to check');

  function isPalindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    setAnswer(reverseStr === lowRegStr)
  }

  return (
    <div className="puzzleBox palindromePB">
      <h4>Palindrome</h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button
        className="confirmationButton"
        onClick={() => isPalindrome(userInput)}
      >
        Check
      </button>
      <span className="resultsBox">{JSON.stringify(answer)}</span>
    </div>
  );
}
