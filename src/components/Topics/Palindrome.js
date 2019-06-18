import React, { useState } from 'react';

export default function Palindrome() {
  const [userPal, userKeyPal] = useState();
  const [palindrome, setPalindrome] = useState('');
  
  function checkPalindrome(input){
    var re = /[\W_]/g;
    var lowRegStr = input.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if(reverseStr === lowRegStr){
      userKeyPal(true)
    }else{
      userKeyPal(false)
    }
    
}

    return (
    <div className="puzzleBox palindromePB">
     <h4> Palindrome </h4>
     <input className="inputLine" onChange={e => setPalindrome(e.target.value)}></input>
     <button className="confirmationButton"  onClick={() => checkPalindrome(palindrome)} > Check </button>
     <span className="resultsBox">
     Result: {JSON.stringify(userPal, null, 10)}
    </span>
    </div>
  )
}