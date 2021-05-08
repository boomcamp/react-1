import React, { useState } from "react";

function Palindrome() {

  const [userInput, setUserInput] = useState('')
  const [output, setOutput] = useState('')

  function palindrome(str) {
    
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    const answer = reverseStr === lowRegStr
    setOutput(answer);
    
  }
  

  return (
    <div className="puzzleBox palindromePB">
      <h4> Palindrome </h4>
      <input className="inputLine" onChange={(e)=> setUserInput(e.target.value)}></input>
      <button className="confirmationButton" onClick={()=> palindrome(userInput)}> Check </button>
      <span className="resultsBox">{`${output}`}</span>
    </div>
  );
}
export default Palindrome;
