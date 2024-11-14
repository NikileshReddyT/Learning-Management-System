// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check credentials (mock login)
    if (username && password) {
      setIsLoggedIn(true);
      if (role === 'student') navigate('/student');
      else if (role === 'teacher') navigate('/teacher');
      else if (role === 'admin') navigate('/admin');
    } else {
      alert("Please enter a valid username and password");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
