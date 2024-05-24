import React from 'react';

const ParkList = ({ parks, addToFavorites }) => (
  <ul className="no-bullets">
    {parks.map((park) => (
      <li key={park.parkCode}>
        <div className="park-card">
          <h2>{park.fullName}</h2>
          <p>{park.designation}</p>
          <a href={park.url} target="_blank" rel="noopener noreferrer">Visit Park Website</a>
          <br />
          <br />
          <button onClick={() => addToFavorites(park)}>Add to Favorites</button>
        </div>
      </li>
    ))}
  </ul>
);

export default ParkList;
