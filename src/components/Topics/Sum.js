import React, { useState } from 'react';

const Sum = () => {
    const [num, numBahs] = useState([]);
    const [sum, setSum] = useState();

    const solve = (num) => {
        let sam = 0;
        let numS = num.split(',');
        numS.map(x => {
            sam+= parseInt(x);
        });
        setSum(sam);
    }

  return (
    <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" onChange={e => numBahs(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => solve(num)}> Add </button>
        <span className="resultsBox">{JSON.stringify(sum)}</span>
    </div>
  )
}

export default Sum;