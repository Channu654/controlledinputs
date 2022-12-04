import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'channa',
    age: 26,
    message: 'hey man',
  });

  const handlemessage = () => {
    setPerson({ ...person, message: 'hello bro' });
  };
  console.log(person);
  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>

      <button onClick={handlemessage}>changemessage</button>
    </div>
  );
};

export default UseStateObject;
