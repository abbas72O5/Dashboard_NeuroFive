import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import UserPortal from './components/UserPortal';
import SellerDashboard from './components/SellerDashboard';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <h2>✨ E-Commerce</h2>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>User Portal</Link>
        <Link to="/seller" className={location.pathname === '/seller' ? 'active' : ''}>Seller Dashboard</Link>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<UserPortal />} />
          <Route path="/seller" element={<SellerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
