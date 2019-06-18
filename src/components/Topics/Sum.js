import React, {useState} from 'react';

function Sum() {
    const [num, setNum] = useState('');
    const [numVal, setNumVal] = useState('');

    var temp = 0;
    function addNum(int){
      for (let val of int.split(',').map(x => parseInt(x))) {
      temp = temp + val;
      }
      setNumVal(temp);
    }

  return (
    <div className="puzzleBox sumPB">
    <h4> Sum </h4>
    <input className="inputLine" onChange={e => setNum(e.target.value)}></input>
    <button className="confirmationButton" onClick={() => addNum(num)}> Add </button>
    <span className="resultsBox">Sum: {JSON.stringify(numVal)}</span>
    </div>
  )
}

export default Sum;