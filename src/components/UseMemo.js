import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const [text,setText]=useState("");

    const expensiveCalc=useMemo(()=>{
        console.log("Running expensive calculations");
        return count*2;
    },[count]);
    console.log("re-rendering");
  return (
    <div>
        <h1>Using useMemo hook</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
        <h2>Count: {count}</h2>
        <h3>Expensive calculation: {expensiveCalc}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseMemo
