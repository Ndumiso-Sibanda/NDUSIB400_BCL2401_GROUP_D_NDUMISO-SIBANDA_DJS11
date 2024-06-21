import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app');
        const data = await response.json();
        const sortedPodcasts = data.sort((a, b) => a.title.localeCompare(b.title));
        setPodcasts(sortedPodcasts);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    };

    fetchPreview();
  }, []);

  return (
    <section className="podcast" id="podcast">
      <ul className="podcast-list">
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <Link to={`/show/${podcast.id}`}>
              <figure className="card-banner">
                <img src={podcast.image} alt={podcast.title} />

                <div className="card-banner-icon">
                <ion-icon name="play"></ion-icon>

               </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time dateTime={podcast.date}>{podcast.date}</time>

                  <p className="pod-epi">Details: {podcast.details}</p>
                </div>

                <h3 className="h3 card-title">{podcast.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PodcastList;
