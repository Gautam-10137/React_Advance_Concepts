import React, { Suspense } from 'react'

// lazy load the component
const LazyComponent=React.lazy(()=> import("./User.js"));

const Lazy = () => {
  return (
    <div>
        <h2>Lazy Loading:</h2>
        <Suspense fallback={<div><h5>Loading .....</h5></div>}>
            <LazyComponent/>
        </Suspense>
      
    </div>
  )
}

export default Lazy
