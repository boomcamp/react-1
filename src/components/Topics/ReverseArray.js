import React, { useState } from "react";

export default function ReverseArray() {
  const [reverseArr, setArray] = useState([]);
  const [reverse, reverseInput] = useState("");

  function reverseArray(x) {
    const results = {
      reverseArr: []
    };
    for (var i = x.length - 1; i >= 0; i--) {
      results.reverseArr.push(x[i]);
      setArray(results.reverseArr);
    }
    return reverseArr;
  }
  return (
    <div className="puzzleBox sumPB">
      <h4> ReverseArray </h4>
      <input
        className="inputLine"
        onChange={event => reverseInput(event.target.value)}
      ></input>
      <button
        className="confirmationButton"
        onClick={() => reverseArray(reverse)}
      >
        Reverse
      </button>
      <span className="resultsBox">{reverseArr}</span>
    </div>
  );
}
