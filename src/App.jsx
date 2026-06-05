import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white relative min-h-screen">
      <SpaceBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;