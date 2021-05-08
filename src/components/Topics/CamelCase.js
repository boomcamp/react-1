import React, { useState } from 'react';

export default function CamelCase() {

    const [userInput, setUserInput] = useState('');
    const [camel, setCamel] = useState();

    function camels(str){
        if(str){
            var arr = str.split('');
            for(let i=0; i < arr.length; i++){
              if(arr[i] === '-' || arr[i] === '_') arr[i+1] = arr[i+1].toUpperCase();
            }
            setCamel(arr.join('').replace(/[-_]/g, ''));
          }else setCamel('')
    }

    return (
        <div className="puzzleBox camelPB">
        <h4> Convert string to camel case </h4>
        <input className="inputLine" placeholder="input a string(w/ dash(-) or underscore)" onChange={e => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => camels(userInput)}> Convert </button>
        <span className="resultsBox">{JSON.stringify(camel)}</span>
        </div>
    );
}