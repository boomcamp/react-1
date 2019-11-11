import React, {useState} from 'react'

export default function EvenAndOdd() {
    var [even, setEven] = useState([]);
    var [odd, setOdd] = useState([])
    var [userInput, setUserInput] = useState("");

    const OddEven = function (input){
        let tmpOdd=[], tmpEven=[]
        input = input.split(",").map(x => {
            if(x % 2)
                return tmpOdd.push(x) 
            else 
                return tmpEven.push(x)
        })
        setEven(tmpEven.toString())
        setOdd(tmpOdd.toString())
    }

    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Even and Odds</h4>
            <input type="text" className="inputLine" onChange={(e) => setUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick={() => OddEven(userInput)}>Split</button>
            <span className="resultsBox">Evens: [{even}]</span>
            <span className="resultsBox">Odds: [{odd}]</span>
        </div>
    )
}