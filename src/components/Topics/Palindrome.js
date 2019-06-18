import React, {useState} from 'react';

export default function Palindrome() {
  const [userInput,setUserInput] = useState('');
  const [isPalindrome,setIsPalindrome] = useState('');
  
  function test(){
  	const normal = userInput.toLowerCase();
  	const reversed = normal.split('').reverse().join('');

	if(normal === reversed) {
		setIsPalindrome('true');
	} else {
		setIsPalindrome('false');
	}
}

  return (
    <div className="puzzleBox palindromePB">
  	<h4> Palindrome </h4>
  	<input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
  	<button className="confirmationButton" onClick={test}> Check </button>
  	<span className="resultsBox">{isPalindrome}</span>
	</div>
  )
}