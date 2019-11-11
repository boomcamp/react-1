import React, { useState } from "react";

export default function Palindrome() {
  const [userInput, setUserInput] = useState("");
  const [check, setCheck] = useState("Enter a word to check");

  function palindrome(input) {
    var t = input.toLowerCase();
    var x = t.split("");
    var y = x.reverse();
    var z = y.join("");
    var regExp = z.replace(/[\W_]/gi, "");
    setCheck(regExp === input);
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
