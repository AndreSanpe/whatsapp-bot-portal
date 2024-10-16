import React from 'react';

function TripHistory() {
  const trips = [
    { id: 1, date: '2024-01-10', status: 'Completed' },
    { id: 2, date: '2024-01-12', status: 'Completed' },
  ];

  return (
    <div className="trip-history">
      <h2>Your Trip History</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            Trip {trip.id} - Date: {trip.date} - Status: {trip.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripHistory;
