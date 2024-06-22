import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Genre = () => {
  const { genreId } = useParams();
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/genres/${genreId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch genre with ID ${genreId}`);
        }
        const data = await response.json();
        setGenre(data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching genre with ID ${genreId}:`, error);
        setLoading(false);
      }
    };

    fetchGenre();
  }, [genreId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!genre) {
    return <div>Genre not found</div>;
  }

  return (
    <div className="genre">
      <h1>{genre.name} Podcasts</h1>
      <ul>
        {genre.shows.map(show => (
          <li key={show.id}>
            <a href={`/show/${show.id}`}>{show.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
