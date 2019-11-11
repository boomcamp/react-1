import React, {useState} from 'react';

export default function Sum(){
    const [SumInput, getSumInput] = useState([]);
    const [result, getResult] = useState('');

    function solveSum(input){
        let sums = 0, sumsArr = [];
        input.split(',').forEach((addend)=> {
            sums += parseInt(addend);
        
        })
        sumsArr.push(sums);
        getResult(sumsArr);
    }

    return(
        <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" onChange={((e) => getSumInput(e.target.value))}></input>
        <button className="confirmationButton" onClick={(() => solveSum(SumInput))}> Add </button>
        <span className="resultsBox">Sum: {result}</span>
        </div>
    )
}