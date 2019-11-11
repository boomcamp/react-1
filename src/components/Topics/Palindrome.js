import React, { useState } from "react";

export default function Palindrome() {
   const [word, setWord] = useState("Enter word to check");
   const [userInput, setUserInput] = useState("");

   function palindrome(word) {
      if (
         word ===
         word
            .split("")
            .reverse()
            .join("")
      ) {
         setWord(true);
      } else {
         setWord(false);
      }
   }

   return (
      <div className="puzzleBox palindromePB">
         <h4> Palindrome </h4>
         <input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
         <button className="confirmationButton" onClick={() => palindrome(userInput)}>
            Check
         </button>
         <span className="resultsBox"> {JSON.stringify(word)} </span>
      </div>
   );
}
