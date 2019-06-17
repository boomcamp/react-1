import React, { useState } from 'react';

export default function Sum() {
  const [userInput, setUserInput] = useState('');
  const [sum, setSum] = useState();

  function getSum(input) {
    const nums = input.split(',')
    let sum = 0;
    nums.forEach(num => {
        sum += Number(num)
    });
    setSum(sum);
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