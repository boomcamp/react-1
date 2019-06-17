import React, { useState } from 'react';

export default function FilterString() {

    const [names, setNames] = useState(['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'])
    const [filteredNames, setFilteredNames] = useState([]);
    const [userInput, setUserInput] = useState('');

    function filterNames(userInput) {
        const filtered = names.filter( val => {
            if (val.includes(userInput)){
                return true;
            }
            return false;
        })
        setFilteredNames(filtered);
    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Names: {JSON.stringify(names)}</span>
            <input className="inputLine" onChange= { e => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => filterNames(userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> FilteredNames: { JSON.stringify(filteredNames)}</span>
        </div>
    )
}