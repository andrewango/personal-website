import React from 'react';
import { FaChevronDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../images/profilePic.jpeg';
import { scrollToSectionHeader } from '../utils/scrollToSection';

export default function Hero() {
  const scrollToAbout = () => {
    scrollToSectionHeader('about');
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 text-white font-modern"
    >
      <div className="z-10 mx-auto flex w-fit max-w-full flex-col items-center text-center drop-shadow-[0_2px_18px_rgba(15,23,42,0.38)]">
        <div className="grid w-fit max-w-full items-center justify-center gap-12 md:grid-cols-[auto_auto]">
          <img
            src={profilePic}
            alt="Andrew Ngo"
            className="mx-auto h-56 w-56 object-cover border-2 border-white/80 shadow-2xl shadow-sky-950/40 md:h-80 md:w-80"
          />

          <div className="flex max-w-3xl flex-col items-center justify-center text-center md:min-h-80 md:items-start md:text-left">
            <p className="mb-1 text-2xl font-normal uppercase tracking-[0.14em] text-white md:text-[1.65rem] animate-fade-in-up transition-opacity duration-1000 ease-out">
              AI/ML Engineer • Math & Data Science
            </p>
            <h1 className="mb-3 text-[clamp(3.65rem,7.4vw,6.65rem)] font-semibold leading-tight text-white animate-fade-in-up transition-opacity duration-1000 ease-out">
              Andrew Ngo
            </h1>
            <p className="section-subtitle max-w-3xl text-white animate-fade-in-up transition-opacity duration-1000 ease-out">
              Building intelligent systems to advance space science, aerospace, and defense.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-[2.15rem]">
          <a
            href="https://github.com/andrewango"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-opacity hover:opacity-50"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:ango@udel.edu"
            className="text-white transition-opacity hover:opacity-50"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/andrewango/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-opacity hover:opacity-50"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="mt-20 text-3xl text-white transition-all hover:scale-110 hover:opacity-50"
          aria-label="Scroll to about"
        >
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
}
