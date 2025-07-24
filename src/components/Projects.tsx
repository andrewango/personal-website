import React from 'react';
import { FaGithub, FaChevronDown } from 'react-icons/fa';

const projects = [
  {
    title: 'Restaurant Menu',
    description: 'Restaurant website built with React and TypeScript.',
    github: 'https://github.com/andrewango/restaurant-menu'
  },
  {
    title: 'Cora, Your Anatomy Assistant',
    description: 'Full-stack learning app built with TypeScript, FastAPI, and OpenAI API.',
    github: 'https://github.com/andrewango/cora'
  },
  {
    title: 'Employment Database System',
    description: 'A SQL schema for managing employee records.',
    github: 'https://github.com/andrewango/employment_db'
  },
  {
    title: '2-Player Chess',
    description: 'Real-time multiplayer chess built with Java.',
    github: 'https://github.com/andrewango/chess-inspired-game'
  },
  {
    title: 'Emotion Classifier',
    description: 'Training CNNs using transfer learning and bootstrapping to detect facial emotion.',
    github: 'https://drive.google.com/file/d/1L6VpMFs3AHj_h_rMcCQibvUsCr185P1D/view?usp=sharing'
  },
    {
    title: 'Tweet Spam Detector',
    description: 'Training classification models to detect spam on Twitter.',
    github: 'https://github.com/andrewango/tweet_spam_detector'
  },
      {
    title: 'Mathnasium Employee Scheduler (Unfinished)',
    description: 'A scheduling system for a Mathnasium center I work at!',
    github: 'https://github.com/andrewango/'
  }
];

export default function Projects() {
    const scrollToPublications = () => {
    const projexpSection = document.getElementById('publications');
    if (projexpSection) {
      projexpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-16 text-white">
      <h2 className="section-title text-center mb-4">Projects</h2>
      <div className="mx-auto w-64 h-0.5 bg-cyan-400 mb-12" />
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-cyan-700 rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:border-cyan-400"
          >
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-gray-200 text-sm mb-4">{project.description}</p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-200"
            >
              <FaGithub className="text-lg" /> View Code
            </a>
          </div>
        ))}
      </div>
    <div className="flex justify-center mt-10">
        <button
            onClick={scrollToPublications}
            className="text-white text-3xl hover:text-gray-400 transition-transform hover:scale-110"
        >
            <FaChevronDown />
        </button>
    </div>
    </section>
  );
}