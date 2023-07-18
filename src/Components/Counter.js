import React, { useState } from 'react';

function Counter() {
  const [age, setAge] = useState(true);
  

  const incrementHandler = () => {
    setAge(!age);
    
  };

  return (
    <div>
      <h1>{age ? "ON" : "OFF"}</h1>
      <button onClick={incrementHandler}>Toggle Age</button>
    </div>
  );
}

export default Counter;
