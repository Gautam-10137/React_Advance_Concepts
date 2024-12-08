import React, { useState } from 'react'


const RenderProps = ({render}) => {
    const [position,setPosition]=useState({x:0,y:0});

    const handleMouseMove=(e)=>{
        setPosition({x:e.clientX,y:e.clientY});
    }
  return (
    <div style={{height:"10vh"}}  onMouseMove={handleMouseMove}>
        <h3>Render Props: </h3>     
      {render(position)}
    </div>
  )
}

export default RenderProps
