import { useState } from "react";


const Child= () =>{
    const [count, setCount] = useState(0);
   
    const handleIncrementClick = () =>{
        setCount(count+1);
    }

        const handleDecClick = () => {
            setCount(count-1);
        }
    
    return(
        <div>
            I am a child
    <h1>{count}</h1>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecClick}>Decriment</button>
        </div>
    )
}

export default Child;