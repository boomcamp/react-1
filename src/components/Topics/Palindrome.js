import React, {useState} from 'react';

export default function Palindrome(){
    const [userInput, setUserInput] = useState("")
    const [result, setResult] = useState()

    function palindrome(input){
        const input1 = input.toLowerCase()
        var newArr = input1.split('')
        var reverse = input1.split('').reverse()

        setResult(newArr.join('') === reverse.join(''))
    }
    return(
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={e=>setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>palindrome(userInput)}> Check </button>
            <span className="resultsBox">{JSON.stringify(result, null, 10)}</span>
        </div>
    )
}