import React, { useState } from 'react';
import CourseTypeManager from './CourseTypeManager';
import CourseManager from './CourseManager';
import OfferingManager from './OfferingManager';
import RegistrationManager from './RegistrationManager';
import './styles.css';

export default function App() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  return (
    <div className="container">
      <h1>Student Registration System</h1>
      <CourseTypeManager data={courseTypes} setData={setCourseTypes} />
      <CourseManager data={courses} setData={setCourses} />
      <OfferingManager
        courseTypes={courseTypes}
        courses={courses}
        offerings={offerings}
        setOfferings={setOfferings}
      />
      <RegistrationManager
        courseTypes={courseTypes}
        courses={courses}
        offerings={offerings}
        registrations={registrations}
        setRegistrations={setRegistrations}
      />
    </div>
  );
}
