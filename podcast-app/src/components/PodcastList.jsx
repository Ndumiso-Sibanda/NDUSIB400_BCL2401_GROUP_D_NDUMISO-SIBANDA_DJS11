
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PodcastCard from './PodcastCard';
import { GENRE_URL, ID_URL, BASE_URL } from '../API';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        // Making multiple requests using Promise.all
        const responses = await Promise.all([
          axios.get(GENRE_URL),
          axios.get(ID_URL),
          axios.get(BASE_URL)
        ]);

        // Combine the data from the responses
        const combinedData = responses.map(response => response.data).flat();
        setPodcasts(combinedData);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <section className="podcast" id="podcast">
      <ul className="podcast-list">
        {podcasts.map(podcast => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </ul>
    </section>
  );
};

export default PodcastList;
