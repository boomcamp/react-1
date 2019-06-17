import React, {useState} from 'react';

function FilterString(){
  const [names, setNames] = useState([
    'James',
    'Jessica',
    'Melody',
    'Tyler',
    'Blake',
    'Jennifer',
    'Mark',
    'Maddy',
  ]);
  const [userInput, setUserInput] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);

  function filterNames(input) {
    setFilteredNames(
      names.filter(name => name.includes(input))
    )
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">
        {' '}
        Names: {JSON.stringify(names, null, 10)}{' '}
      </span>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
      <button className="confirmationButton" onClick={() => filterNames(userInput)}>Filter</button>
      <span className="resultsBox filterStringRB">
        {' '}
        Filtered Names: {JSON.stringify(filteredNames, null, 10)}{' '}
      </span>
    </div>
  )
}

export default FilterString;