import React from 'react';
import { useState } from 'react';

const ErrorExample = () => {
  const [changetitle, setTitle] = useState('random title');

  const ChangeHandler = () => {
    if (changetitle === 'random title') {
      setTitle('hello');
    } else {
      setTitle('random title');
    }
  };
  return (
    <div>
      <h2>{changetitle}</h2>
      <button onClick={ChangeHandler}>ChnageTitle</button>
    </div>
  );
};

export default ErrorExample;
