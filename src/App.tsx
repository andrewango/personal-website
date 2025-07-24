// App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen text-white font-modern relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience></Experience>
      <Projects />

      <footer className="py-6 text-center text-sm text-white/50">
        &copy; Andrew Ngo 2025
      </footer>
    </div>
  );
}

export default App;