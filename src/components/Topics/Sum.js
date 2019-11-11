import React, {useState} from 'react';


export default function Sum() {
    const [userInput, setUserInput] = useState([]);
    const [sum, getResult] = useState('');

    // function solve (input) {

    //     let result = 0;
    //     let sumOfDigits=[];
    //     let newInput = input.split(',')

    //     for (var x = 1; x <= input.length; x++) {
    //         result += newInput(x); 
    //     }
    //     sumOfDigits.push(result)
    //     setSum(sumOfDigits)

    // return result; 


    // }

    function solve(input){
        let sums = 0, sumsArr = [];
        input.split(',').map((addend)=> {
            sums += parseInt(addend);
        
        })
    
        sumsArr.push(sums);
        getResult(sumsArr);
    } 


    
    return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => solve(userInput)}> Add </button>
            <span className="resultsBox">Result: {sum}</span>
        </div>
    )
    }

