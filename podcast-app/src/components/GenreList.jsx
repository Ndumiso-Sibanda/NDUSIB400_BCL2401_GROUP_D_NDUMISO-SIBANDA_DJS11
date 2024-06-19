import React from 'react';

const GenreList = ({ genres }) => {
  return (
    <ul>
      {genres.map(genre => (
        <li key={genre.id}>{genre.title}</li>
      ))}
    </ul>
  );
};

export default GenreList;
