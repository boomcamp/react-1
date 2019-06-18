import React, {useState} from 'react';

export default function Sum() {
	const [first, setFirst] = useState('');
	const [second, setSecond] = useState('');
	const [userInput, setUserInput] = useState('');
	const [numSum, setNumSum] = useState('');
	function sum() {
		var sum = 0;
		userInput.split(',').forEach(function(i) {
			sum+= parseInt(i);
		})	
		setNumSum(sum);
	}

  return (
    <div className="puzzleBox sumPB">
    <h4> Sum </h4>
  	<input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
    <button className="confirmationButton" onClick={sum}> Add </button>
  	<span className="resultsBox">{numSum}</span>
	</div>
  )
}