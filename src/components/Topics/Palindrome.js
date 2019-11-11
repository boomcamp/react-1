import React, {useState} from 'react'

export default function Palindrome() {
    var [userInput, setUserInput] = useState();
    var [result, setResult] = useState(`"${'Enter a word to check'}"`);
    
    const checkPalindrome = function (input){
        (input.split("").reverse().join("") === input) ? setResult("True") : setResult("False")
    }

    return (
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => checkPalindrome(userInput)}> Check </button>
            <span className="resultsBox">{result}</span>
        </div>
    )
}
