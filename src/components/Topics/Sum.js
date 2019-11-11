import React, { useState } from "react";

export default function Sum() {
	const [num, setNum] = useState("");
	const [sum, addNum] = useState("");

	function add(str, count = 0) {
		str.split(",").map(x => (count += +x));
		addNum(count);
	}

	return (
		<div className="puzzleBox sumPB">
			<h4> Sum </h4>
			<input className="inputLine" onChange={e => setNum(e.target.value)}></input>
			<button className="confirmationButton" onClick={() => add(num)}>
				Add
			</button>
			<span className="resultsBox">{sum}</span>
		</div>
	);
}
