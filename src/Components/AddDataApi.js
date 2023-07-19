import React, { useState } from 'react';
import axios from 'axios';

function AddDataApi() {
  const [name, setName] = useState("");
  const[predicatedage,setpredicatedage]=useState(null)
  
  const fetchdata = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setpredicatedage(res.data);
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <input
        placeholder='Ex. petro'
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={fetchdata}>Predicted Age</button>
      <h1>Name:{predicatedage?.name}</h1>
      <h1>Predicted Age:{predicatedage?.age}</h1>
      <h1>Count:{predicatedage?.count}</h1>
    </div>
  );
}

export default AddDataApi;
