import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GameCharacter from './components/GameCharacter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <GameCharacter />
    </div>
  );
}

export default App;