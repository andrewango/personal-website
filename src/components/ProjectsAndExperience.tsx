import React from 'react';

const projects = [
  {
    title: 'Restaurant Menu',
    description: 'Restaurant website built with React and TypeScript.'
  },
  {
    title: 'Cora, Your Anatomy Assistant',
    description: 'Full-stack learning app built with TypeScript, FastAPI, and OpenAI API.'
  },
  {
    title: 'Employment Database System',
    description: 'A SQL schema for managing employee records.'
  },
  {
    title: '2-Player Chess',
    description: 'Real-time multiplayer chess built with Java.'
  }
];

const experiences = [
  {
    title: 'Research Engineer Intern — University of Delaware',
    date: 'Sept. 2024 - May 2025',
    description: 'Deep Reinforcement Learning in Extremal Combinatorics'
  },
  {
    title: 'TA and Proctor - University of Delaware',
    date: 'Sept. 2022 - Dec. 2024',
    description: 'Data Structures, Systems Programming, Logic Programming, Calculus'
  },
  {
    title: 'ML/Software Engineer Intern - NASA',
    date: 'June 2024 - Aug. 2024',
    description: 'Solar Limb Stabilization, Polar Region Analysis'
  },
  { title: 'Research Engineer Intern - Sensify Lab',
    date: 'Sept. 2023 - May 2024',
    description: 'Mental Health App Review Classification, Depression and Anxiety Prediction'
  },
  { title: 'ML/Software Engineer Intern - NASA',
    date: 'June 2023 - Aug. 2023',
    description: 'Supergranule Segmentation, Global Solar Activity Data Portal'
  }
];

export default function ProjectsExperienceSplit() {
  return (
    <section id="projectsandexperience" className="justify-center items-center min-h-screen px-6 py-16 text-white flex justify-center">
      <div className="w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Projects Timeline */}
        <div className="relative pl-6 border-l-2 border-cyan-500">
          <h3 className="section-title mb-6">Projects</h3>
          {projects.map((project, idx) => (
            <div key={idx} className="mb-10 relative">
              <div className="absolute -left-3 top-1 w-4 h-4 bg-cyan-500 rounded-full shadow-lg" />
              <div className="ml-6">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-white text-base mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 border-l-2 border-red-500">
          <h3 className="section-title mb-6">Experience</h3>
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-10 relative">
              <div className="absolute -left-3 top-1 w-4 h-4 bg-red-500 rounded-full shadow-lg" />
              <div className="ml-6">
                <h4 className="text-xl font-bold">{exp.title}</h4>
                                <h2 className="text-base font-bold">{exp.date}</h2>
                <p className="text-white text-base mt-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}