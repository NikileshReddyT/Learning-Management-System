// src/pages/Signup.js
import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder for signup logic
    alert('Signup successful!');
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
