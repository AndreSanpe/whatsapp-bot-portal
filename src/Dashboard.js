import React from 'react';

function Dashboard() {
  const startTrip = () => {
    // Logic to start a trip
  };

  const endTrip = () => {
    // Logic to end a trip
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <button onClick={startTrip}>Start Trip</button>
      <button onClick={endTrip}>End Trip</button>
      <div className="current-trip-info">
        {/* Show current trip details here */}
        <h3>Your Current Trip:</h3>
        <p>Location: [location]</p>
        <p>Status: [status]</p>
      </div>
    </div>
  );
}

export default Dashboard;
