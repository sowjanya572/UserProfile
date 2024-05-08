import React, { useState } from 'react';
import './Login.css'; // Import CSS file

const Login = () => {
    // const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to authenticate the user with the entered username and password
    // console.log('Username:', username);
    // console.log('Password:', password);
    // // Reset the form after submission
    // setUsername('');
    // setPassword('');
    window.open('/profile')
  };

const handleGoogleLogin =()=>{
    console.log("google")
}

const handleRegister=()=>{
  window.open('/register')
}
  return (
    <div className="login-container"> {/* Apply a class for styling */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button className="google-login" onClick={handleGoogleLogin}>
        Login with Google
      </button>
      <br />
      <button className="new-user" onClick={handleRegister}>
        New User Register
      </button>
    </div>
  );
};

export default Login;
