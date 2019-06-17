import React,{useState} from 'react';

export default function EvenAndOdd(){

        const [userInput,setUserInput] = useState('');
        const [oddsy,setOddsy] = useState('');
        const [evensy,setEvensy] = useState('');
        let odds = [];
        let evens = [];
        function solve(userInput){
           try {
               let nums = userInput.split(',');
               let num  = 0;
               for(num of nums){
                   num%2===0 ? evens.push(num) : odds.push(num);
               }

               setOddsy(odds.join(','));
               setEvensy(evens.join(','));

               
           }
           catch(e){
               console.log("Invalid",e.message);
           }
        }

        return(
            <div class="puzzleBox evenAndOddPB">
                
                <h4>
                     Even Or Odd 
                </h4>

                <input class="inputLine" onChange={e=>setUserInput(e.target.value)}/>

                <button class="confirmationButton" onClick={()=>solve(userInput)}>
                    Split
                </button>

                <div class="resultsBox evenAndOddPB">
                    Evens: {oddsy}
                </div>

                <div class="resultsBox evenAndOddPB">
                    Odd: {evensy}
                </div>
           </div>
        );
}

