import React, { useState } from 'react'

function Name() {
    
    const[name,setName]=useState('Krishna')
    const namehandler=()=>{
        return setName("Shinde")
    }

  return (
    <div>
        <h1>Hello,{name}</h1>
        <button onClick={namehandler}>Click Here</button>
    </div>
  )
}
export default Name;