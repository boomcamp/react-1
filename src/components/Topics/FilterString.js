import React, { useState } from "react";

function FilterString() {

  const [names] = useState([
    'James',
    'Jessica',
    'Melody',
    'Tyler',
    'Blake',
    'Jennifer',
    'Mark',
    'Maddy',
  ]);
  const [userInput, setUserInput] = useState('')
  const [filteredNames, setFilteredNames] = useState([])

  function filterNames(string) {
    setFilteredNames(
      names.filter(name => name.includes(string))
    )
    console.log(setFilteredNames)
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">{JSON.stringify(names, null, 10)}</span>
      <input className="inputLine" onChange={(e)=> setUserInput(e.target.value)}/>
      <button className="confirmationButton" onClick={()=> filterNames(userInput)}>Filter</button>
      <span className="resultsBox filterStringRB">{JSON.stringify(filteredNames, null, 10)}</span>
    </div>
  );
}
export default FilterString;
