import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
