import React, { useEffect, useState } from 'react'

const MemoComponent=React.memo(({value})=>{
    console.log("Rerendering memo");
    return <h2>Count: {value}</h2>;
})

const Memo = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
      console.log("Component rerendering");
    },[]);

  return (
    <div>
        <MemoComponent value={count}/>
        
      <button onClick={()=>{setCount(count+1);}}>Increment</button>
    </div>
  )
}

export default Memo
