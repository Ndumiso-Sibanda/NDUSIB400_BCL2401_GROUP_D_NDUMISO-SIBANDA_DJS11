import React, { useState, useEffect } from 'react';

const GenreList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/genre/${id}`);
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <section className="genres" id="genres">
      <ul className="genre-list">
        {genres.map((genre) => (
          <li key={genre.id}>
            <a href="" className="genre-card">
              
              <h3 className="h3 genre-title">{genre.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GenreList;
