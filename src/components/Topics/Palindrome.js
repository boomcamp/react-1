import React,{useState} from 'react';

export default function Palindrome(){




        const [inp,setInp] = useState('');
        const [ans,setAns]  = useState('');

       

        const proc3 = (input) => {
            let splitted = input.split('');
            let rev = splitted.reverse();

            if(input === rev.join('')){
                setAns('true');
            }
            else {
                setAns('false');
            }
        }

        return(
            

            <div class="puzzleBox filterStringPB">
                
            <h4>
                 Palindrome
            </h4>

            <input class="inputLine" onChange={e=>setInp(e.target.value)}/>

            <button class="confirmationButton" onClick={()=>proc3(inp)}>
               Check
            </button>

            <div class="resultsBox filterStringRB">
                {ans ? ans : "Write a word to check"}
            </div>

        </div>
        );
}

