import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-5 left-5 z-50 text-white text-2xl p-2 rounded-md"
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
        className={`fixed top-0 left-0 h-full w-64 bg-black/50 z-40 transform transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-xl hover:text-cyan-400"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6 text-md font-medium text-white">
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-cyan-400 cursor-pointer">About Me</a></li>
          <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-cyan-400 cursor-pointer">Experience</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-cyan-400 cursor-pointer">Projects</a></li>
          <li><a href="#publications" onClick={(e) => scrollToSection(e, 'publications')} className="hover:text-cyan-400 cursor-pointer">Publications</a></li>
          <li><a href="#hobbies" onClick={(e) => scrollToSection(e, 'hobbies')} className="hover:text-cyan-400 cursor-pointer">Hobbies</a></li>
          <li><a href="/Andrew_Ngo_Resume_25.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 cursor-pointer">Resume</a></li>
        </ul>
      </nav>
    </>
  );
}