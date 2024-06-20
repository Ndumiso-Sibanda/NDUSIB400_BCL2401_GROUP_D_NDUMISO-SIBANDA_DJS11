import React from "react";

const PodcastList = ({ podcasts }) => {
    const handlePlay = (audioUrl) => {
      const audio = new Audio(audioUrl);
      audio.play();
    };
  
    return (
      <section className="podcast" id="podcast">
        <ul className="podcast-list">
          {podcasts.map((podcast) => (
            <li key={podcast.id}>
              <div className="podcast-card" onClick={() => handlePlay(podcast.audioUrl)}>
                <figure className="card-banner">
                  <img src={podcast.imageUrl} alt={podcast.title} />
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