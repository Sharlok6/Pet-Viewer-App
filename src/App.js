// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import PetList from './container/petList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petlist/:petType" element={<PetList />} />
      </Routes>
    </Router>
  );
};

export default App;
