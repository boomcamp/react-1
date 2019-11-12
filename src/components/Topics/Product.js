import React, { useState } from "react";

export default function Product() {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    function multiplying(input) {
        let res = 0;
        input.split(',').map(data => res = parseInt(data[0]) * parseInt(data[1]))
        setResult(res)
    }

    return (
        <div className="puzzleBox sumPB">
            <h4>Multiply</h4>
            <input
                className="inputLine"
                onChange={e => setUserInput(e.target.value)}
            ></input>
            <button onClick={() => multiplying(userInput)} className="confirmationButton">
                Multiply
      </button>
            <span className="resultsBox">{result}</span>
        </div>
    );
}
