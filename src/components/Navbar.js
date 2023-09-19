// src/components/Navbar.js
// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        <div className="navbar-logo">
          <Link to="/">
            <b>Webflix</b>
          </Link>
        </div>
        <div className="navbar-categories">
          <span>Trending Now</span> 
          <span>Most Watched</span>
          <span>Top Picks</span>
          <span>My List</span>
          <span>New Releases</span>
          <span>Critically Acclaimed</span>

          
          {/* <Link to={`/category/${encodeURIComponent('Trending Now')}/detail`}>Trending Now</Link>
          <Link to={`/category/${encodeURIComponent('Most Watched')}/detail`}>Most Watched</Link>
          <Link to={`/category/${encodeURIComponent('Top Picks')}/detail`}>Top Picks</Link>
          <Link to={`/category/${encodeURIComponent('My List')}/detail`}>My List</Link>
          <Link to={`/category/${encodeURIComponent('New Releases')}/detail`}>New Releases</Link>
          <Link to={`/category/${encodeURIComponent('Critically Acclaimed')}/detail`}>Critically Acclaimed</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;










// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import '../styles/Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-section">
//         <div className="navbar-logo">
//         <Link to="/">
//           <b>Webflix</b>
//           </Link>
//         </div>
//         <div className="navbar-categories">
//           <Link to="/category/Trending Now">Trending Now</Link> {/* Changed to Link */}
//           <Link to="/category/Most Watched">Most Watched</Link> {/* Changed to Link */}
//           <Link to="/category/Top Picks">Top Picks</Link> {/* Changed to Link */}
//           <Link to="/category/My List">My List</Link> {/* Changed to Link */}
//           <Link to="/category/New Releases">New Releases</Link> {/* Changed to Link */}
//           <Link to="/category/Critically Acclaimed">Critically Acclaimed</Link> {/* Changed to Link */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






// import React from 'react';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-section">
//         <div className="navbar-logo">
//           <b>Webflix</b>
//         </div>
//         <div className="navbar-categories">
//           <span>Trending</span>
//           <span>Most Watched</span>
//           <span>Sports</span>
//           <span>Food</span>
//           <span>Business</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





// import React from 'react';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         Webflix
//       </div>
//       <div className="navbar-categories">
//         <span>Trending</span>
//         <span>Most Watched</span>
//         <span>Sports</span>
//         <span>Food</span>
//         <span>Business</span>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link to="/" className="navbar-brand">Webflix</Link>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/profile" className="nav-link">Profile</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/profile">Profile</Link>
//       {/* <Link to="/details">Details</Link> */}
//     </div>
//   );
// };

// export default Navbar;
