import React,{useState } from 'react';

function Palindrome(){
  const [addPlindrome, setTrueOrFalse ] = useState([]);
  const [userInput, setUserInput] = useState('');
 
  function palindrome(input) {
    const palindromeResults = {
      addPlindrome: []
    } 
    var removeChar = input.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var checkPalindrome = removeChar.split('').reverse().join('');
    if(removeChar === checkPalindrome){
        palindromeResults.addPlindrome.push("true")
      setTrueOrFalse(palindromeResults.addPlindrome)
    }else{
        palindromeResults.addPlindrome.push("false")
      setTrueOrFalse(palindromeResults.addPlindrome)
    
    }
  }
  return(
    <div className="puzzleBox filterStringPB">
    <h4> Palindrome </h4>
    <input className="inputLine" onChange = {e => setUserInput(e.target.value) }></input>
    <button className="confirmationButton" onClick = {()=> palindrome(userInput)}> Check </button>
    <span className="resultsBox">Palindrome Result: {addPlindrome}</span>
  </div>
  )
}

export default Palindrome;