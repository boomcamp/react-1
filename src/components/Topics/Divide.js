import React, { useState } from "react";

export default function Quotient() {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    function dividing(input) {
        let res = 0;
        input.split(',').map(data => res /= parseInt(data))
        setResult(res)
    }

    return (
        <div className="puzzleBox sumPB">
            <h4>Divide</h4>
            <input
                className="inputLine"
                onChange={e => setUserInput(e.target.value)}
            ></input>
            <button onClick={() => dividing(userInput)} className="confirmationButton">
                Divide
      </button>
            <span className="resultsBox">{result}</span>
        </div>
    );
}
