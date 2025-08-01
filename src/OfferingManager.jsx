import React, { useState } from 'react';

export default function OfferingManager({ courseTypes, courses, offerings, setOfferings }) {
  const [ct, setCt] = useState('');
  const [c, setC] = useState('');

  const add = () => {
    if (!ct || !c) return alert('Select both type & course');
    const exists = offerings.find(o => o.courseTypeId === +ct && o.courseId === +c);
    if (exists) return alert('Offering already exists');
    setOfferings([...offerings, { id: Date.now(), courseTypeId: +ct, courseId: +c }]);
    setCt(''); setC('');
  };

  const del = id => setOfferings(offerings.filter(o => o.id !== id));

  return (
    <div className="card">
      <h2>Course Offerings</h2>
      <select value={ct} onChange={e => setCt(e.target.value)}>
        <option value="">Select Type</option>
        {courseTypes.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
      </select>
      <select value={c} onChange={e => setC(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map(cs => <option key={cs.id} value={cs.id}>{cs.name}</option>)}
      </select>
      <button onClick={add}>Add</button>
      <ul>
        {offerings.map(o => {
          const t = courseTypes.find(ct => ct.id === o.courseTypeId)?.name;
          const csName = courses.find(cs => cs.id === o.courseId)?.name;
          return <li key={o.id}>{t} – {csName} <button onClick={() => del(o.id)}>Delete</button></li>;
        })}
      </ul>
    </div>
  );
}
