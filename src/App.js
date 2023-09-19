// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import CategoryPage from './pages/CategoryPage'; // Import new CategoryPage
import CategoryDetailPage from './pages/CategoryDetailPage';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} /> New Route
          <Route path="/category/:categoryName" exact element={<CategoryPage/>} />
          <Route path="/category/:categoryName/detail" element={<CategoryDetailPage/>} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;









// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Header from './components/Header'; // Import Header
// import Footer from './components/Footer'; // Import Footer
// import Home from './pages/Home';
// import Details from './pages/Details';
// import Profile from './pages/Profile';
// import Navbar from './components/Navbar';
// import store from './store';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//       <Navbar />
//         {/* <Header />  Include Header */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/details/:id" element={<Details />} />
//           <Route path="/profile" element={<Profile />} />
//           {/* Add more routes here as needed */}
//         </Routes>
//         <Footer />  {/* Include Footer */}
//       </Router>
//     </Provider>
//   );
// }

// export default App;






// // src/App.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Details from './pages/Details';
// import Profile from './pages/Profile';
// import Navbar from './components/Navbar';
// import store from './store';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/details/:id" element={<Details />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;
