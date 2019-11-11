import React, { useState } from "react";

export default function Sum() {
   const [sum, setSum] = useState();
   const [userInput, setUserInput] = useState("");

   function add(num) {
      var s = num.toString().split(",");
      var i = 0;

      for (let val of s) {
         i += parseInt(val);
      }

      setSum(i);
   }

   return (
      <div className="puzzleBox sumPB">
         <h4> Sum </h4>
         <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
         <button className="confirmationButton" onClick={() => add(userInput)}>
            Add
         </button>
         <span className="resultsBox">{JSON.stringify(sum)}</span>
      </div>
   );
}
