import React, { useState } from "react";

export default function Difference() {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    function subtracting(input) {
        let res = 0;
        input.split(',').map(data => res -= parseInt(data))
        setResult(res);
    }

    return (
        <div className="puzzleBox sumPB">
            <h4>Subtract</h4>
            <input
                className="inputLine"
                onChange={e => setUserInput(e.target.value)}
            ></input>
            <button onClick={() => subtracting(userInput)} className="confirmationButton">
                Subtract
      </button>
            <span className="resultsBox">{result}</span>
        </div>
    );
}
