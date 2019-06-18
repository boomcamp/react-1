import React, {useState} from 'react';

export default function Sum() {
    const [sum, setSum] = useState([]);
    const [userInput, setUserInput] = useState('');

    function sumOutput(input) {
         var sumofnums = 0;
       var nums = input.split(",");
        console.log(nums)
        for (let i = 0; i < nums.length; i++) {
            // var tot = parseInt(nums[0]) + parseInt(nums[1])
            //  sumofnums = tot
            sumofnums += parseInt(nums[i])
        }
        setSum(sumofnums)
      }
    return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick = {() => sumOutput(userInput)}> Add </button>
            <span className="resultsBox">{JSON.stringify(sum)}</span>
        </div>
    )
}