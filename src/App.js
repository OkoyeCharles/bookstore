import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Home from './components/Home';
import Nav from './components/Nav';
import './styles/App.css';

function App() {
  return (
    <Router>
      {/* Navigation */}
      <Nav />
      <Routes>
        {/* Books Page */}
        <Route path="/" element={<Home />} />
        {/* Categories Page */}
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
