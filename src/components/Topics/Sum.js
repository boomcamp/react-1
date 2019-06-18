import React, { useState } from 'react';

function Sum() {
  const [userInput, setUserInput] = useState('');
  const [sum, setSum] = useState();

  function getSum(input) {
    var total =  0;
    var i;
    for(i=0;i<input.length;i++)
      {                  
        if(isNaN(input[i])){
        continue;
         }
          total += Number(input[i]);
       }
     setSum(total);
  }

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => getSum(userInput)}>
        Add
      </button>
      <span className="resultsBox">{JSON.stringify(sum)}</span>
    </div>
  );
}

export default Sum;