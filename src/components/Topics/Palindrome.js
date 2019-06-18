import React, { useState } from 'react';

export default function Palindrome() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('Enter a word to check');

  function checkPalindrome(word) {
    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split('').reverse().join('');
    setAnswer(normalizedWord === reversedWord);
  }

  return (
    <div className="puzzleBox palindromePB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange={event => setUserInput(event.target.value)}></input>
      <button className="confirmationButton" onClick={() => checkPalindrome(userInput)}>Check</button>
      <span className="resultsBox">{JSON.stringify(answer)}</span>
    </div>
  );
}