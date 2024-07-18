import React from 'react';
import { useFavorites } from './FavoriteContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <div>No favorites yet!</div>;
  }

  return (
    <div className="favorites">
      <h2>Your Favorite Podcasts</h2>
      <div className="favorites-list">
        {favorites.map(podcast => (
          <div key={podcast.id} className="favorite-item">
            <Link to={`/show/${podcast.id}`}>
              <img src={podcast.image} alt={podcast.title} />
              <h3>{podcast.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
