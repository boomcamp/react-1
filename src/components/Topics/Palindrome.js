import React, { useState } from "react";

export default function Palindrome() {
  const [userInput, setUserInput] = useState("");
  const [check, setCheck] = useState("Enter a word to check");

  function palindrome(input) {
    var word = input
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
      .replace(/[\W_]/gi, "");
    setCheck(word === input);
  }

  return (
    <div className="puzzleBox palindromePB">
      <h4> Palindrome </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button
        className="confirmationButton"
        onClick={() => palindrome(userInput)}
      >
        Check
      </button>
      <span className="resultsBox">{JSON.stringify(check)}</span>
    </div>
  );
}
