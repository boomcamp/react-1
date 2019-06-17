import React, {useState} from 'react';

export default function FilterObject() {
    const [unFilteredArray, setUnFilteredArray] = useState([
        { name:  'John', title: 'Junior Developer', age: 20 },
        { name: 'Bob', title: 'Development Manager', age: 32, yearsEmployed: 2 },
        { name: 'Lisa', title: 'Senior Developer' },
    ]);
    const [filteredArray, setFilteredArray] = useState([]);
    const [userInput, setUserInput] = useState('');

    function filter(input) {
        const filteredArray = unFilteredArray.filter(arr => {
            if(arr[input]) {
                return true;
            }
            else {
                return false;
            }
        });
        setFilteredArray(filteredArray);
    }
        
    return (
        <div className="puzzleBox filterObjectPB">
            <span className="puzzleText">Original: { JSON.stringify(unFilteredArray, null, 10) }</span>
            <h4>Filter Object</h4>
            <input className="inputLine" onChange={e => setUserInput(e.target.value)} />
            <button className="confirmationButton" onClick={() => filter(userInput)}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(unFilteredArray, null, 10)}</span>
        </div>
    );

}