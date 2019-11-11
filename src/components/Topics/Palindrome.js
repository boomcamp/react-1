import React, { useState } from 'react';

export default function Palindrome(){

const [userInput, setUserInput] = useState();
const [result, setResult] = useState();


function Pal(str){
    
    var strex = str.split('') 
    var revstr = strex.reverse()

    for(let i =0; i<str.length;i++){
      if(str[i]===revstr[i])
       setResult(true)
      else
       setResult(false)
    }
}
    return(
        <div className="puzzleBox palindromePB">
  <h4> Palindrome </h4>
  <input className="inputLine" onChange={e=> setUserInput(e.target.value)}></input>
  <button className="confirmationButton" onClick = {()=>Pal(userInput)}> Check </button>
  <span className="resultsBox">{JSON.stringify(result)}</span>
</div>
         )
}