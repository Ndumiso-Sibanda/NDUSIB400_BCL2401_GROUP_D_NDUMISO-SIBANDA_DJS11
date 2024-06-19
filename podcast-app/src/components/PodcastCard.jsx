
import React from 'react';

const PodcastCard = ({ podcast }) => {
  return (
    <li className="podcast-card">
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
    </li>
  );
};

export default PodcastCard;
