// src/pages/TeacherDashboard.js
import React from 'react';
import '../styles/TeacherDashboard.css';

const TeacherDashboard = () => {
  const coursesTaught = [
    { id: 1, name: "Mathematics 101", studentsEnrolled: 30 },
    { id: 2, name: "Physics 202", studentsEnrolled: 25 },
    { id: 3, name: "Chemistry 303", studentsEnrolled: 18 },
    { id: 4, name: "Biology 404", studentsEnrolled: 20 },
    { id: 5, name: "Statistics 301", studentsEnrolled: 15 },
    { id: 6, name: "Philosophy 101", studentsEnrolled: 28 },
    { id: 7, name: "Economics 201", studentsEnrolled: 22 },
    { id: 8, name: "Literature 202", studentsEnrolled: 19 },
    { id: 9, name: "History 101", studentsEnrolled: 25 },
    { id: 10, name: "Computer Science 201", studentsEnrolled: 27 }
  ];

  return (
    <div className="dashboard teacher-dashboard">
      <h2>Teacher Dashboard</h2>
      <div className="dashboard-container">
        {coursesTaught.map((course) => (
          <div className="dashboard-card" key={course.id}>
            <div className="card-title">{course.name}</div>
            <div className="card-details">
              Students Enrolled: {course.studentsEnrolled}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
