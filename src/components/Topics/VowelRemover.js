import React, { useState } from "react";
export default function VowelRemover() {
    const [userInput, setUserInput] = useState("");
    const [string, setstring] = useState("");
function remove(input){
 setstring(input.replace(/[aeiuo]/ig, ''))
}
    return (
        <div className="puzzleBox vrPB">
        <h4> VowelRemover </h4>
        <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => remove(userInput)}> Remove </button>
        <span className="resultsBox">{string}</span>
      </div>
    )
  }
  