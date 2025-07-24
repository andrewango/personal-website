import React from 'react';

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-60 backdrop-blur-md z-50 px-10 py-5 flex justify-center items-center shadow-md text-base">
      <ul className="flex space-x-6 text-md font-medium">
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-gray-300 cursor-pointer">About Me</a></li>
        <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-gray-300 cursor-pointer">Experience</a></li>
        <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-gray-300 cursor-pointer">Projects</a></li>
        <li><a href="/Andrew_Ngo_Resume_25.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 cursor-pointer">Resume</a></li>
      </ul>
    </nav>
  );
}