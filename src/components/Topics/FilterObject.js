import React,{useState} from 'react'

export default function FilterObject() {

    const [unFilteredArray, setUnFilteredArray] = useState([
        { name:  'John', title: 'Junior Developer', age: 20 },
        { name: 'Bob', title: 'Development Manager', age: 32, yearsEmployed: 2 },
        { name: 'Lisa', title: 'Senior Developer' },
      ]);
    const [userInput, setUserInput] = useState('');
    const [filteredArray, setFilteredArray] = useState([]);


    function solve(input) {
        input = unFilteredArray.filter(data=>Object.keys(data).indexOf(input) >= 0);

        setFilteredArray(input);
    }

    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>

            <span className="puzzleText">Original: {JSON.stringify(unFilteredArray)}</span>

            <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>

    <button className="confirmationButton" onClick={() => solve(userInput)}>Filter</button>
    
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray)}</span>
        </div>
    )
}
