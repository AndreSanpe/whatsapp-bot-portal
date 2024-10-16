import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login'; // Your login component
import Dashboard from './Dashboard'; // Main page after login
import TripHistory from './TripHistory'; // New page for trip history
import Profile from './Profile'; // New page for profile

function App() {
  const [user, setUser] = useState(null); // You already have the user state

  return (
    <Router>
      {user && (
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/trips">Trip History</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={() => setUser(null)}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login setUser={setUser} />} />
        <Route path="/trips" element={user ? <TripHistory /> : <Login setUser={setUser} />} />
        <Route path="/profile" element={user ? <Profile /> : <Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
