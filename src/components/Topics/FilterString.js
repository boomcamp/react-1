import React, {useState} from 'react'

export default function FilterString() {
    var [names] = useState([ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ])
    var [userInput, setUserInput] = useState()
    var [filteredNames, setFilteredNames] = useState()

    const filterName = function (input){
      let temp = [];
      names.map(x => x.includes(input) ?  temp.push(` "${x}" `) : null)
      setFilteredNames(temp.toString().split())
    }

    return (
        <div className="puzzleBox filterStringPB">
          <h4> Filter String </h4>
          <span className="puzzleText">Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]</span>
          <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
          <button className="confirmationButton" onClick={()=> filterName(userInput)}> Filter </button>
          <span className="resultsBox filterStringRB">Filtered Names: [{filteredNames}]</span>
        </div>
      )
}
