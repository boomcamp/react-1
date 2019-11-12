import React, { useState } from "react";

export default function Sum() {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    function adding(input) {
        let res = 0;
        input.split(',').map(data => res += parseInt(data))
        setResult(res)
        console.log(res);
    }

    return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input
                className="inputLine"
                onChange={e => setUserInput(e.target.value)}
            ></input>
            <button onClick={() => adding(userInput)} className="confirmationButton">
                Add
      </button>
            <span className="resultsBox">{result}</span>
        </div>
    );
}
