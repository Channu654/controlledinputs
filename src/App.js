import React from 'react';
import ErrorExample from './tutorial/1-useState/setup/1-error-example';
import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
import UseStateObject from './tutorial/1-useState/setup/4-useState-object';
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter';
import ControlledInputs from './tutorial/4-forms/setup/1-controlled-inputs';
function App() {
  return (
    <div className='container'>
      {/* <ErrorExample /> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject /> */}
      {/* <UseStateCounter /> */}
      <ControlledInputs />
    </div>
  );
}

export default App;
