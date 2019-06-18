import React, { useState } from 'react';

function Palindrome() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('Enter a word to check');

  function checkPalindrome(string) {
    var reS = string.split(''),
        array = reS.slice(0).reverse();
    var i;

    for (i = 0; i < reS.length; i++) {
        if (reS[i] == array[i]) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }
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

export default Palindrome;