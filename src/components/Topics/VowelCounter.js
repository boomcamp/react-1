import React, {useState} from 'react'

export default function VowelCounter() {
    var [userInput, setUserInput] = useState();
    var [result, setResult] = useState();

    const vowelcount = function(input){
        var temp = input.match(/[aeiou]/gi)
        temp ? setResult(temp.length) : setResult("null")    
    }
    return (
        <div className="puzzleBox palindromePB">
          <h4> Vowel Counter </h4>
          <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
          <button className="confirmationButton" onClick={()=> vowelcount(userInput)}> Count </button>
          <span className="resultsBox">Number of Vowels: {result}</span>
        </div>
      )
}
