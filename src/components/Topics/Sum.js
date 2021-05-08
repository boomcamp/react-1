import React, { useState } from 'react'

export default function Sum(){
    const [ userInput, setUserInput ] = useState('');
    const [ sum, setSum ] = useState();

    function add(input){
        var num = input.toString().split(',');
        var result = 0;
        for(let val of num){
          result += Number(val)
        }     
         setSum(result);
      }

    return (
    <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" onChange={ e=> setUserInput(e.target.value) }></input>
        <button className="confirmationButton" onClick={() => add(userInput) }> Add </button>
        <span className="resultsBox">{JSON.stringify(sum)}</span>
    </div>
    )
}
