import React, { useState } from "react";

export default function Palindrome() {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setpalindrome] = useState("");
  function check(input) {
    setpalindrome(
      input
        .split("")
        .reverse()
        .join("") === input
        ? "A palindrome"
        : "Not a palindrome"
    );
  }
  return (
    <div className="puzzleBox palindromePB">
      <h4> Palindrome </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => check(userInput)}>
        {" "}
        Check{" "}
      </button>
      <span className="resultsBox">{palindrome}</span>
    </div>
  );
}
