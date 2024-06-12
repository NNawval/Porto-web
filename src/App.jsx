import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import '/src/index.css';
function App() {


  return (
    <Router>

      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
