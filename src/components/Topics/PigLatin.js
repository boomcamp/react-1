import React, { useState } from "react";

export default function PigLatin() {
  const [userInput, setUserInput] = useState([]);
  const [result, setResult] = useState();

  function translate(str) {
    var trs_arr = str.split(" ");
    var newArray = [];
    trs_arr.forEach(function(item) {
      var first = item.search(/[aeiou]/i);
      first === 0
        ? newArray.push((item += "way"))
        : newArray.push(item.substr(1) + item.substr(0, 1) + "ay");
    });
    setResult(newArray.join(" "));
  }

  return (
    <div className="puzzleBox sumPB">
      <h4> Translate Pig Latin </h4>
      <input
        className="inputLine"
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button
        className="confirmationButton"
        onClick={() => translate(userInput)}
      >
        {" "}
        Translate{" "}
      </button>
      <span className="resultsBox">{JSON.stringify(result)}</span>
    </div>
  );
}
