import React, { useEffect, useState } from 'react'
import Axios from 'axios'
function DataRecive() {
    const[catFact,setcatFact]=useState("")
    const fetchdatahandler=()=>{
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setcatFact(res.data.fact);
         });
    }
    useEffect(()=>{
        fetchdatahandler()
    },[])

  return (
    <div>
      <button onClick={fetchdatahandler}>Generate Button</button>
      <p>{catFact}</p>
    </div>
  )
}
export default DataRecive;
