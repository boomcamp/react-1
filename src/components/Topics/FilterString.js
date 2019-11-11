import React, {useState} from 'react'

function FilterString(){
    const [names, setNames] = useState(['James','Jessica','Melody','Tyler','Blake','Jennifer','Mark','Maddy',]);
    const [filteredNames, setFilteredNames] = useState([]);
    const [userInput, setUserInput] = useState('');

    function filterNames(string) {
        setFilteredNames(
          names.filter(name => name.includes(string))
        )
    }

    return(
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Names: {JSON.stringify(names, null, 10)}</span>
            <input type='text' placeholder="Please type the name in the array." className="inputLine" onChange={e => setUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick={() => filterNames(userInput)}>Filter</button>
            <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(filteredNames, null, 10)}</span>
        </div>
    )
}   
export default FilterString
