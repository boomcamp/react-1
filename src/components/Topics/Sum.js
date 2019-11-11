import React,{useState} from 'react';

export default function Sum(){
    const [add, setAdd] = useState([]);
    const [userInput, setUserInput] = useState('');
function addInput(input){
    const addResults ={
        add:[]
    }
    const sum = input.toString().split('').map(Number).reduce(function(inp, inp1){
        return inp + inp1;
    },0);
    addResults.add.push(sum)
    setAdd(addResults.add)
}
    
    return(
  <div className="puzzleBox sumPB">
  <h4> Sum </h4>
  <input className="inputLine"  onChange={c=> setUserInput(c.target.value)}></input>
  <button className="confirmationButton" onClick={() => addInput(userInput)}> Add </button>
  <span className="resultsBox">{add}</span>
</div>
    )
}  