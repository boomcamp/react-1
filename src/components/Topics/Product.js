import React, { useState } from "react";

export default function Product() {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    function multiplying(input) {
        var prod = input.toString().split(',').map(Number).reduce(function (a, b) {
            return a * b;
        })
        setResult(prod)
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
