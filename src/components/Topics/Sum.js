import React, {useState} from 'react';

function Sum(){
  const [userInput, setUserInput] = useState('');
  const [sum, setSum] = useState([]);

  function add(input){
    const sum = input
      .split(',')
      .map(x => parseInt(x))
      .reduce((accumulator, number) => {
        accumulator += number;
        return accumulator;
      }, 0)

    setSum(sum);
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
      <button className="confirmationButton" onClick={() => add(userInput)}> Add </button>
      <span className="resultsBox">Sum: {JSON.stringify(sum)}</span>
    </div>
  )
}

export default Sum;