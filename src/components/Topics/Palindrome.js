import React, { useState } from 'react';

export default function Palindrome() {

    const [userInput, setUserInput] = useState('');
    const [palindrome, setPalindrome] = useState();
    
    function palindromes(string) {
      var str = string.toString().split(''),
          counter = Math.floor(str.length / 2),
          last = str.length - 1,
          i = 0,
          result = true;
      while(counter !== 0){
        if(str[i] !== str[last]) result = false;
        last--;
        i++;
        counter--; 
      }
      setPalindrome(result)
    }

    return (
        <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => palindromes(userInput)}> Check </button>
        <span className="resultsBox">{JSON.stringify(palindrome)}</span>
        </div>
    );
}