import React, { useEffect, useRef, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const sampleData = [
  { month: 'Feb 23', Squat: 215, Bench: 175, Deadlift: 245 },
  { month: 'Jun 23', Squat: 265, Bench: 205, Deadlift: 275 },
  { month: 'Aug 23', Squat: 285, Bench: 205, Deadlift: 315 },
  { month: 'Oct 23', Squat: 315, Bench: 205, Deadlift: 365 },
  { month: 'Feb 24', Squat: 350, Bench: 205, Deadlift: 375 },
  { month: 'Mar 24', Squat: 350, Bench: 205, Deadlift: 380 },
  { month: 'Jun 24', Squat: 375, Bench: 205, Deadlift: 420 },
  { month: 'Sep 24', Squat: 405, Bench: 225, Deadlift: 420 },
  { month: 'Feb 25', Squat: 405, Bench: 245, Deadlift: 420 },
  { month: 'Jun 25', Squat: 405, Bench: 245, Deadlift: 455 },
  { month: 'Jul 25', Squat: 405, Bench: 245, Deadlift: 465 }
];

const useCounter = (end: number, duration: number, trigger: boolean) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return count;
};

export default function Hobbies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<'music' | 'lifting'>('music');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (data.length === 0) {
            setTimeout(() => setData(sampleData), 100);
          }
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [data]);

  const streams = useCounter(3, 1500, visible);
  const listeners = useCounter(100, 1500, visible);
  const countries = useCounter(100, 1500, visible);

  return (
    <section
      id="hobbies"
      ref={sectionRef}
      className="min-h-screen px-6 py-16 text-white flex flex-col justify-center items-center"
    >
      <h2 className="section-title mb-4 text-center">Hobbies</h2>
            <div
        className={`h-0.5 bg-cyan-400 mb-12 transition-all duration-1000 ease-out origin-center ${
          visible ? 'w-64 scale-x-100' : 'w-0 scale-x-0'
        }`}
      />

      <div className="flex border-b border-cyan-400 mb-10">
        <button
          onClick={() => setTab('music')}
          className={`px-4 py-2 text-sm transition-all relative ${
            tab === 'music' ? 'text-cyan-400' : 'text-white'
          } border-r border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.3)] rounded`}
        >
          Music
        </button>
        <button
          onClick={() => setTab('lifting')}
          className={`px-4 py-2 text-sm transition-all relative ${
            tab === 'lifting' ? 'text-cyan-400' : 'text-white'
          } hover:text-cyan-300 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.3)] rounded`}
        >
          Lifting
        </button>
      </div>

      {tab === 'music' ? (
        <>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center">
          <div>
            <h3 className="text-4xl sm:text-6xl font-bold text-cyan-400">{streams}M+</h3>
            <p className="text-gray-300 text-sm mt-1">streams</p>
          </div>
          <div>
            <h3 className="text-4xl sm:text-6xl font-bold text-cyan-400">{listeners}K+</h3>
            <p className="text-gray-300 text-sm mt-1">listeners</p>
          </div>
          <div>
            <h3 className="text-4xl sm:text-6xl font-bold text-cyan-400">{countries}+</h3>
            <p className="text-gray-300 text-sm mt-1">countries</p>
          </div>
        </div>
            <p className="max-w-3xl mt-8 text-center text-gray-300 text-lg">
            I began producing music in 2016, starting with wave and hip hop/RnB. I made a name for myself in two large underground scenes—one inspired by Bladee and Yung Lean,
            the other by emo, punk, alt rock, and trap. I was also a member of an underground collective called Ghost Network. As my interests expanded, I learned how to produce rock, metal, pop/K-pop, and EDM instrumentals.
            I've also taught two close friends how to produce—one of which has made a name for himself in his own scene.
            <br></br>
            <br></br>
            I've collaborated with many artists across the world, including glaive, onlyfriend, d1v, Nosgov, Days to Waste, and OUTHR.
            <br></br>
            <br></br>
            In 2022, I took a break from music production to focus on my studies.
            </p>
        </>
      ) : (
        <>
        <ResponsiveContainer width="100%" height={400} className="max-w-4xl">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#888" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#00ffff' }} />
            <Line
              type="monotone"
              dataKey="Squat"
              stroke="#00FFFF"
              strokeWidth={3}
              dot={{ r: 4 }}
              isAnimationActive={visible}
            />
            <Line
              type="monotone"
              dataKey="Bench"
              stroke="#FF00FF"
              strokeWidth={3}
              dot={{ r: 4 }}
              isAnimationActive={visible}
            />
            <Line
              type="monotone"
              dataKey="Deadlift"
              stroke="#FFFF00"
              strokeWidth={3}
              dot={{ r: 4 }}
              isAnimationActive={visible}
            />
          </LineChart>
        </ResponsiveContainer>
                    <p className="max-w-3xl mt-8 text-center text-gray-300 text-lg">
            I started powerlifting in 2023 and followed NSuns and Sheiko's programs before being coached by Veniamin Yovenko in Feb. 2025.
            <br></br>
            <br></br>
            Currently, I'm self-coaching with everything I've learned and striving to improve my strength everyday in the 82.5kg weight class.
            </p>
        </>
      )}
    </section>
    
  );
}