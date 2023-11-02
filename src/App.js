import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About'
import Home from './Components/Home/Home';
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
