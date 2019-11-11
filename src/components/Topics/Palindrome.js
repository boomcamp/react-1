import React,{useState} from 'react'

function Palindrome(){
    const [userInput, setUserInput] = useState('');
    const [check, setCheck] = useState('');

    function palindrome(input){
        return input == input.split('').reverse().join('') ? setCheck(input + ' is palindrome.') : setCheck(input + ' is not palindrome.');
    }
    return(
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input type='text' placeholder="Palindrome: (madam/kayak)" className="inputLine" onChange={e=>setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => palindrome(userInput)}> Check </button>
            <span className="resultsBox">{check}</span>
        </div>
    )
}
export default Palindrome
