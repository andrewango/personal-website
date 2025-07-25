import React, { useEffect, useState } from 'react';
import bg from '../images/ocean.gif';
import bg2 from '../images/underwater.gif';

export default function Background() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');

    const handleScroll = () => {
      if (!heroSection) return;
      const rect = heroSection.getBoundingClientRect();
      setIsPastHero(rect.top + (rect.height / 2) < 0);;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full -z-20 transition-opacity duration-500 ease-in-out ${
          isPastHero ? 'opacity-0' : 'opacity-50'
        } blur-md overflow-hidden`}
      >
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full -z-30 transition-opacity duration-500 ease-in-out ${
          isPastHero ? 'opacity-50' : 'opacity-0'
        } blur-md overflow-hidden`}
      >
        <img
          src={bg2}
          alt="underwater"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}