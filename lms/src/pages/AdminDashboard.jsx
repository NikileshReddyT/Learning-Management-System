// src/pages/AdminDashboard.js
import React from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const statistics = [
    { id: 1, title: "Total Students", count: 300 },
    { id: 2, title: "Total Courses", count: 20 },
    { id: 3, title: "Active Teachers", count: 15 },
    { id: 4, title: "Pending Applications", count: 10 },
    { id: 5, title: "Assignments Submitted", count: 1200 },
    { id: 6, title: "Courses Completed", count: 250 },
    { id: 7, title: "Enrolled Students This Semester", count: 180 },
    { id: 8, title: "Departments", count: 6 },
    { id: 9, title: "Certificates Issued", count: 100 },
    { id: 10, title: "Upcoming Events", count: 5 }
  ];

  return (
    <div className="dashboard admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-container">
        {statistics.map((stat) => (
          <div className="dashboard-card" key={stat.id}>
            <div className="card-title">{stat.title}</div>
            <div className="card-details">
              <span className="card-footer">{stat.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
