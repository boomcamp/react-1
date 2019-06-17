import React, {useState} from 'react'

export default function FilterString() {
    const [names, setNames] = useState(['Ari', 'Ari', 'Ari', 'Arrivederci!']);
    const [userInput, setUserInput] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);

    function solve(input){
        setFilteredNames(
            names.filter(name => name.includes(input))
          )
    }
    return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">{' '}Names: {JSON.stringify(names, null, 10)}{' '}</span>
            <input onChange={e => setUserInput(e.target.value)} className="inputLine" />
            <button onClick={() => solve(userInput)} className="confirmationButton"></button>
            <span className="resultsBox filterStringRB">{JSON.stringify(filteredNames, null, 10)}{' '}</span>
        </div>
    );
}