import React, { useState } from "react";

export default function Sum() {
    const [userInput, setUserInput] = useState("");

    function adding(a, b) {
        let result;
        if (String) {
            return null;
        }
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
            <span className="resultsBox"></span>
        </div>
    );
}
