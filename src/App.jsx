import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import '/src/index.css';
import Jasakula from './component/Jasakula';
import Gofitz from './component/Gofitz'
function App() {


  return (
    <Router>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Jasakula" element={<Jasakula/>} />
      <Route path="/Gofitz" element={<Gofitz/>} />
      </Routes>
    </Router>
  );
}

export default App;
