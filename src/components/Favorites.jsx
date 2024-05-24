import React from 'react';

const Favorites = ({ favorites, removeFromFavorites }) => (
    <div>
        <div className="park-card-container"> 
    {favorites.length > 0 ? (
      <ul className="no-bullets">
        {favorites.map((park) => (
          <li key={park.parkCode}>
            <div className="park-card">
            <h2>{park.fullName}</h2>
            <p>{park.designation}</p>
            <a href={park.url} target="_blank" rel="noopener noreferrer">Visit Park Website</a>
            <br />
            <br />
            <button className="button-class" onClick={() => removeFromFavorites(park.parkCode)}>Remove from Favorites</button>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p>No favorites added yet. Go back and add some parks to your favorites!</p>
    )}
    </div>
  </div>
);

export default Favorites;
