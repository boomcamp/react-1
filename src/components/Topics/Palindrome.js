import React, {useState} from 'react';

export default function Palindrome() {
    const [palindrome, setPalindrome] = useState([]);
    const [userInput, setUserInput] = useState('');

    function palWord(input){
        var arr = [];
        for(let i = input.length - 1; i >= 0; i--){
            arr.push(input[i])
        }

        if(input === arr.join('')){
            setPalindrome(true)
        }else{
            setPalindrome(false)
        }
    }
    return (
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => palWord(userInput)}> Check </button>
            <span className="resultsBox">{JSON.stringify(palindrome)}</span>
        </div>
    )
}