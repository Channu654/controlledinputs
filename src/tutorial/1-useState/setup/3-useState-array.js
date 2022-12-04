import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleDelete = (id) => {
    let newData = people.filter((item) => item.id !== id);
    setPeople(newData);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        {console.log("id");}
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => handleDelete(id)}>delete</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>ClearAll</button>
      <button onClick={() => setPeople(data)}>seeAll</button>
    </div>
  );
};

export default UseStateArray;
