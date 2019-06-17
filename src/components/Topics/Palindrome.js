
import React, { useState } from 'react';

export default function Palindrome() {
  const [userInput, setUserInput] = useState('');
  const [answer, Answer] = useState('Enter a word to check');

  function checkPalindrome(str) {
    const normal = str.toLowerCase();
    const reversed = normal.split('').reverse().join('');
    Answer ((normal === reversed)? true: false);
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
        onClick={() => checkPalindrome(userInput)}
      >
        Check
      </button>
      <span className="resultsBox">{JSON.stringify(answer)}</span>
    </div>
  );
}