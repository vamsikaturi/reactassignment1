import React, { useState } from 'react';

export default function CourseTypeManager({ data, setData }) {
  const [name, setName] = useState('');
  const add = () => {
    if (!name.trim()) return alert('Type name required');
    setData([...data, { id: Date.now(), name }]);
    setName('');
  };
  const update = (id, newName) => {
    if (!newName.trim()) return;
    setData(data.map(t => t.id === id ? { ...t, name: newName } : t));
  };
  const del = id => setData(data.filter(t => t.id !== id));

  return (
    <div className="card">
      <h2>Course Types</h2>
      <input placeholder="New type" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {data.map(t => (
          <li key={t.id}>
            <input value={t.name} onChange={e => update(t.id, e.target.value)} />
            <button onClick={() => del(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
