import React, { useState } from "react";

function Palindrome() {
  const [userInput, setUserInput] = useState([]);
  const [check, setCheck] = useState();
  function solution(str) {
    if (str.length !== 0) {
      var str2 = str
        .split("")
        .reverse()
        .join("");
      str === str2 ? setCheck(true) : setCheck(false);
    } else {
      setCheck(true);
    }
  }
  return (
    <div className="puzzleBox palindromePB">
      <h4> Palindrome</h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button
        className="confirmationButton"
        onClick={() => solution(userInput)}
      >
        Check
      </button>
      <span className="resultsBox">{JSON.stringify(check)}</span>
    </div>
  );
}

export default Palindrome;
