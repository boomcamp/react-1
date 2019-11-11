import React, {useState} from 'react';

export default function Palindrome(){
    const [userInput, getUserInput] = useState('');
    const [palindrome, getPalindrome] = useState(false);

    function checkPalindrome(input){
        let checker = input === input.split('').reverse().join('');
        getPalindrome(checker)
    }

    return (
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={((e) => getUserInput(e.target.value))}></input>
            <button className="confirmationButton" onClick={(() => checkPalindrome(userInput))}> Check </button>
            <span className="resultsBox">Palindrome: {palindrome}</span>
        </div>
    )
}