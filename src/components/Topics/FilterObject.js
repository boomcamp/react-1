import React,{useState} from 'react';


export default function FilterObject(){

    const [unFilteredArray, setUnFilteredArray] = useState([
    {name:'Vincent',title:'Python Developer', age:22, yearsEmployed:1},
    {name:'Bryan', title:'Menthor', age: 28},
    {name:'Jude', title:'FrontEnd Develper', age:20 ,yearsEmployed:1},
    ]);
    const [filteredArray, setFilteredArray] = useState([]);
    const [userInput, setUserInput] = useState('');
    function filter(input){
        const filtered = unFilteredArray.filter(o =>{
            if(o[input]){
                return true;
            }
            return false;
        })
        setFilteredArray(filtered);
    }
  
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(unFilteredArray, null, 10)}</span>
        <input className="inputLine" onChange={e => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => filter(userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray, null, 10)}</span>
      </div>
    )
  }


