import React, {useState} from 'react';

function Palindrome(){
    const [str, setStr] = useState('');
    const [res, setRes] = useState('Check');

    function Palind(word){
        word = word.toLowerCase();
        var palindCheck = word.split('').reverse().join('');
        setRes(word === palindCheck)
    }
    return (
    <div className="puzzleBox palindromePB">
    <h4> Palindrome </h4>
    <input onChange={e => setStr(e.target.value)} className="inputLine"></input>
    <button onClick={()=>Palind(str)} className="confirmationButton"> Check </button>
    <span className="resultsBox">{JSON.stringify(res)}</span>
    </div>
  );
}

export default Palindrome;