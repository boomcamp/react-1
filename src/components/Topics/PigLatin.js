import React, { useState } from "react";
export default function Sum() {
    const [userInput, setUserInput] = useState("");
    const [string, setstring] = useState("");
function pigit(input){
  input.split(' ').map(word => {
    let [first, ...rest] = word.split('')
    if(/[aeiou]+/gi.test(first)){
      word = word + 'way'
    }
    else
    {
      word = rest.join('') + first + 'ay'
    }
   setstring(word)
  }).join(' ')
}
    return (
        <div className="puzzleBox PigLPB">
        <h4> PigLatin </h4>
        <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => pigit(userInput)}> Change </button>
        <span className="resultsBox">{string}</span>
      </div>
    )
  }
  