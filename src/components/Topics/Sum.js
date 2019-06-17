import React, { useState } from 'react';

function Sum() {
    const [input, setInput] = useState('');
    const [sum, setSum] = useState();

    function add(num) {
       var numArr = [];
       var sum
       numArr = num.split(',')
       sum = numArr
       .map(x => parseInt(x))
       .reduce((acc,x)=>{
           acc +=x;
           return acc;
       }, 0);
       setSum(sum)
    }

    return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input onChange={e => setInput(e.target.value)} className="inputLine"></input>
            <button onClick={() => add(input)} className="confirmationButton"> Add </button>
            <span className="resultsBox">{JSON.stringify(sum)}</span>
        </div>
    )
}

export default Sum;