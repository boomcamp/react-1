import React, {useState} from 'react';

export default function Palindrome() {
    const [checkWord, setCheckWord] = useState('');
    const [userInput, setUserInput] = useState('');

    function checkPalindrome(string) {
        let splitStr = string.split('');
        let revArr = splitStr.reverse();
        let joinedArr = revArr.join('');

        if(joinedArr === string){
            setCheckWord(true);
        }
        else{
            setCheckWord(false);
        }
    }
        
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => setUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => checkPalindrome(userInput)}>Check</button>
                <span className="resultsBox">{JSON.stringify(checkWord)}</span>
            </div>
    
        );
}
