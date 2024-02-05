import { useState } from "react";

const Child1 = () => {

    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        setCount(count+1);
    }

    const DecreaseCount = () => {
        setCount(count-1);
    }

    return (
     <div>
         <h1>T-Shirt</h1>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jopokart.com%2Fproducts%2Fsports-jersey-for-men-sublimation&psig=AOvVaw2yJ1qmDGBHft1MvO1lsUby&ust=1707211448177000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICVgbjwk4QDFQAAAAAdAAAAABAE" alt="T-Shirt" />
        <h1>{count  }</h1>
        <button onClick={IncreaseCount}>Add to Cart</button>
        <button onClick={DecreaseCount}>Remove From Cart</button>
     </div>
       
    )
}

export default Child1