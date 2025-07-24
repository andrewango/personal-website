import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import '../index.css';
import profilePic from '../images/profilePic.jpeg';
import NowPlaying from './NowPlaying';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen relative flex flex-col justify-center items-center text-center text-white font-modern overflow-hidden">
      <div className="z-10 flex flex-col items-center">
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={profilePic}
            alt="Andrew Ngo"
            className="w-40 h-40 object-cover border-2 border-white shadow-lg"
          />
          <div className="text-left">
            <p className="section-subtitle mb-2 animate-fade-in-up transition-opacity duration-1000 ease-out">
              Software Engineer • Math & Machine Learning
            </p>
            <h1 className="section-title mb-2 animate-fade-in-up transition-opacity duration-1000 ease-out">
              Andrew Ngo
            </h1>
          </div>
        </div>
        <div className="flex justify-center space-x-6 text-2xl mb-10">
          <a href="https://github.com/andrewango" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="mailto:ango@udel.edu" className="hover:text-gray-400">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/andrewango/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
        <NowPlaying />
        <button onClick={scrollToAbout} className="mt-10 text-white text-3xl hover:text-gray-400 transition-transform hover:scale-110">
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
}
