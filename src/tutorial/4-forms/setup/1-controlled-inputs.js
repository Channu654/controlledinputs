import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = { ...formData, id: new Date().getTime().toString() };

    setSubmittedData([...submittedData, newArray]);
  };
  console.log(formData);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=''>Name:</label>
          <input
            type='text'
            name='Name'
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor=''>Email:</label>
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button>AddPersons</button>
      </form>
    </div>
  );
};

export default ControlledInputs;
