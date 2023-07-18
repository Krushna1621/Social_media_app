import React, { useState } from 'react'

function Input() {
  const[Input,setInput]=useState('')

  const inputhandler=(event)=>{
      setInput(event.target.value)
  }
  return (
    <div >
        <input type="text" onChange={inputhandler} style={{backgroundColor:'red'}}/>
        {Input}
    </div>
   
  )
}

export default Input;
