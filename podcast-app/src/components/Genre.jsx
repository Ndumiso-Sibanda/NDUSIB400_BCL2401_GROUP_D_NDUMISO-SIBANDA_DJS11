import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGenre } from '../../services/api';
import { Link } from 'react-router-dom';

const Genre = () => {
  const { genreId } = useParams();
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreData = await fetchGenre(genreId);
        setGenre(genreData);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching genre with ID ${genreId}:`, error);
        setLoading(false);
      }
    };

    fetchData();
  }, [genreId]);

  const addToFavorites = (id) => {
    const podcastToAdd = genre.shows.find(show => show.id === id);
    if (podcastToAdd) {
      setFavorites([...favorites, podcastToAdd]);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!genre) {
    return <div>Genre not found</div>;
  }

  return (
    <div>
      <h1>{genre.name} Podcasts</h1>
      <ul>
        {genre.shows.map(show => (
          <li key={show.id}>
            <Link to={`/show/${show.id}`}>
              {show.title}
            </Link>
            <button onClick={() => addToFavorites(show.id)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
