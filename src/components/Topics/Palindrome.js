import React, { useState } from "react";

export default function Palindrome() {
  const [userInput, setUserInput] = useState("");
  const [checkInput, setCheckInput] = useState("Enter a word to check");

  function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]+/g, "");
    setCheckInput(
      str ===
        str
          .split("")
          .reverse()
          .join("")
    );
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
        {" "}
        Check{" "}
      </button>
      <span className="resultsBox">{JSON.stringify(checkInput)}</span>
    </div>
  );
}
