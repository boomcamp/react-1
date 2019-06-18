import React, { useState } from 'react';

export default function FilterString() {
  const [names, setNames] = useState([
    'Spider-Man',
    'Iron Man',
    'Thor',
    'Captain America',
    'Hulk',
    'Black Widow'
  ]);

  const [userInput, setUserInput] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);

  function filter(userInput){
    setFilteredNames(
      names.filter(names => names.includes(userInput))
    );
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">
        Names: {JSON.stringify(names)}
      </span>
      <input className="inputLine" onChange={event => setUserInput(event.target.value)}></input>
      <button className="confirmationButton" onClick={() => filter(userInput)}>Filter</button>
      <span className="resultsBox filterStringRB">
        Filtered Names: {JSON.stringify(filteredNames)};
      </span>
    </div>
  )
}