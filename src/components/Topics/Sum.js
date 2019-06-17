import React,{useState} from 'react';

export default function Sum(){

        const[inpy,setInpy] = useState('');
        const[sum,setSum] = useState('');

        const proc4 = (input) => {
            let toArr = input.split(',');

            let temp = 0;

            toArr.map(num=>{
                temp+=parseInt(num);
            });

            setSum(temp);
        }
 
        return(
            <div class="puzzleBox filterStringPB">
                
            <h4>
                Sum
            </h4>

            <input class="inputLine" onChange={e=>setInpy(e.target.value)}/>

            <button class="confirmationButton" onClick={()=>proc4(inpy)}>
              Sum
            </button>

            <div class="resultsBox filterStringRB">
               {sum}
            </div>

        </div>
        );
}
