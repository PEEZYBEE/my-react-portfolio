import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Skills from './components/Skills';

import Footer from './components/Footer';
import './style.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </>
  );
}

export default App;
