import React, { useEffect, useRef, useState } from 'react';
import { ScrollArrow, SectionHeader, SectionShell } from './Section';
import { scrollToSectionHeader } from '../utils/scrollToSection';

export default function About() {
  const scrollToExperience = () => {
    scrollToSectionHeader('experience');
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
    <SectionShell
      id="about"
      ref={sectionRef}
      centered
      className="text-center"
    >
      <SectionHeader title="Howdy!" visible={visible} />

      <p className="section-subtitle max-w-6xl leading-relaxed text-white/88">
        I'm an AI/ML engineer with a passion for anything data science, machine learning, or mathematics-related.
        <br />
        <br />
        I graduated Cum Laude with dual bachelor's degrees in Applied Mathematics and Computer Science from the
        University of Delaware.<br></br>Currently, I'm studying for a master's degree in Applied Mathematics.
        <br />
        <br />
        When I'm not coding or studying, I love lifting heavy weights, playing hockey, swimming, running, producing
        music, learning Ukrainian, and exploring nature.
      </p>

      <ScrollArrow onClick={scrollToExperience} label="Scroll to experience" />
    </SectionShell>
  );
}
