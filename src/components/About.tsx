import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function About() {
    const scrollToExperience = () => {
    const expSection = document.getElementById('experience');
    if (expSection) {
      window.scrollTo({
        top: expSection.offsetTop - 72,
        behavior: 'smooth',
      });
    }
  };

    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.5 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

  return (
    <section id='about' ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
      <h2 className="section-title mb-4">Howdy!</h2>
      <div
        className={`h-0.5 bg-cyan-400 mb-12 transition-all duration-1000 ease-out origin-center ${
          visible ? 'w-64 scale-x-100' : 'w-0 scale-x-0'
        }`}
      />

      <p className="section-subtitle max-w-5xl">
        I’m an AI/ML engineer with a passion for anything data science, machine learning, or mathematics-related, particularly spectral graph theory and representation theory. 
        <br></br>
        <br></br>
        I graduated Cum Laude with dual bachelor's degrees in Applied Mathematics and Computer Science from the University of Delaware. 
        <br></br>
        <br></br>
        When I'm not coding or studying, I love lifting heavy weights, playing hockey, swimming, producing music, learning Ukrainian, and exploring nature.
      </p>
        <button onClick={scrollToExperience} className="mt-10 text-white text-3xl hover:text-gray-400 transition-transform hover:scale-110">
        <FaChevronDown />
        </button>
    </section>
  );
}
