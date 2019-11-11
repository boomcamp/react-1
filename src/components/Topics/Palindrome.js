import React, { useState } from "react";

export default function Palindrome() {
	const [word, setWord] = useState("");
	const [stat, setStat] = useState("Enter a word to check");

	function palindrome(str) {
		str ==
		str
			.split("")
			.reverse()
			.join("")
			? setStat("True")
			: setStat("False");
	}

	return (
		<div className="puzzleBox palindromePB">
			<h4> Palindrome </h4>
			<input className="inputLine" onChange={e => setWord(e.target.value)}></input>
			<button className="confirmationButton" onClick={() => palindrome(word.toUpperCase())}>
				Check
			</button>
			<span className="resultsBox">"{stat}"</span>
		</div>
	);
}
