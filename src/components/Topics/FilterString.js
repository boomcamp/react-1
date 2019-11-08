import React, { useState } from 'react'
// import ReactDOM from 'react-dom';
import { strict } from 'assert';
import Palindrome from './Palindrome';
import { placeholder } from '@babel/types';

export default function FilterString(){
   
    const [ names] = useState(['Lyza', 'Mae', 'Martha', 'Dansyle', 'Vince', 'Gerard', 'Marcial', 'Jr'])
    const [ filteredNames, setFilteredNames] = useState([]);
    const [ userInput, setUserInput ] = useState('');
    
    function filterNames(string){
        setFilteredNames(
            names.filter(name => name.includes(string))
        )
    }
    return (
        <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: {JSON.stringify(names, null, 10)}</span>
        <input className="inputLine" onChange={ e=> setUserInput(e.target.value) }></input>
        <button className="confirmationButton" onClick={() => filterNames(userInput)  }>Filter</button>
        <span className="resultsBox filterStringRB">Filter: {JSON.stringify(filteredNames, null, 10)}</span>
      </div>
    )
}
