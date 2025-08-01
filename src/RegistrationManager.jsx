import React, { useState } from 'react';

export default function RegistrationManager({ courseTypes, courses, offerings, registrations, setRegistrations }) {
  const [selType, setSelType] = useState('');
  const [selOffering, setSelOffering] = useState('');
  const [student, setStudent] = useState('');

  const filtered = offerings.filter(o => !selType || o.courseTypeId === +selType);

  const register = () => {
    if (!selOffering || !student.trim()) return alert('Select offering & enter student name');
    setRegistrations([...registrations, { id: Date.now(), offeringId: +selOffering, studentName: student }]);
    setStudent(''); setSelOffering('');
  };

  return (
    <div className="card">
      <h2>Student Registration</h2>
      <select value={selType} onChange={e => setSelType(e.target.value)}>
        <option value="">Filter by Course Type</option>
        {courseTypes.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
      </select>
      <select value={selOffering} onChange={e => setSelOffering(e.target.value)}>
        <option value="">Select Offering</option>
        {filtered.map(o => {
          const t = courseTypes.find(ct => ct.id === o.courseTypeId)?.name;
          const csName = courses.find(cs => cs.id === o.courseId)?.name;
          return <option key={o.id} value={o.id}>{t} – {csName}</option>;
        })}
      </select>
      <input placeholder="Student Name" value={student} onChange={e => setStudent(e.target.value)} />
      <button onClick={register}>Register</button>

      <ul>
        {registrations.map(r => {
          const off = offerings.find(o => o.id === r.offeringId);
          const t = courseTypes.find(ct => ct.id === off.courseTypeId)?.name;
          const csName = courses.find(cs => cs.id === off.courseId)?.name;
          return <li key={r.id}>{r.studentName} → {t} – {csName}</li>;
        })}
      </ul>
    </div>
  );
}
