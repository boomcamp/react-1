
import React,{useState} from 'react';

function EvenAndOdd(){
    const [add, setAdd ] = useState([]);
    const [userInput, setUserInput] = useState('');

    function addAll(input) {
        const results = {
         add: []
        } 
        var  sum = input.toString().split(',').map(Number).reduce(function (a, b) {return a + b;}, 0);   
        results.add.push(sum)
        setAdd(results.add)
    }

    return ( 
        <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" placeholder="Please add comma(,) to add." onChange={c=> setUserInput(c.target.value)} type ="text"></input>
        <button className="confirmationButton" onClick={() => addAll(userInput)}> Add </button>
        <span className="resultsBox">{add}</span>
    </div>
    )
}
export default EvenAndOdd;