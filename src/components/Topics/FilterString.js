import React, {useState} from 'react';

export default function FilterString(){
    const [names, setNames ]= useState([
        'James',
        'Jessica',
        'Melody',
        'Tyler',
        'Blake',
        'Jennifer',
        'Mark',
        'Maddy',
    ]);
    const [userInput, setUserInput] = useState("")
    const [filteredNames, setFilteredNames] = useState([])

    function filter(input){
        var ans = names.filter(n => (n.includes(input))?n:setFilteredNames(null))
        setFilteredNames(ans)
    }

    return(
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Names: {JSON.stringify(names, null, 10)}</span>
            <input className="inputLine" onChange={e=>setUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick={()=>filter(userInput)}>Filter</button>
            <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(filteredNames, null, 10)}</span>
        </div>
    )
}