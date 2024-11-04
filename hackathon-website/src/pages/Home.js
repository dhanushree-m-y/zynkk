import React, { useState } from 'react';
import './Home.css'; // Import styles for the Home page

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="home">
      <h1>Welcome to Astrix Hackathons</h1>
      <p>Your one-stop platform for all Hackathon and Event updates.</p>
      
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">SUBMIT</button>
        </form>
        <div className="register-forget">
          <a href="/register">REGISTER</a>
          <a href="/forgot-password">FORGOT PASSWORD</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
