import React from "react";
import { useState } from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);
    
    function increment(){
        setCount(count +1);
      }
      function decrement(){
        setCount(count -1);
      }
    
    
    return(
        <div>
            <h1>{count}</h1>

            <button onClick={increment}>Вверх</button>
            <button onClick={decrement}>Вниз</button>
        </div>
    );
      
};


export default Counter;