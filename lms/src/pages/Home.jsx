// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Learning Management System (LMS)</h1>
      <p>
        Our LMS platform empowers students and faculty by providing an easy-to-use
        interface for managing courses, assignments, and progress tracking.
      </p>
      <div className="home-sections">
        <div className="home-section">
          <h2>For Students</h2>
          <p>Access your courses, complete assignments, and track your progress.</p>
        </div>
        <div className="home-section">
          <h2>For Faculty</h2>
          <p>Manage courses, create assignments, and monitor student achievements.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
