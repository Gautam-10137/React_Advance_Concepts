import React, { useState } from 'react'

const DynamicImport = () => {
    const [Component,setComponent]=useState(null);

    const loadComponent=async()=>{
        const {default:LoadedComponent}=await import("./User");
        setComponent(()=>LoadedComponent);
    }

  return (
    <div>
        <h3>Dynamic Import:</h3>
        {Component && <Component/>}
      <button onClick={loadComponent}> Import </button>
    </div>
  )
}

export default DynamicImport 
