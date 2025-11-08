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
  { month: 'Jul 25', Squat: 405, Bench: 245, Deadlift: 465 },
  { month: 'Sept 25', Squat: 415, Bench: 245, Deadlift: 475 }
];

const DigitRoll = ({ digit }: { digit: string }) => {
  return isNaN(Number(digit)) ? (
    <span className="inline-block w-[1ch] text-cyan-400">{digit}</span>
  ) : (
    <div className="inline-block h-[3.5rem] overflow-hidden w-[1ch]">
      <div
        className="transition-transform duration-700 ease-out text-cyan-400"
        style={{ transform: `translateY(-${Number(digit) * 3.5}rem)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className="h-[3.5rem] flex items-center justify-center">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollUpNumber = ({ number }: { number: string }) => {
  return (
    <div className="flex justify-center text-4xl sm:text-6xl font-bold h-[3.5rem]">
      {number.split('').map((char, i) => (
        <DigitRoll key={i} digit={char} />
      ))}
    </div>
  );
};

export default function Hobbies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<'music' | 'powerlifting' | 'ice hockey' | 'snowboarding'>('music');
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
        {['music', 'powerlifting', 'ice hockey', 'snowboarding'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as any)}
            className={`px-4 py-2 text-sm transition-all relative ${
              tab === t ? 'text-cyan-400' : 'text-white'
            } ${t !== 'snowboarding' ? 'border-r border-cyan-400' : ''} hover:text-cyan-300 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.3)] rounded`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'music' ? (
        <>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center">
            <div>
              {visible && <ScrollUpNumber number="3M+" />}
              <p className="text-gray-300 text-sm mt-1">streams</p>
            </div>
            <div>
              {visible && <ScrollUpNumber number="100K+" />}
              <p className="text-gray-300 text-sm mt-1">listeners</p>
            </div>
            <div>
              {visible && <ScrollUpNumber number="100+" />}
              <p className="text-gray-300 text-sm mt-1">countries</p>
            </div>
          </div>
          <p className="max-w-3xl mt-8 text-center text-white text-lg">
            I began producing music in 2016, starting with wave and hip hop/RnB. I made a name for myself in two large underground scenes—one inspired by Bladee and Yung Lean,
            the other by emo, punk, alt rock, and trap. I was also a member of an underground collective called Ghost Network. As my interests expanded, I learned how to produce rock, metal, pop/K-pop, and EDM instrumentals.
            I've also taught two close friends how to produce—one of which has made a name for himself in his own scene.
            <br /><br />
            I've collaborated with many artists across the world, including glaive, onlyfriend, d1v, Nosgov, Days to Waste, and OUTHR.
            <br /><br />
            In 2022, I took a break from music production to focus on my studies.
          </p>
        </>
      ) : tab === 'powerlifting' ? (
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
          <p className="max-w-3xl mt-8 text-center text-white text-lg">
            I started powerlifting in 2023 and followed NSuns and Sheiko's programs before being coached by Veniamin Yovenko in Feb. 2025.
            <br /><br />
            Currently, I'm improving my strength everyday in the 82.5kg weight class.
          </p>
        </>
      ) : tab === 'ice hockey' ? (
<div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center">
  <p className="max-w-3xl mt-8 text-center text-white text-lg">
    I got into ice hockey in March 2024. I taught myself how to ice skate, occasionally play in beer league, and love watching the NHL. 
    <br></br>
    <br></br>
    My usual position is defenseman and my favorite player is Cale Makar!
    </p>
</div>

      ) : (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center">
          <p className="max-w-3xl mt-8 text-center text-white text-lg">
    I've snowboarded in Pennsylvania, Vermont, West Virginia, and Maryland. My dream spots are Colorado and the French Alps.
            </p>
        </div>

      )}
    </section>
  );
}
