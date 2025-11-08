import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaChevronDown } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const projects = [
  {
    title: 'Restaurant Menu',
    description: 'Restaurant website built with React and TypeScript.',
    github: 'https://github.com/andrewango/restaurant-menu'
  },
  {
    title: 'Cora, Your Anatomy Assistant',
    description: 'Full-stack learning app built with TypeScript, FastAPI, and OpenAI API.',
    github: 'https://github.com/andrewango/cora'
  },
  {
    title: 'Employment Database System',
    description: 'A SQL schema for managing employee records.',
    github: 'https://github.com/andrewango/employment_db'
  },
  {
    title: '2-Player Chess',
    description: 'Real-time multiplayer chess built with Java.',
    github: 'https://github.com/andrewango/chess-inspired-game'
  },
  {
    title: 'Emotion Classifier',
    description: 'Training CNNs using transfer learning and bootstrapping to detect facial emotion.',
    github: 'https://drive.google.com/file/d/1L6VpMFs3AHj_h_rMcCQibvUsCr185P1D/view?usp=sharing'
  },
  {
    title: 'Tweet Spam Detector',
    description: 'Training classification models to detect spam on Twitter.',
    github: 'https://github.com/andrewango/tweet_spam_detector'
  }
];

export default function Projects() {
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

  const scrollToPublications = () => {
    const pubSection = document.getElementById('publications');
    if (pubSection) {
      window.scrollTo({
        top: pubSection.offsetTop - 72,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen px-6 py-16 text-white">
      <h2 className="section-title text-center mb-4">Projects</h2>
      <div className="flex justify-center">
        <div
          className={`h-0.5 bg-cyan-400 mb-12 transition-all duration-1000 ease-out origin-center ${
            visible ? 'w-64 scale-x-100' : 'w-0 scale-x-0'
          }`}
        />
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"}
        spaceBetween={10}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full px-4"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
              <div className="relative bg-white/10 backdrop-blur-md border border-cyan-700 rounded-xl shadow-lg p-8 min-h-[300px] w-[400px] flex flex-col justify-between transition-transform duration-300 hover:scale-100 hover:z-10 hover:border-cyan-400">

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
                <FaGithub className="text-lg" /> View Code
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-10">
        <button
          onClick={scrollToPublications}
          className="text-white text-3xl hover:text-gray-400 transition-transform hover:scale-110"
        >
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
}
