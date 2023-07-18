import React, { useState } from 'react'

function Toggle() {
    const[textColor,setColor]=useState('Black')
  return (
    <div>
      <button onClick={()=>{
        setColor('red')
      }}>Show</button>
      <h1 style={{color:textColor}}>My Name is Krushnkanat Shinde</h1>
    </div>
  )
}
export default Toggle;