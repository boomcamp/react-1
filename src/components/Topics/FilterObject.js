import React, { useState } from "react";

function FilterObject() {
  const original = [
    { name: "John", title: "Junior Developer", age: 20 },
    { name: "Bob", title: "Development Manager", age: 32, yearsEmployed: 2 },
    { name: "Lisa", title: "Senior Developer" }
  ];
  const [unFilteredArray] = useState(original);
  const [userInput, setUserInput] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  function solution(str) {
    setFilteredArray(unFilteredArray.filter(x => x[str]));
  }
  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">
        Original: {JSON.stringify(unFilteredArray, null, 5)}
      </span>
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
      <span className="resultsBox filterObjectRB">
        Filtered: {JSON.stringify(filteredArray, null, 5)}
      </span>
    </div>
  );
}

export default FilterObject;
