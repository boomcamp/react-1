import React, { useState } from "react";

function SquareEveryNum() {
  const [product, setProduct] = useState();
  function solution(num) {
    setProduct(
      parseInt(
        num
          .toString()
          .split("")
          .map(n => n * n)
          .join("")
      )
    );
  }
  return (
    <div className="puzzleBox sumPB">
      <h4> Square Every Number</h4>
      <input
        className="inputLine"
        onChange={e => solution(e.target.value)}
      ></input>
      <button className="confirmationButton"> Square </button>
      <span className="resultsBox">{JSON.stringify(product)}</span>
    </div>
  );
}

export default SquareEveryNum;
