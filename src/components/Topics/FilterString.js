import React,{useState} from 'react'

export default function FilterString() {
    const [unFilteredArray, setUnFilteredArray] = useState( [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]);

    const [userInput, setUserInput] = useState('');
    const [filteredArray, setFilteredArray] = useState([]);


    function solve(input) {

        input = unFilteredArray.filter(data=>data.includes(input));

        setFilteredArray(input);
    }

    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter String</h4>

            <span className="puzzleText">Original: {JSON.stringify(unFilteredArray)}</span>

            <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>

    <button className="confirmationButton" onClick={() => solve(userInput)}>Filter</button>
    
            <span className="resultsBox filterObjectRB">Filtered Names: {JSON.stringify(filteredArray)}</span>
        </div>
    )
}
