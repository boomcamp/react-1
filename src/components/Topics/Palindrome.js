import React, { useState } from "react";

export default function Palindrome() {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    function check(input) {
        for (let i = 0; i < input.length / 2; i++) {
            if (input[i] !== input[input.length - 1 - i])
                return setResult("false");
        }
        return setResult("true")
    }

    return (
        <div className="puzzleBox palindromePB">
            <h4>Palindrome (Single Word)</h4>
            <input
                className="inputLine"
                onChange={e => setUserInput(e.target.value)}
            ></input>
            <button onClick={() => check(userInput)} className="confirmationButton">Check</button>
            <span className="resultsBox">{result}</span>
        </div>
    );
}
