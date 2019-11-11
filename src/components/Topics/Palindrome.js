import React, { useState } from "react";

export default function Palindrome() {
  const [userInput, setUserInput] = useState([]);
  const [palindrome, setPalindrome] = useState("Enter a word to check");

  function isPalindrome(str) {
    var cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
    var reverseStr = cleanStr
      .split("")
      .reverse()
      .join("");
    setPalindrome(cleanStr === reverseStr);
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
        onClick={() => isPalindrome(userInput)}
      >
        {" "}
        Check{" "}
      </button>
      <span className="resultsBox palindromeRB">
        {JSON.stringify(palindrome, null, 10)}
      </span>
    </div>
  );
}
