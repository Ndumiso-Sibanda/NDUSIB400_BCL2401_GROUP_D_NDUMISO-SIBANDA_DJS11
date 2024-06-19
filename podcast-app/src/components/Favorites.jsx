import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
 
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>{favorite.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
