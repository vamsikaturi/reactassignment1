import React, { useState } from 'react';

export default function CourseManager({ data, setData }) {
  const [name, setName] = useState('');
  const add = () => {
    if (!name.trim()) return alert('Course name required');
    setData([...data, { id: Date.now(), name }]);
    setName('');
  };
  const update = (id, newName) => {
    if (!newName.trim()) return;
    setData(data.map(c => c.id === id ? { ...c, name: newName } : c));
  };
  const del = id => setData(data.filter(c => c.id !== id));

  return (
    <div className="card">
      <h2>Courses</h2>
      <input placeholder="New course" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {data.map(c => (
          <li key={c.id}>
            <input value={c.name} onChange={e => update(c.id, e.target.value)} />
            <button onClick={() => del(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
