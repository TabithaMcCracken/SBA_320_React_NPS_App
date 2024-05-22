// src/components/ParkList.js
import React from 'react';

const ParkList = ({ parks }) => (
  <ul>
    {parks.map((park) => (
      <li key={park.parkCode}>
        <h2>{park.fullName}</h2>
        <p>{park.designation}</p>
        <a href={park.url} target="_blank" rel="noopener noreferrer">Visit Park Website</a>
      </li>
    ))}
  </ul>
);

export default ParkList;
