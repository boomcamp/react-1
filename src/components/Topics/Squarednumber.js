import React,{useState} from 'react';

export default function Squarednumber(){
 const [result, setResult] = useState([]);
 const [userInput, setUserInput] = useState('');
 function addsquaredNum(input){
    const addResults ={
        result:[]
    }
    for(var i = 0; i < input.length; i++){
        addResults.result.push(input[i]**2)
      }
    addResults.result.push(Squarednumber)
    setResult(addResults.result)
}
    


  

 
    return(
  <div className="puzzleBox sumPB">
  <h4> SquaredNumber </h4>
  <input className="inputLine"  onChange={c=> setUserInput(c.target.value)} ></input>
  <button className="confirmationButton" onClick={() => addsquaredNum(userInput)}> Multiply  </button>
    <span className="resultsBox">{result}</span>
</div>
    )
 }