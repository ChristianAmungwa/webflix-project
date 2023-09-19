// src/components/VideoCard.js

import React from 'react';
import '../styles/VideoCard.css'; // Import the CSS

const VideoCard = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-card">
      <iframe
        src={videoSrc}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </div>
  );
};

export default VideoCard;
