import React, { useState } from "react";

export default function RemoveVowels() {
	const [word, setWord] = useState("");
	const [newWord, setNewWord] = useState("");

	function remove(str) {
		setNewWord(str.replace(/[aeiou]/gi, ""));
	}

	return (
		<div className="puzzleBox palindromePB">
			<h4> Remove Vowels in a String </h4>
			<input className="inputLine" onChange={e => setWord(e.target.value)}></input>
			<button className="confirmationButton" onClick={() => remove(word)}>
				Check
			</button>
			<span className="resultsBox">{newWord}</span>
		</div>
	);
}
