import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './Categories';
import Home from './Home';
import Nav from './Nav';
import '../styles/App.css';

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
