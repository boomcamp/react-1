import React, {useState} from 'react';

export default function Bubblesort(){
    const [userInput, setUserInput] = useState()
    const [sorted, sort] = useState()
    var temp = [];
    function bubblesort(input){
        var split = input.split(',');
        for(var i = 0; i<split.length;i++){
            for(var j = 0; j<split.length; j++){
            if(split[j] > split[j+1]){
                temp = split[j];
                split[j] = split[j+1];
                split[j+1] = temp;
            }
            }
        }
        sort(split.join(', '))
    }
    return(
        <div className="puzzleBox bubblePB">
            <h4> Bubble Sort </h4>
            <input className="inputLine" onChange={e=>setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>bubblesort(userInput)}> Add </button>
            <span className="resultsBox">Sorted: {JSON.stringify(sorted, null, 10)}</span>
        </div>
    )
}