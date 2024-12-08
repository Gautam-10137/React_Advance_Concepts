import React, { useCallback, useState } from 'react'

const MyButton=React.memo(({onclick})=>{
  console.log("Button Rendering");
  return <button onClick={onclick}>Click Me</button>
})

const CallBack = () => {
    const [count,setCount]=useState(0);

    // const increment=useCallback(()=>{
    //   setCount(count+1);
    // },[]);    // it will get memoize with initial count i.e. 0
    
    const increment=useCallback(()=>{
      setCount((prevState)=>prevState+1);
    },[]);   // this is correct way since we are not using count which is memoized also rerendering not occur
    //    or
    // const increment=useCallback(()=>{
    //   setCount(count+1);
    // },[count]); // this is correct but it will cause rerendering


  return (
    <div>
      <h1>useCallback hook:</h1>
        <h2>Count: {count}</h2>
        <MyButton onclick={increment}/>
        
    </div>
  )
}

export default CallBack;
