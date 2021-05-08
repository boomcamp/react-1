import React, { useState } from 'react';

export default function CreatePhoneNumber() {

    const [userInput, setUserInput] = useState('');
    const [create, setCreate] = useState();

    function creates(numbers){
        numbers = numbers.split(',')
        if(numbers.length === 10){
            setCreate(numbers.map((num, i) => (i === 0) ? '(' + num : (i === 3) ? ') ' + num : (i === 6) ? '-' + num : num).join(''));
        }else setCreate('Error')
      }

    return (
        <div className="puzzleBox phonePB">
        <h4> Create a Phone Number </h4>
        <input className="inputLine" placeholder="input 10 digits (comma-separated)" onChange={e => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => creates(userInput)}> Create </button>
        <span className="resultsBox">{JSON.stringify(create)}</span>
        </div>
    );
}