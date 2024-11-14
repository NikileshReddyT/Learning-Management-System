// src/pages/StudentDashboard.js
import React from 'react';
import '../styles/StudentDashboard.css';


const StudentDashboard = () => {
  const courses = [
    { id: 1, name: "Mathematics 101", credits: 3, instructor: "Prof. John Doe" },
    { id: 2, name: "Computer Science 201", credits: 4, instructor: "Dr. Jane Smith" },
    { id: 3, name: "Physics 202", credits: 4, instructor: "Dr. Emily White" },
    { id: 4, name: "Chemistry 303", credits: 3, instructor: "Dr. Frank Miller" },
    { id: 5, name: "Biology 404", credits: 4, instructor: "Dr. Amy Brown" },
    { id: 6, name: "History 101", credits: 3, instructor: "Prof. Sarah Lee" },
    { id: 7, name: "Economics 201", credits: 3, instructor: "Prof. Kevin Green" },
    { id: 8, name: "Literature 202", credits: 2, instructor: "Prof. Rebecca Hall" },
    { id: 9, name: "Statistics 301", credits: 3, instructor: "Dr. Daniel Gray" },
    { id: 10, name: "Philosophy 101", credits: 2, instructor: "Prof. Jason Bell" }
  ];

  return (
    <div className="dashboard student-dashboard">
      <h2>Student Dashboard</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-title">{course.name}</div>
            <div className="course-instructor">Instructor: {course.instructor}</div>
            <div className="course-details">
              <span className="course-credits">{course.credits} Credits</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
