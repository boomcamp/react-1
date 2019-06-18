import React, { useState } from 'react';
export default function Palindrome() {

    const [palindrome, solvePalindrome] = useState();
    const [userInput, setUserInput] = useState('');

    function solve(input) {
            function reverseString(str) {
                return str.split("").reverse().join("");
            }
            var reverse = reverseString(input);
            if (input == reverse){
                solvePalindrome(true);
            }
            else{
                solvePalindrome(false);
            }   
       }
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => solve(userInput)}>Check</button>
        <span className="resultsBox">Is it a palindrome: {JSON.stringify(palindrome)}</span>
      </div>
    )
  }