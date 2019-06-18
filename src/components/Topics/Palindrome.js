import React, {useState} from 'react';


function Palindrome() {

    const [str, setStr] = useState('');
    const [result, setResult] = useState('');

    function palindromeFunc(entry){
      var entry1 = entry.toLowerCase();
      var split = entry1.split('').reverse().join('');

      if(entry1 === split){
         setResult('true');
      }
      else{
          setResult('false');
      }
  }



  return (
    <div className="puzzleBox palindromePB">
    <h4> Palindrome </h4>
    <input className="inputLine" onChange={e => setStr(e.target.value)}></input>
    <button className="confirmationButton" onClick={() => palindromeFunc(str)}> Check </button>
    <span className="resultsBox">{result}</span>
    </div>
  )
}

export default Palindrome;