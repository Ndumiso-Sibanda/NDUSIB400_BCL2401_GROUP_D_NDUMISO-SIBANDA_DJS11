import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GenreList = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/genres');
        if (!response.ok) {
          throw new Error('Failed to fetch genres');
        }
        const data = await response.json();
        setGenres(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching genres:', error);
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="genre-list">
      <h1>Podcast Genres</h1>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>
            <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
