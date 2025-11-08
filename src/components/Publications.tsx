import React, { useEffect, useRef, useState } from 'react';
import { FaLink, FaChevronDown } from 'react-icons/fa';

const projects = [
  {
    title: 'Leveraging Large Language Models for Review Classification and Rating Estimation of Mental Health Applications',
    description: 'International AAAI Conference on Web and Social Media',
    github: 'https://ojs.aaai.org/index.php/ICWSM/article/view/35916/38070'
  },
  {
    title: 'Poster: Opportunities and Challenges in Mental Health Mobile Applications',
    description: 'IEEE Xplore',
    github: 'https://ieeexplore.ieee.org/document/10614406'
  },
  {
    title: 'Poster: Global Solar Activity Data Portal',
    description: 'NASA',
    github: 'https://ntrs.nasa.gov/citations/20230018038'
  },
  {
    title: 'Deep Reinforcement Learning in Extremal Combinatorics',
    description: 'Undergraduate Senior Thesis',
    github: 'https://udspace.udel.edu/server/api/core/bitstreams/313f16b4-c15d-4bb7-bf6a-db21189a9ecf/content'
  },
  {
    title: 'Poster: Enabling Solar Variability Studies Through Global Solar Activity Data Portal',
    description: 'NASA',
    github: 'https://ntrs.nasa.gov/api/citations/20240003805/downloads/Kitiashvili_TESS2024portal_sm.pdf'
  }
];

export default function Publications() {
  const scrollToHobbies = () => {
    const hobbiesSection = document.getElementById('hobbies');
    if (hobbiesSection) {
      window.scrollTo({
        top: hobbiesSection.offsetTop - 72,
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
    <section id="publications" ref={sectionRef} className="min-h-screen px-6 py-16 text-white">
      <h2 className="section-title text-center mb-4">Publications</h2>
      <div className='flex justify-center'>
        <div
        className={`h-0.5 bg-cyan-400 mb-12 transition-all duration-1000 ease-out origin-center ${
          visible ? 'w-64 scale-x-100' : 'w-0 scale-x-0'
        }`}
      />
      </div>

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
              <FaLink className="text-lg" /> View Publication
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={scrollToHobbies}
          className="text-white text-3xl hover:text-gray-400 transition-transform hover:scale-110"
        >
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
}
