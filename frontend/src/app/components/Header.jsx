import React from 'react';
import './Header.css';
import { FaBus, FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <FaBus className="logo-icon" />
        <h1>Zenica Bus Tracking</h1>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="/home">Home</a>
        <a href="/routes">Routes</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Search and User Profile */}
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search routes..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="profile-icon">
          <FaUserCircle size={32} />
        </div>
      </div>
    </header>
  );
};

export default Header;

//css
/* Header.css */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #003366; /* Navy blue for a professional look */
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  margin-right: 10px;
  font-size: 28px;
  color: #f1c40f; /* Yellow accent color */
}

.logo h1 {
  font-size: 24px;
  font-weight: bold;
}

.nav-links a {
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 16px;
}

.nav-links a:hover {
  color: #f1c40f; /* Yellow hover effect */
}

.header-actions {
  display: flex;
  align-items: center;
}

.search-bar {
  position: relative;
}

.search-bar input {
  padding: 8px 40px 8px 15px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #555;
}

.profile-icon {
  margin-left: 20px;
  color: white;
  cursor: pointer;
}

.profile-icon:hover {
  color: #f1c40f; /* Yellow hover effect */
}
