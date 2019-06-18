import React, { useState } from 'react';

export default function Sum() {
  const [userInput, setUserInput] = useState('');
  const [totalSum, setTotalSum] = useState([]);

  function AddNum(nums){
    var total = 0;
    nums.split(",").forEach(arrValue => {
      total += Number(arrValue);
    })
    setTotalSum(total.toString());
  }

  return (
    <div className="puzzleBox sumPB">
  <h4> Sum </h4>
  <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
  <button className="confirmationButton" onClick={() => AddNum(userInput) }> Add </button>
  <span className="resultsBox">{totalSum}</span>
</div>
  )

}