import React from 'react';
import Sidebar from './Sidebar';
import './UserProfilePage.css';

const UserProfilePage = () => {


    const handleCancelEdit = () => {
        
      };
    
      const handleUpdateProfile = () => {
        // Implement update profile logic here
      };
      
  return (
    <div className="profile-content">
      <h2>User Profile</h2>
      <form className="profile-form" readOnly>
        <div className="profile-image">
          <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="User" />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value="Admin" readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value="Admin" readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value="Admin@gmail.com" readOnly />
        </div>
        {/* Add more user details fields as needed */}
      </form>
      <div className="buttons">
         <button onClick={handleUpdateProfile}>Update</button>
         <button onClick={handleCancelEdit}>Cancel</button>
     </div>
    </div>
  );
};

export default UserProfilePage;
