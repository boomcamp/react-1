import React,{useState } from 'react';
export default function Palindrome(){
  const [addPalindrome, setAddPlindrome ] = useState([]);
  const [userInput, setUserInput] = useState('');
 
  function palindrome(input) {
    const Results = {
        addPalindrome: []
    } 
    var removeChar = input.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var checkPalindrome = removeChar.split('').reverse().join('');
    if(removeChar === checkPalindrome){
        Results.addPalindrome.push("true")
      setAddPlindrome(Results.addPalindrome)
    }else{
        Results.addPalindrome.push("false")
      setAddPlindrome(Results.addPalindrome)
    
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