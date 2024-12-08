import React, { useRef } from 'react'

const Uncontroll = () => {
  const nameInput=useRef(null);
  const handleSubmit=()=>{
    alert(nameInput.current.value);
  }
  return (
    <div>
      <h3>Uncontrolled way to handle Form: </h3>
      <input type="text" placeholder='Enter name' ref={nameInput}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Uncontroll
