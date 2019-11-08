import React, { useState } from 'react'

export default function Palindrome(){
    const [ userInput, setUserInput ] = useState('');
    const [ word, setWord ] = useState();

    function palindrome(str) {
        var re = /[^A-Za-z0-9]/g;
        str = str.toLowerCase().replace(re, '');
        var len = str.length;
        var result = true;
        for (var i = 0; i < len/2; i++) {
          if (str[i] !== str[len - 1 - i]) {
              result = false;
          }
        }
            setWord(result);
       }


    return (
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={ e=> setUserInput(e.target.value) }></input>
            <button className="confirmationButton" onClick={() => palindrome(userInput) }> Check </button>
            <span className="resultsBox">{JSON.stringify(word)}</span>
      </div>
    )
}
