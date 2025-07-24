import React from 'react';
import { FaPython, FaReact, FaNodeJs, FaChevronDown } from 'react-icons/fa';

const experiences = [
  {
    title: 'Research Engineer Intern',
    company: 'University of Delaware',
    date: 'Sept. 2024 – May 2025',
    description: 'Deep Reinforcement Learning in Extremal Combinatorics',
    tech: ['Python', 'PyTorch', 'NetworkX', 'Git'],
    logo: '/logos/udel.png',
  },
{
    title: 'Teaching Assistant',
    company: 'University of Delaware',
    date: 'Sept. 2022 – Dec. 2024',
    description: 'Data Structures, Systems Programming, Logic, Calculus I',
    tech: ['C/C++', 'Git', 'Eclipse IDE', 'DLV'],
    logo: '/logos/udel.png',
  },
  {
    title: 'ML/Software Engineer Intern',
    company: 'NASA',
    date: 'June 2024 – Aug. 2024',
    description: 'Solar Limb Stabilization, Polar Region Analysis',
    tech: ['Python', 'Tensorflow', 'Docker', 'Pandas', 'NumPy', 'AstroPy', 'Git'],
    logo: '/logos/nasa.png',
  },
  {
    title: 'Research Engineer Intern',
    company: 'Sensify Lab',
    date: 'Sept. 2023 – May 2024',
    description: 'Mental Health App Classification, Depression and Anxiety Prediction',
    tech: ['Python', 'PyTorch', 'Firebase', 'Sklearn', 'Pandas', 'Git', 'Matplotlib'],
    logo: '/logos/sensify.png',
  },
    {
    title: 'ML/Software Engineer Intern',
    company: 'NASA',
    date: 'June 2023 – Aug. 2023',
    description: 'Supergranule Segmentation, Global Solar Activity Data Portal',
    tech: ['Python', 'JavaScript', 'MySQL', 'Tensorflow', 'OpenCV', 'Pandas', 'AstroPy', 'Git'],
    logo: '/logos/nasa.png',
  }
  
];

export default function Experience() {
    const scrollToProjects = () => {
    const projSection = document.getElementById('projects');
    if (projSection) {
      window.scrollTo({
        top: projSection.offsetTop - 72,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='experience' className="relative px-6 py-16">
      <h2 className="section-title text-center text-white mb-4">Experience</h2>
        <div className="mx-auto w-64 h-0.5 bg-cyan-400 mb-12" />
      <div className="relative flex flex-col items-center">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 h-[1200px] bg-cyan-400 z-0 animate-pulse-line" />



        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`mb-24 w-full flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
          >
            {/* Dot on the timeline */}
            <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-black z-10 " style={{ top: '2.25rem' }} />

            {/* Card */}
            <div
              className={`transition-transform duration-300 hover:scale-105 bg-black/75 backdrop-blur-md p-6 rounded-xl border border-cyan-700 hover:border-cyan-400 text-white shadow-lg max-w-4xl z-10 ${
                i % 2 === 0 ? 'ml-[48%]' : 'mr-[48%]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl pr-20 font-bold text-cyan-400">{exp.title}</h3>
                <span className="text-sm text-white">{exp.date}</span>
              </div>
              <p className="text-white mb-3">{exp.company}</p>
              <p className="text-sm text-white mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs font-medium px-2 py-1 rounded hover:bg-cyan-400/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    <div className="flex justify-center mt-10">
        <button
            onClick={scrollToProjects}
            className="text-white text-3xl hover:text-gray-400 transition-transform hover:scale-110"
        >
            <FaChevronDown />
        </button>
    </div>
    </section>
  );
}