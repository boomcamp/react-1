import React, {useState} from 'react';

export default function FilterString(){

        const names = [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ];
        const [name,setName] = useState('');
        const [input,setInput] = useState('');


        const process2 =  (input) => {
            let temp = [];
            let a = new RegExp(input,"gi")
             names.map(key=>{
                if(key===input || key.match(a)){
                   temp.push(key);
                }
            });

            setName(temp.join(','));
        }

        return(
            <div class="puzzleBox filterStringPB">
                
            <h4>
                 FilterString
            </h4>
            <span>
            <span class="puzzleText"> 
             Names: {JSON.stringify(names)}
            </span>
            </span>

            <input class="inputLine" onChange={e=>setInput(e.target.value)}/>

            <button class="confirmationButton" onClick={()=>process2(input)}>
                Filter
            </button>

            <div class="resultsBox filterStringRB">
                {name}
            </div>

       </div>
        );
}
