import React, {useState} from 'react';

export default function Sum(){
    const [result, resultsum] = useState()
    const [userInput, setUserInput] = useState()
    function sum(input){
        let result = 0
        input.split(',').map(x => result+=Number(x))
        resultsum(result)
    }
    return(
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange={e=>setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>sum(userInput)}> Add </button>
            <span className="resultsBox">Sum: {JSON.stringify(result, null, 10)}</span>
        </div>
    )
}