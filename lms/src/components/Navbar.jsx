// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">LMS</Link>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
          {!isLoggedIn && <li><Link to="/signup">Signup</Link></li>}
          {isLoggedIn && (
            <li>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
