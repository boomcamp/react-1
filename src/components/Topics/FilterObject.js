import React, {useState} from 'react'

export default function FilterObject() {
    var [unFilteredArray] = useState([ { "name": "John", "title": "Junior Developer", "age": 20 }, { "name": "Bob", "title": "Development Manager", "age": 32, "yearsEmployed": 2 }, { "name": "Lisa", "title": "Senior Developer" } ])
    var [userInput, setUserInput] = useState();
    var [filteredArray, setFilteredArray] = useState('[]')

    const filterObject = function(input){
        let temp=[]
        for(var i=0; i<unFilteredArray.length; i++){
            if(input in unFilteredArray[i])
                temp.push(unFilteredArray[i])
        }
        setFilteredArray(JSON.stringify(temp))
    };
    
    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original:{JSON.stringify(unFilteredArray)}</span>
            <input className="inputLine" type="text" onChange={(e) => setUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick={() => filterObject(userInput)}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: {filteredArray}</span>
        </div>        
    )
}
