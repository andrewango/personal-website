import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ScrollArrow, SectionHeader, SectionShell } from './Section';
import { scrollToSectionHeader } from '../utils/scrollToSection';

type ExperienceSide = 'left' | 'right';

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  date: string;
  side: ExperienceSide;
  details: string[];
  tech: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: 'nasa-research-collaborator',
    title: 'Research Collaborator',
    company: 'NASA',
    date: 'Nov. 2025 - Present',
    side: 'right',
    details: ['Global Solar Activity'],
    tech: ['Python', 'PyTorch', 'Computer Vision', 'Object Tracking', 'Astrophysics'],
  },
  {
    id: 'beacon-cybersecurity-lead',
    title: 'Cybersecurity Lead',
    company: 'Beacon Industries',
    date: 'Nov. 2025 - Present',
    side: 'left',
    details: ['CMMC Level 2 Compliance'],
    tech: ['Data Governance', 'Azure Cloud', 'Networking', 'Identity Management', 'Incident Response'],
  },
  {
    id: 'beacon-ml-engineer',
    title: 'Machine Learning Engineer',
    company: 'Beacon Industries',
    date: 'Sept. 2025 - Present',
    side: 'right',
    details: ['AI/ML R&D in Aerospace and Defense'],
    tech: ['Python', 'TypeScript', 'AWS', 'PyTorch', 'TensorFlow', 'RAG', 'Reinforcement Learning', 'Computer Vision'],
  },
  {
    id: 'udel-ai-researcher',
    title: 'Student AI Researcher',
    company: 'University of Delaware',
    date: 'Sept. 2024 - May 2025',
    side: 'left',
    details: ['Deep Reinforcement Learning in Extremal Combinatorics'],
    tech: ['Python', 'PyTorch', 'NetworkX', 'Git'],
  },
  {
    id: 'udel-teaching-assistant',
    title: 'Teaching Assistant & Proctor',
    company: 'University of Delaware',
    date: 'Sept. 2022 - Dec. 2024',
    side: 'right',
    details: ['Data Structures, Systems Programming, Logic, Calculus I'],
    tech: ['C/C++', 'Git', 'Eclipse IDE', 'DLV'],
  },
  {
    id: 'nasa-data-scientist-2024',
    title: 'Data Scientist Intern',
    company: 'NASA',
    date: 'June 2024 - Aug. 2024',
    side: 'left',
    details: ['Solar Limb Stabilization, Polar Region Analysis'],
    tech: ['Python', 'TensorFlow', 'Docker', 'Pandas', 'NumPy', 'AstroPy', 'Git'],
  },
  {
    id: 'sensify-ml-intern',
    title: 'Machine Learning Engineer Intern',
    company: 'Sensify Lab',
    date: 'Sept. 2023 - May 2024',
    side: 'right',
    details: ['Mental Health App Classification, Depression and Anxiety Prediction'],
    tech: ['Python', 'PyTorch', 'Firebase', 'Sklearn', 'Pandas', 'Git', 'Matplotlib'],
  },
  {
    id: 'nasa-data-scientist-2023',
    title: 'Data Scientist Intern',
    company: 'NASA',
    date: 'June 2023 - Aug. 2023',
    side: 'left',
    details: ['Supergranule Segmentation, Global Solar Activity Data Portal'],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Pandas', 'AstroPy', 'Git'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [expandedExperienceId, setExpandedExperienceId] = useState<string | null>(null);

  const scrollToPublications = () => {
    scrollToSectionHeader('publications');
  };

  const toggleExperience = (experienceId: string) => {
    setExpandedExperienceId((currentId) => (currentId === experienceId ? null : experienceId));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionShell id="experience" ref={sectionRef} className="relative">
      <SectionHeader title="Experience" visible={visible} />

      <div className="relative flex flex-col items-center max-w-[96rem] mx-auto">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-cyan-400/80 z-0 animate-pulse-line" />

        {experiences.map((experience) => {
          const isExpanded = expandedExperienceId === experience.id;
          const isLeftSide = experience.side === 'left';
          const detailPanelId = `${experience.id}-details`;

          return (
            <div
              key={experience.id}
              className="relative mb-8 grid w-full grid-cols-1 pl-10 md:grid-cols-[minmax(0,1fr)_minmax(24rem,1.18fr)_4rem_minmax(24rem,1.18fr)_minmax(0,1fr)] md:items-start md:gap-0 md:pl-0"
            >
              <span
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-[#05070f] z-10"
                style={{ top: '2.5rem' }}
              />

              <article
                className={`relative z-10 flex min-h-[13rem] w-full flex-col rounded-lg border border-cyan-700/70 bg-[#07111f]/78 p-8 text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.01] hover:border-cyan-300 md:h-[13rem] ${
                  isLeftSide ? 'md:col-start-2 md:row-start-1' : 'md:col-start-4 md:row-start-1'
                }`}
              >
                <div
                  id={`${detailPanelId}-desktop`}
                  className={`pointer-events-none absolute top-0 z-20 hidden w-[min(28rem,calc(50vw-20rem))] min-w-[20rem] transition-[opacity,transform] duration-300 ease-out md:block ${
                    isLeftSide ? 'right-full mr-5 origin-right' : 'left-full ml-5 origin-left'
                  } ${isExpanded ? 'opacity-100 translate-x-0 scale-x-100' : `opacity-0 scale-x-95 ${isLeftSide ? 'translate-x-4' : '-translate-x-4'}`}`}
                  aria-hidden={!isExpanded}
                >
                  <div className="rounded-lg border border-cyan-700/70 bg-[#07111f]/92 p-7 text-white shadow-xl">
                    <ul className="space-y-3 text-lg leading-relaxed text-white/85">
                      {experience.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-sm font-medium px-3 py-1 rounded hover:bg-cyan-400/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleExperience(experience.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`${detailPanelId}-desktop`}
                  aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${experience.company} details`}
                  className={`absolute top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/80 bg-[#05070f]/95 text-cyan-300 shadow-lg transition hover:border-cyan-200 hover:text-cyan-100 ${
                    isLeftSide ? '-left-6' : '-right-6'
                  }`}
                >
                  {isLeftSide ? (
                    <FaChevronLeft className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  ) : (
                    <FaChevronRight className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => toggleExperience(experience.id)}
                  aria-expanded={isExpanded}
                  aria-controls={detailPanelId}
                  aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${experience.company} details`}
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/80 bg-[#05070f]/95 text-cyan-300 shadow-lg transition hover:border-cyan-200 hover:text-cyan-100 md:hidden"
                >
                  <FaChevronDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                <div className="flex h-full flex-col justify-start">
                  <div>
                    <h3 className="flex min-h-[4.6rem] items-start text-3xl font-bold leading-tight text-cyan-300">
                      {experience.title}
                    </h3>
                    <p className="mt-2 text-2xl text-white">{experience.company}</p>
                    <p className="mt-3 whitespace-nowrap text-lg text-white/70">{experience.date}</p>
                  </div>
                </div>

                <div
                  id={detailPanelId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-cyan-400/25 pt-6">
                      <ul className="space-y-3 text-lg leading-relaxed text-white/85">
                        {experience.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-sm font-medium px-3 py-1 rounded hover:bg-cyan-400/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <ScrollArrow onClick={scrollToPublications} label="Scroll to publications" />
    </SectionShell>
  );
}
