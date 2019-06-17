import React from 'react';

export default function Sum() {
    const [sum, setSum] = useState();
    const [userInput, setUserInput] = useState('');

    function outputSum(string) {
            // const sumOfNums = 0;
            // const num = string.split(',');

            // for(let i=0; i < num.length; i++){
            //     var num1 = parseInt.input[0];
            //     var num2 = parseInt.input[length - 1];
            //     sumOfNums = num1 + num2;
            // }
            // setSum(sumOfNums);

            for(let val of string.split(',').map(n => parseInt(n))) {
                var num = num + val;
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