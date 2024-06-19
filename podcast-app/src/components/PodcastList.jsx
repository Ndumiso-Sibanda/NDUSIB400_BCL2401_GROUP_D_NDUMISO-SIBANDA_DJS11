import React, { useState, useEffect } from 'react';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app`); 
        const data = await response.json();
        setPodcasts(data);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <section className="podcast" id="podcast">
      <ul className="podcast-list">
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <div className="podcast-card">
              <figure className="card-banner">
                <img src={podcast.image} alt={podcast.title} />
                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>
              <div className="card-content">
                <div className="card-meta">
                  <time dateTime={podcast.date}>{podcast.date}</time>
                  <p className="pod-epi">Episodes: {podcast.episodes}</p>
                </div>
                <h3 className="h3 card-title">{podcast.title}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PodcastList;
