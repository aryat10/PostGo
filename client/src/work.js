import { useState, useMemo } from "react";

export default function Work(){
    const[count,setCount] = useState(0)
    
    // Example of useMemo with an expensive calculation
    const expensiveValue = useMemo(() => {
        console.log("Computing expensive value...");
        let result = 0;
        for(let i = 0; i < count * 1000; i++) {
            result += i;
        }
        return result;
    }, [count]); // Only recalculates when count changes

    return(
        <>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <h1>Hello</h1>
            <p>Count: {count}</p>
            <p>Expensive Calculation: {expensiveValue}</p>
        </>
    )
}