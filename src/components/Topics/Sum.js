import React, {useState} from 'react'

export default function Sum() {
    var [userInput, setUserInput] = useState()
    var [result, setResult] = useState()

    const sum = function(input){
        let temp=0;
        input.split(",").map(x => temp = temp + parseInt(x))
        setResult(temp)
    }

    return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => sum(userInput)}> Add </button>
            <span className="resultsBox">{result}</span>
        </div>
    )
}
