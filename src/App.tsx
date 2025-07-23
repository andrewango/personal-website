// App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';
import ProjectsAndExperience from './components/ProjectsAndExperience';

function App() {
  return (
    <div className="min-h-screen text-white font-modern relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <ProjectsAndExperience />
    </div>
  );
}

export default App;