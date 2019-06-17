import React, { useState } from 'react';

export default function Palindrome() {
    const [ palindrome, setPalindrome ] = useState('Enter a word to check');
    const [userInput, setUserInput] = useState('');

    function checkPalindrom(palindrom)
    {

        var removeChar = palindrom.replace(/[^A-Z0-9]/ig, "").toLowerCase();
        var checkPalindrome = removeChar.split('').reverse().join('');

        if(removeChar === checkPalindrome){
            setPalindrome(true);
        }else{
            setPalindrome(false);
        }
    }

    return (
        <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine"  onChange={e => setUserInput(e.target.value)}></input>
        <button className="confirmationButton"  onClick={() => checkPalindrom(userInput)}> Check </button>
        <span className="resultsBox">
            {JSON.stringify(palindrome)}
        </span>
        </div>
    );
}