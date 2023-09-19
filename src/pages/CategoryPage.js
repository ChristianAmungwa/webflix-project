// src/pages/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const CategoryPage = () => {
  const { categoryName } = useParams();
  // You can fetch videos based on categoryName from your API or filter from an array
  const sampleVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    // ... add more videos
  ];

  return (
    <div>
      <h1>{categoryName}</h1>
      <div className="video-column">
        {sampleVideos.map((link, idx) => (
          <div key={idx} className="video-card">
            <ReactPlayer url={link} width={210} height={125} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
