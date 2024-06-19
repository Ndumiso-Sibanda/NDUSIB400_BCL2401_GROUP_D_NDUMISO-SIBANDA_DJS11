import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SeasonDetail = () => {
  const { showId, seasonId } = useParams();
  const [season, setSeason] = useState(null);

  useEffect(() => {
  
  }, [showId, seasonId]);

  return (
    <div>
      <h2>Season Detail</h2>
      {season && (
        <div>
          <h3>{season.title}</h3>
          {/* Display episode list or other season details */}
        </div>
      )}
    </div>
  );
};

export default SeasonDetail;
