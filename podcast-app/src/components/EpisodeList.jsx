import React from 'react';

const EpisodeList = ({ episodes }) => {
  return (
    <ul>
      {episodes.map(episode => (
        <li key={episode.id}>{episode.title}</li>
      ))}
    </ul>
  );
};

export default EpisodeList;