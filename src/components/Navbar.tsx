import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToSectionHeader } from '../utils/scrollToSection';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    scrollToSectionHeader(id);
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-5 left-5 z-50 text-white text-3xl p-3 rounded-md transition-colors hover:text-cyan-400"
          aria-label="Open navigation"
        >
          <FaBars />
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <nav
        className={`fixed top-0 left-0 h-full w-80 bg-black/50 backdrop-blur-sm border-r border-white/10 z-40 transform transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-7">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl transition-colors hover:text-cyan-400"
            aria-label="Close navigation"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 px-9 py-7 text-2xl font-medium text-white">
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block py-2 transition-colors hover:text-cyan-400 cursor-pointer">About Me</a></li>
          <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="block py-2 transition-colors hover:text-cyan-400 cursor-pointer">Experience</a></li>
          <li><a href="#publications" onClick={(e) => scrollToSection(e, 'publications')} className="block py-2 transition-colors hover:text-cyan-400 cursor-pointer">Publications</a></li>
          <li><a href="#hobbies" onClick={(e) => scrollToSection(e, 'hobbies')} className="block py-2 transition-colors hover:text-cyan-400 cursor-pointer">Hobbies</a></li>
          <li><a href="/Andrew_Ngo_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="block py-2 transition-colors hover:text-cyan-400 cursor-pointer">Resume</a></li>
        </ul>
      </nav>
    </>
  );
}
