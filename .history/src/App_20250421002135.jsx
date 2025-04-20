import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NameBanner from './components/NameBanner';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NameBanner />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
