import React, { useState } from "react";

function Duplicate() {
  const [answer, setAnswer] = useState();
  function solution(str) {
    var arr = str
      .toLowerCase()
      .split("")
      .sort();
    var duplicate = [];
    for (var a = 0; a < arr.length - 1; a++) {
      if (arr[a] === arr[a + 1]) {
        duplicate.push(arr[a]);
      }
    }
    var unique = [...new Set(duplicate)];
    if (unique.length !== 0) {
      setAnswer(
        unique.length === 1
          ? unique.length + " # " + unique + " is the duplicate."
          : unique.length +
              " # [ " +
              unique.join(" , ") +
              " ] are the duplicates."
      );
    } else {
      setAnswer("0 # no characters repeats more than once");
    }
  }
  return (
    <div className="puzzleBox sumPB">
      <h4>Duplicate Character Checker</h4>
      <input
        className="inputLine"
        onChange={e => solution(e.target.value)}
      ></input>
      <button className="confirmationButton"> Check </button>
      <span className="resultsBox">{JSON.stringify(answer)}</span>
    </div>
  );
}

export default Duplicate;
