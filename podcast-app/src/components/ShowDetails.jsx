import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';

const ShowDetail = () => {
  const [showDetails, setShowDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch show data for id ${id}`);
        }
        const data = await response.json();
        setShowDetails(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (loading) {
    return <div>Fetching podcast details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="details">
      {showDetails && (
        <>
          <div className="podcast-info">
            <img src={showDetails.image} alt={showDetails.title} />
            <h2>{showDetails.title}</h2>
            <p>{showDetails.description}</p>
            <p>Seasons: {showDetails.seasons.length}</p>
            <p>Genre: {showDetails.genres.join(', ')}</p>
            <p>Last Updated: {showDetails.updated}</p>
          </div>
          <div className="seasons">
            {showDetails.seasons.map((season, index) => (
              <div key={index} className="season">
                <h3>Season {season.number}</h3>

                <ul>
                  {season.episodes.map((episode) => (
                    <li key={episode.id} className="episode">
                      <h4>{episode.title}</h4>
                      <p>{episode.description}</p>
                      <AudioPlayer
                        audioUrl={episode.audio}
                        title={episode.title}
                        thumbnail={showDetails.image}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowDetail;
