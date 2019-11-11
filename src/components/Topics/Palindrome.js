import React, { useState } from "react";

export default function Palindrome() {
  const [palindr, setPalindromes] = useState([]);
  const [setPal, setpalindrome] = useState("");

  function solvePal(pal) {
    const removeChar = pal.replace(/[^A-Z0-9]/gi, "").toLowerCase();
    const checkPalindrome = removeChar
      .split("")
      .reverse()
      .join("");
    const results = {
      palindr: []
    };
    if (removeChar === checkPalindrome) {
      results.palindr.push("true");
    } else {
      results.palindr.push("false");
    }
    setPalindromes(results.palindr);
  }

  return (
    <div className="puzzleBox palindromePB">
      <h4> Palindrome </h4>
      <input
        className="inputLine"
        onChange={event => setpalindrome(event.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => solvePal(setPal)}>
        Check
      </button>
      <span className="resultsBox">{palindr}</span>
    </div>
  );
}
