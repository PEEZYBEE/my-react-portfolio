import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Skills from './components/Skills';
import Footer from './components/Footer';
import './style.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
    
      <Skills />
      <Footer />
    </>
  );
}

export default App;
