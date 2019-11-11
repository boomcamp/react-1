import React,{useState} from 'react';



export default function EvenAndOdd(){
  const [add, setAdd ] = useState([]);
  const [userInput, setUserInput] = useState('');

  function addAll(input) {
    const addResults = {
      add: []
    } 
  // var x =(input - 1) % 10+1;
    var  sum = input.toString().split('').map(Number).reduce(function (a, b) {
            return a + b;
        }, 0);   
    addResults.add.push(sum)
    setAdd(addResults.add)
  }
  return ( 
    <div className="puzzleBox sumPB">
    <h4> Sum </h4>
    <input className="inputLine"  onChange={c=> setUserInput(c.target.value)} type ="number"></input>
    <button className="confirmationButton" onClick={() => addAll(userInput)}> Add </button>
    <span className="resultsBox">{add}</span>
  </div>
  )
}