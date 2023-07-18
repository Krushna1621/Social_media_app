import React, { useState } from 'react'

function Toggle() {
    const[textColor,setColor]=useState(true)
    const[visible,setvisible]=useState(true)
  return (
    <div>
      <button onClick={()=>{
        setColor(!textColor)
        setvisible(!visible)
      }}>Show</button>
      <h1 style={{color:textColor?'black':'red'}}>My Name is Krushnkanat Shinde</h1>
    {visible?'ON':'OFF'}
    </div>
  )
}
export default Toggle;