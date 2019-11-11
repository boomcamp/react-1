import React, { useState } from 'react';

export default function FoldingToTheMoon() {

    const [userInput, setUserInput] = useState('');
    const [fold, setFold] = useState();

    function folds(dis){
        var thick = 0.0001,
            count = 0;
        if(dis < 1) setFold(null)
        else{
          dis *= 1000;
          while(dis > thick){
            count++;
            thick *= 2;
          }
          setFold(count);
        }
      }

    return (
        <div className="puzzleBox foldsPB">
        <h4> Folding To The Moon </h4>
        <input className="inputLine" placeholder="input distance in km" onChange={e => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => folds(userInput)}> Calculate </button>
        <span className="resultsBox">{JSON.stringify(fold)}</span>
        </div>
    );
}