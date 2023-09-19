// src/pages/Details.js

// src/pages/Details.js

import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Details.css';

const Details = () => {
  const { id } = useParams();
  const videoSrc = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="details-container">
      <iframe
        src={videoSrc}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
      <div className="details-info">
        <h1>Video Title</h1>
        <p>Video description here...</p>
      </div>
    </div>
  );
};

export default Details;






// import React from 'react';
// import '../styles/Details.css';  // Import the CSS

// const Details = () => {
//   return (
//     <div className="details-container">
//       <h1>Video Details</h1>
//       <p>This page will show detailed information about the selected video.</p>
//     </div>
//   );
// };

// export default Details;
