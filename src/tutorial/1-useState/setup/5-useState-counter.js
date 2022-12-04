import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const [isError, setIsError] = useState(false);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>delete</button>

      <h2>Channa</h2>
      <button onClick={() => setIsError(!isError)}>Toggleerror</button>
      {isError ? <p>The error is true</p> : <p>Error is false</p>}
    </div>
  );
};

export default UseStateCounter;
