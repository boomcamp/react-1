import React , {useState} from 'react';

export default function FilterObject(){


       const [userInput2,setUserInput2] = useState('');
       const [filter,setFilter] = useState('');
        const obj = [ { "name": "John", "title": "Junior Developer", "age": 20 }, { "name": "Bob", "title": "Development Manager", "age": 32, "yearsEmployed": 2 }, { "name": "Lisa", "title": "Senior Developer" } ];
        
        const process = (userInput2) => {
            let filtered = [];
            obj.map(key=>{
                if(key[userInput2]){
                    filtered.push(key);
                }
            })
           setFilter(JSON.stringify(filtered));
        }
        
        return(
            <div class="puzzleBox filterObjectPB">
                
                <h4>
                    Filter Object
                </h4>
                Original 
                    
                <span class="puzzleText">
                    
                        {JSON.stringify(obj)}
                    
                </span>

                <input class="inputLine" onChange={e => setUserInput2(e.target.value)}/>

                <button class="confirmationButton" onClick={()=>process(userInput2)} >
                    Filter Object
                </button>

                <div class="resultsBox filterObjectRB">
                  <p class="puzzleText">
                  {filter}
                  </p>
                </div>

               
           </div>
        );
}
