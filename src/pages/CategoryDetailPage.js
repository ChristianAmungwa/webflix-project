// src/pages/CategoryDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetailPage = () => {
  const { categoryName } = useParams();
  
  // Sample image URLs, replace these with your actual images.
  const sampleImages = [
    "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-1-sep-4-sep-10-2023.jpeg?alt=media&token=c1fc7198-1787-4490-a74c-db0a50f459ae",
    "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-2-sep-4-sep-10-2023.jpeg?alt=media&token=bca2555c-ec2f-419e-b6fc-33429ed4d5aa",
    "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-3-sep-4-sep-10-2023.jpeg?alt=media&token=e3b91f7b-662b-4031-972d-8a102d06da60",
    "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-4-sep-4-sep-10-2023.jpeg?alt=media&token=6e2614c2-4ce7-4d04-85be-5d7f0a99a048",
    "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-5-sep-4-sep-10-2023.jpeg?alt=media&token=6834b59d-258e-4393-bbf9-d0876ec7d321"
  ];
  
  return (
    <div>
      <h1>{decodeURIComponent(categoryName)}</h1>
      
      {/* Display the first image in fullscreen mode */}
      <img 
        src={sampleImages[0]} 
        alt={`Category ${decodeURIComponent(categoryName)} featured sample`} 
        style={{ width: '100%', height: '100vh' }}
      />

      {/* Display a row of images */}
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {sampleImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Category ${decodeURIComponent(categoryName)} sample ${index + 1}`} 
            style={{ width: '300px', height: '200px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;


