// App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Hobbies from './components/Hobbies';

function App() {

  return (
    <div className="min-h-screen text-white font-modern relative overflow-x-hidden">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience></Experience>
      <Publications />
      <Hobbies />

      <footer className="py-8 text-center text-sm text-white/55">
        &copy; Andrew Ngo 2026
      </footer>
    </div>
  );
}

export default App;
