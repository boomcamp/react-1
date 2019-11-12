import React, { useState } from "react";

export default function Palindrome() {
    const [userInput, setUserInput] = useState("");
    return (
        <div className="puzzleBox palindromePB">
            <h4>Palindrome</h4>
            <input
                className="inputLine"
                onChange={e => setUserInput(e.target.value)}
            ></input>
            <button className="confirmationButton">Check</button>
            <span className="resultsBox">Enter a word to check</span>
        </div>
    );
}
