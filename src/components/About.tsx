import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function About() {
    const scrollToExperience = () => {
    const projexpSection = document.getElementById('experience');
    if (projexpSection) {
      projexpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='about' className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
      <h2 className="section-title mb-4">Hey there!</h2>
      <div className="w-64 h-0.5 bg-cyan-400 mb-6" />

      <p className="section-subtitle max-w-3xl">
        I’m a software engineer with a passion for machine learning and mathematics, particularly graph theory and representation theory. 
        <br></br>
        <br></br>
        I graduated Cum Laude with a bachelor's degree in Applied Mathematics and Computer Science from the University of Delaware. 
        <br></br>
        <br></br>
        When I'm not coding, I love lifting heavy weights, playing hockey, swimming, producing music, learning Ukrainian, and exploring nature.
      </p>
        <button onClick={scrollToExperience} className="mt-10 text-white text-3xl hover:text-gray-400 transition-transform hover:scale-110">
        <FaChevronDown />
        </button>
    </section>
  );
}
