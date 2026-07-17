import React, { useEffect, useState } from 'react';

const launchVideoUrl = `${process.env.PUBLIC_URL}/videos/SpaceX_Dragon_CRS16.mp4`;

function isPastHeroMidpoint(): boolean {
  const heroSection = document.getElementById('hero');

  if (!heroSection) {
    return false;
  }

  const heroBounds = heroSection.getBoundingClientRect();
  return heroBounds.top + heroBounds.height / 2 < 0;
}

export default function Background() {
  const [isHeroBackgroundVisible, setIsHeroBackgroundVisible] = useState(true);

  useEffect(() => {
    const updateBackgroundVisibility = () => {
      setIsHeroBackgroundVisible(!isPastHeroMidpoint());
    };

    updateBackgroundVisibility();
    window.addEventListener('scroll', updateBackgroundVisibility, { passive: true });
    window.addEventListener('resize', updateBackgroundVisibility);

    return () => {
      window.removeEventListener('scroll', updateBackgroundVisibility);
      window.removeEventListener('resize', updateBackgroundVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 -z-20 overflow-hidden bg-[#05070f] transition-opacity duration-500 ease-in-out ${
        isHeroBackgroundVisible ? 'opacity-70' : 'opacity-10'
      }`}
      aria-hidden="true"
    >
      <video
        className="h-full w-full object-cover"
        src={launchVideoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-slate-950/25" />
    </div>
  );
}
