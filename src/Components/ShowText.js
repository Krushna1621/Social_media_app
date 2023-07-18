import React, { useState } from 'react'

function ShowText() {
    const[textShow,settextShow]=useState(true)
  return (
    <div>
      <button onClick={()=>{
        settextShow(!textShow)
      }}>Show</button>
     {textShow && <h1>My Name is Krushnkanat Shinde</h1>} 
    </div>
  )
}
export default ShowText;