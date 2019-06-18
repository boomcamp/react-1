import React, {useState} from 'react';

export default function Sum() {
    const [sum, setSum] = useState();
    const [userInput, setUserInput] = useState('');

    function outputSum(string) {
            var num = 0;

            for(let val of string.split(',').map(n => parseInt(n))) {
                num = num + val;
            }
            setSum(num);
    }
        
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => setUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => outputSum(userInput)}>Add</button>
                <span className="resultsBox">{JSON.stringify(sum)}</span>
            </div>
    
        );
}
