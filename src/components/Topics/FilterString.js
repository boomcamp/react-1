import React, { useState } from "react";

function FilterString() {
  const [name] = useState([
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy"
  ]);
  const [userInput, setUserInput] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  function solution(str) {
    setFilteredNames(name.filter(x => x === str));
  }
  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">Names: {JSON.stringify(name, null, 5)}</span>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      />
      <button
        className="confirmationButton"
        onClick={() => solution(userInput)}
      >
        Filter
      </button>
      <span className="resultsBox filterStringRB">
        Filtered Names: {JSON.stringify(filteredNames)}
      </span>
    </div>
  );
}

export default FilterString;
