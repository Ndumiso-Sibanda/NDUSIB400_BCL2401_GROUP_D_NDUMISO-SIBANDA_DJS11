import React from 'react';

const ShowList = ({ shows }) => {
  return (
    <ul>
      {shows.map(show => (
        <li key={show.id}>{show.title}</li>
      ))}
    </ul>
  );
};

export default ShowList;
