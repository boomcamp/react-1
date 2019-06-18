import React, { useState } from 'react';

export default function Vowel() {
  const [userInput, setUserInput] = useState('');
  const [res, getNum] = useState();


  function vCount(string) {
    var res = string.replace(/[b-df-hj-np-tv-z\s]/gi, '').length
    getNum(res)
  }


  return (
    <div className="puzzleBox vcountPB">
      <h4>Vowel Counter</h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => vCount(userInput)}>
        Add
      </button>
      <span className="resultsBox">{JSON.stringify(res)}</span>
    </div>
  );
}
