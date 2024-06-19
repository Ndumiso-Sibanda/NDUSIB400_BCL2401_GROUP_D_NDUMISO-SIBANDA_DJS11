import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
   
  }, [showId]);

  return (
    <div>
      <h2>Show Detail</h2>
      {show && (
        <div>
          <h3>{show.title}</h3>
          <p>{show.description}</p>
        
        </div>
      )}
    </div>
  );
};

export default ShowDetail;
