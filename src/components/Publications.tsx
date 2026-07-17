import React, { useEffect, useRef, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { ScrollArrow, SectionHeader, SectionShell } from './Section';
import { scrollToSectionHeader } from '../utils/scrollToSection';

const publications = [
  {
    title: 'Leveraging Large Language Models for Review Classification and Rating Estimation of Mental Health Applications',
    description: 'International AAAI Conference on Web and Social Media',
    url: 'https://ojs.aaai.org/index.php/ICWSM/article/view/35916/38070',
  },
  {
    title: 'Poster: Opportunities and Challenges in Mental Health Mobile Applications',
    description: 'IEEE Xplore',
    url: 'https://ieeexplore.ieee.org/document/10614406',
  },
  {
    title: 'Poster: Global Solar Activity Data Portal',
    description: 'NASA',
    url: 'https://ntrs.nasa.gov/citations/20230018038',
  },
  {
    title: 'Deep Reinforcement Learning in Extremal Combinatorics',
    description: 'Undergraduate Senior Thesis',
    url: 'https://udspace.udel.edu/server/api/core/bitstreams/313f16b4-c15d-4bb7-bf6a-db21189a9ecf/content',
  },
  {
    title: 'Poster: Enabling Solar Variability Studies Through Global Solar Activity Data Portal',
    description: 'NASA',
    url: 'https://ntrs.nasa.gov/api/citations/20240003805/downloads/Kitiashvili_TESS2024portal_sm.pdf',
  },
];

export default function Publications() {
  const scrollToHobbies = () => {
    scrollToSectionHeader('hobbies');
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
    <SectionShell id="publications" ref={sectionRef}>
      <SectionHeader title="Publications" visible={visible} />

      <div className="grid max-w-7xl grid-cols-2 gap-4 mx-auto md:gap-12">
        {publications.map((publication) => (
          <div
            key={publication.url}
            className="flex min-h-[9rem] flex-col justify-between rounded-lg border border-cyan-700/70 bg-[#07111f]/78 p-4 text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.01] hover:border-cyan-300 md:min-h-[13.75rem] md:p-7"
          >
            <div>
              <h3 className="mb-2 text-sm font-bold leading-tight text-cyan-300 md:mb-3 md:text-[1.6rem]">{publication.title}</h3>
              <p className="mb-3 text-xs text-gray-200 md:mb-5 md:text-[0.95rem]">{publication.description}</p>
            </div>
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-100 md:mt-3 md:gap-2 md:text-[0.95rem]"
            >
              <FaLink className="text-xs md:text-[0.95rem]" /> View
            </a>
          </div>
        ))}
      </div>

      <ScrollArrow onClick={scrollToHobbies} label="Scroll to hobbies" />
    </SectionShell>
  );
}
