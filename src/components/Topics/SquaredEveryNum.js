import React,{useState} from 'react';


export default function SquaredEveryNum(){
 const [squred, setSquared] = useState([]);
 const [userInput, setUserInput] = useState([]);

 function allSquared(input){
   const addSquared = {

    squred:[]

   }
   
    var numString = input.toString()

    var squareString = ""
    
    for (var i = 0; i < numString.length; i++) {
      
      squareString += Math.pow(parseInt(numString[i]), 2)
    }
  
    addSquared.squred.push(parseInt(squareString))
    setSquared(addSquared.squred)
   }
  

  return(
    <div className="puzzleBox sumPB">
    <h4> Squared Every Number </h4>
    <input className="inputLine" onChange ={ el =>setUserInput(el.target.value)}  type ="number"></input>
    <button className="confirmationButton" onClick = {()=>allSquared(userInput)}> Squared </button>
    <span className="resultsBox">{squred}</span>
  </div>
  )
}
