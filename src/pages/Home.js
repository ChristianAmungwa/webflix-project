// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';  // Import the CSS

const Home = () => {
  const imageCategories = [
    {
      category: "Trending Now",
      imageLinks: [
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-1-sep-4-sep-10-2023.jpeg?alt=media&token=c1fc7198-1787-4490-a74c-db0a50f459ae",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-2-sep-4-sep-10-2023.jpeg?alt=media&token=bca2555c-ec2f-419e-b6fc-33429ed4d5aa",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-3-sep-4-sep-10-2023.jpeg?alt=media&token=e3b91f7b-662b-4031-972d-8a102d06da60",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-4-sep-4-sep-10-2023.jpeg?alt=media&token=6e2614c2-4ce7-4d04-85be-5d7f0a99a048",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-canada-5-sep-4-sep-10-2023.jpeg?alt=media&token=6834b59d-258e-4393-bbf9-d0876ec7d321"

      ],
    },
    {
      category: "Most Watched",
      imageLinks: [
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-english-1-sep-4-sep-10-2023.jpeg?alt=media&token=0744309a-c18c-48ef-b6e3-f3f4b13cff0c",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-english-2-sep-4-sep-10-2023.jpeg?alt=media&token=3c64810b-d009-4138-accd-6270c20e7f4f",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-english-3-sep-4-sep-10-2023.jpeg?alt=media&token=a4637ba1-2b39-4f6e-a2dc-9db9eed5a762",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-english-4-sep-4-sep-10-2023.jpeg?alt=media&token=7a3fcb3a-5ec6-4823-91d9-37de42b5a3a9",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-english-5-sep-4-sep-10-2023.jpeg?alt=media&token=41fc556a-ba1d-4561-b256-d6eeb4da5466"
        
      ],
    },
    {
      category: "Top Picks",
      imageLinks: [
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-kingdom-1-sep-4-sep-10-2023.jpeg?alt=media&token=bafe27fd-925e-4b17-b394-d9b2bfa1143b",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-kingdom-2-sep-4-sep-10-2023.jpeg?alt=media&token=9fb4731a-a567-4494-89f8-7bb1e9b9b904",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-kingdom-3-sep-4-sep-10-2023.jpeg?alt=media&token=0d82e227-9ac0-4bef-be16-33d9173c02b6",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-kingdom-4-sep-4-sep-10-2023.jpeg?alt=media&token=b5763e54-a062-48fd-b956-8d50a956f9eb",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-kingdom-5-sep-4-sep-10-2023.jpeg?alt=media&token=88170f75-cbed-4250-88f7-23913eb23f44"
        
      ],
    },
    {
      category: "My List",
      imageLinks: [
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-states-1-sep-4-sep-10-2023.jpeg?alt=media&token=b3f4aa83-e2f2-42dd-b340-ccf8a564134f",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-states-2-sep-4-sep-10-2023.jpeg?alt=media&token=a8ae52db-112a-426e-b416-409777d1449b",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-states-3-sep-4-sep-10-2023.jpeg?alt=media&token=863ad56d-329b-4ec8-b6c2-b23c2849a1e2",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-states-4-sep-4-sep-10-2023.jpeg?alt=media&token=26ee55c7-855b-4ca2-839f-94de90d29e98",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-united-states-5-sep-4-sep-10-2023.jpeg?alt=media&token=4e985916-4cbd-4fc1-8adb-44d6ffdaba8f"
        
      ],
    },
    {
      category: "New Releases",
      imageLinks: [
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-denmark-1-sep-4-sep-10-2023.jpeg?alt=media&token=63baffe9-0b8e-40f5-a9a7-8003440aaef4",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-denmark-2-sep-4-sep-10-2023.jpeg?alt=media&token=5d3f6674-7fba-4407-8c0d-e4baad9a9ff4",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-denmark-3-sep-4-sep-10-2023.jpeg?alt=media&token=746acce3-43ab-4ad9-891d-2852685e2760",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-denmark-4-sep-4-sep-10-2023.jpeg?alt=media&token=c0ec2eaa-7a15-473f-9d2f-5006e50e53ad",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-denmark-5-sep-4-sep-10-2023.jpeg?alt=media&token=dfc77026-b9ca-4b63-b65d-b61df4692959"
        
      ],
    },
    {
      category: "Critically Acclaimed",
      imageLinks: [
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-new-zealand-1-sep-4-sep-10-2023.jpeg?alt=media&token=542878b6-083b-431f-88bb-b8a7a8ff2553",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-new-zealand-2-sep-4-sep-10-2023.jpeg?alt=media&token=28ba3164-e882-43ae-954f-8dd218415b1f",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-new-zealand-3-sep-4-sep-10-2023.jpeg?alt=media&token=e0b52edc-7801-4815-8a6e-68c3f91f93df",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-new-zealand-4-sep-4-sep-10-2023.jpeg?alt=media&token=f294383a-ebe5-4ee5-ac08-b10f29b6e400",
        "https://firebasestorage.googleapis.com/v0/b/webflix-379ad.appspot.com/o/top10-films-new-zealand-5-sep-4-sep-10-2023.jpeg?alt=media&token=98c7564f-b10a-4e7d-a9ed-aef63d47edae"
        
      ],
    },
    // ... add more categories
  ];

  return (
    <div className="home-container">
      {imageCategories.map((category, index) => (
        <div key={index} className="image-category">
          <h2>{category.category}</h2>
          <div className="image-row">
            {category.imageLinks.map((link, idx) => (
              <div key={idx} className="image-card">
                <img src={link} alt={`${category.category}-${idx}`} width={220} height={125} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;











// import React from 'react';
// import ReactPlayer from 'react-player';
// import '../styles/Home.css';  // Import the CSS

// const Home = () => {
//   const videoCategories = [
//     {
//       category: "Trending",
//       videoLinks: [
//         "https://www.youtube.com/embed/dQw4w9WgXcQ",
//         "https://www.youtube.com/embed/dQw4w9WgXcQ",
//         "https://www.youtube.com/embed/dQw4w9WgXcQ",
//         "https://www.youtube.com/embed/dQw4w9WgXcQ",
//         "https://www.youtube.com/embed/dQw4w9WgXcQ" // 5 videos
//       ],
//     },
//     {
//       category: "Most Watched",
//       videoLinks: [
//         "https://www.youtube.com/embed/3tmd-ClpJxA",
//         "https://www.youtube.com/embed/3tmd-ClpJxA",
//         "https://www.youtube.com/embed/3tmd-ClpJxA",
//         "https://www.youtube.com/embed/3tmd-ClpJxA",
//         "https://www.youtube.com/embed/3tmd-ClpJxA"
//         // Add 5 video URLs here
//       ],
//     },
//     {
//       category: "Sports",
//       videoLinks: [
//         "https://youtu.be/Hu146YAYAgo?si=Z71UvlVztvb9SSpO",
//         "https://youtu.be/Hu146YAYAgo?si=Z71UvlVztvb9SSpO",
//         "https://youtu.be/Hu146YAYAgo?si=Z71UvlVztvb9SSpO",
//         "https://youtu.be/Hu146YAYAgo?si=Z71UvlVztvb9SSpO",
//         "https://youtu.be/Hu146YAYAgo?si=Z71UvlVztvb9SSpO",
//         // Add 5 video URLs here
//       ],
//     },
//     {
//       category: "Food",
//       videoLinks: [
//         "https://youtu.be/QXZrhLj6EYU?si=k5FraX4Q9_N6nFbb",
//         "https://youtu.be/QXZrhLj6EYU?si=k5FraX4Q9_N6nFbb",
//         "https://youtu.be/QXZrhLj6EYU?si=k5FraX4Q9_N6nFbb",
//         "https://youtu.be/QXZrhLj6EYU?si=k5FraX4Q9_N6nFbb",
//         "https://youtu.be/QXZrhLj6EYU?si=k5FraX4Q9_N6nFbb",
//         // Add 5 video URLs here
//       ],
//     },
//     {
//       category: "Business",
//       videoLinks: [
//         "https://youtu.be/p7HKvqRI_Bo?si=sYzMTes7YHQZa9Oh",
//         "https://youtu.be/p7HKvqRI_Bo?si=sYzMTes7YHQZa9Oh",
//         "https://youtu.be/p7HKvqRI_Bo?si=sYzMTes7YHQZa9Oh",
//         "https://youtu.be/p7HKvqRI_Bo?si=sYzMTes7YHQZa9Oh",
//         "https://youtu.be/p7HKvqRI_Bo?si=sYzMTes7YHQZa9Oh",

//         // Add 5 video URLs here
//       ],
//     },
//     // ... add more categories
//   ];

//   return (
//     <div className="home-container">
//       {/* <h1>Welcome to Webflix</h1> */}
//       {videoCategories.map((category, index) => (
//         <div key={index} className="video-category">
//           <h2>{category.category}</h2>
//           <div className="video-row">
//             {category.videoLinks.map((link, idx) => (
//               <div key={idx} className="video-card">
//                 <ReactPlayer url={link} width={220} height={125} />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;







// src/pages/Home.js

// import React from 'react';
// import VideoCard from '../components/VideoCard'; // Import VideoCard component
// import '../styles/Home.css';

// const videoIds = ['A3PDXmYoF5U', 'LeiFF0gvqcc', 'QGJuMBdaqIw']; // Sample YouTube video IDs

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h1>Home</h1>
//       <div className="video-list">
//         {videoIds.map((videoId, index) => (
//           <VideoCard key={index} videoId={videoId} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;






// // src/pages/Home.js

// import React from 'react';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Webflix</h1>
//       {/* Here we'll place our categories and video lists */}
//     </div>
//   );
// };

// export default Home;







// // src/pages/Home.js
// import React from 'react';

// const Home = () => {
//   return <div>Home Page</div>;
// };

// export default Home;
