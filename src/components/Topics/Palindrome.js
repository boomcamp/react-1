import React,{useState } from 'react';

export default function Palindrome(){
  const [addPalindrome, setTrueOrFalse ] = useState([]);
  const [userInput, setUserInput] = useState('');
 
  function palindrome(input) {
    const addResults = {
      addPalindrome: []
    } 
    var removeChar = input.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var checkPalindrome = removeChar.split('').reverse().join('');
    if(removeChar === checkPalindrome){
      addResults.addPalindrome.push("true")
      setTrueOrFalse(addResults.addPalindrome)
    }else{
      addResults.addPlindrome.push("false")
      setTrueOrFalse(addResults.addPalindrome)
    
    }
  }
  return(
    <div className="puzzleBox filterStringPB">
    <h4> Palindrome </h4>
    <input className="inputLine" onChange = {e => setUserInput(e.target.value) }></input>
    <button className="confirmationButton" onClick = {()=> palindrome(userInput)}> Check </button>
    <span className="resultsBox">{addPalindrome}</span>
  </div>
  )
}