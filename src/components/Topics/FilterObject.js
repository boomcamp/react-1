import React, {useState} from 'react';

export default function FilterObject() {
    const [unFilteredArray, setUnFilteredArray] = useState([
        { name:  'John', title: 'Junior Developer', age: 20 },
        { name: 'Bob', title: 'Development Manager', age: 32, yearsEmployed: 2 },
        { name: 'Lisa', title: 'Senior Developer' },
    ]);
    const [filteredArray, setFilteredArray] = useState([]);
    const [userInput, setUserInput] = useState('');

    function filter(input){
        setFilteredArray(unFilteredArray.filter(d=>d[input]));
    }

    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: {JSON.stringify(unFilteredArray, null, 10)}</span>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick={() => filter(userInput)}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray, null, 10)}</span>
        </div>
    );
}