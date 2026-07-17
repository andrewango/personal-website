import React, { useEffect, useRef, useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { SectionHeader, SectionShell } from './Section';

type HobbyTab = 'music' | 'powerlifting' | 'ice hockey' | 'snowboarding';

type LiftDataPoint = {
  month: string;
  Squat: number;
  Bench: number;
  Deadlift: number;
};

type CountUpNumberProps = {
  target: number;
  suffix?: string;
  visible: boolean;
};

const hobbyTabs: HobbyTab[] = ['music', 'powerlifting', 'ice hockey', 'snowboarding'];

const liftData: LiftDataPoint[] = [
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
  { month: 'Sep 25', Squat: 415, Bench: 245, Deadlift: 475 },
  { month: 'Mar 26', Squat: 420, Bench: 245, Deadlift: 475 },
];

function formatCompactCount(value: number, suffix = '') {
  if (suffix === 'M+') return `${Math.floor(value / 1_000_000)}M+`;
  if (suffix === 'K+') return `${Math.floor(value / 1_000)}K+`;
  return `${Math.floor(value)}${suffix}`;
}

function CountUpNumber({ target, suffix = '', visible }: CountUpNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!visible) {
      setCurrentValue(0);
      return;
    }

    const durationMs = 1100;
    const startTime = performance.now();
    let animationFrame = 0;

    const updateCount = (timestamp: number) => {
      const elapsedRatio = Math.min((timestamp - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - elapsedRatio, 3);

      setCurrentValue(target * easedProgress);

      if (elapsedRatio < 1) {
        animationFrame = window.requestAnimationFrame(updateCount);
      }
    };

    animationFrame = window.requestAnimationFrame(updateCount);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [target, visible]);

  return <div className="text-5xl sm:text-7xl font-bold text-cyan-400">{formatCompactCount(currentValue, suffix)}</div>;
}

export default function Hobbies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<HobbyTab>('music');
  const [chartData, setChartData] = useState<LiftDataPoint[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);
        if (chartData.length === 0) {
          window.setTimeout(() => setChartData(liftData), 100);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [chartData.length]);

  return (
    <SectionShell id="hobbies" ref={sectionRef} centered>
      <SectionHeader title="Hobbies" visible={visible} />

      <div className="flex border-b border-cyan-400 mb-12">
        {hobbyTabs.map((currentTab) => (
          <button
            key={currentTab}
            onClick={() => setTab(currentTab)}
            className={`px-8 py-4 text-lg transition-all relative ${
              tab === currentTab ? 'text-cyan-400' : 'text-white'
            } ${
              currentTab !== 'snowboarding' ? 'border-r border-cyan-400' : ''
            } hover:text-cyan-300 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.3)] rounded`}
          >
            {currentTab.charAt(0).toUpperCase() + currentTab.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'music' ? (
        <>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center">
            <div>
              <CountUpNumber target={3_000_000} suffix="M+" visible={visible} />
              <p className="text-gray-300 text-base mt-2">streams</p>
            </div>
            <div>
              <CountUpNumber target={100_000} suffix="K+" visible={visible} />
              <p className="text-gray-300 text-base mt-2">listeners</p>
            </div>
            <div>
              <CountUpNumber target={100} suffix="+" visible={visible} />
              <p className="text-gray-300 text-base mt-2">countries</p>
            </div>
          </div>
          <p className="section-body max-w-5xl mt-10 text-center">
            I began producing music in 2016, starting with wave and hip hop/RnB. I made a name for myself in two large
            underground scenes, one inspired by Bladee and Yung Lean, the other by emo, punk, alt rock, and trap. I was
            also a member of an underground collective called Ghost Network. As my interests expanded, I learned how to
            produce rock, metal, pop/K-pop, and EDM instrumentals. I've also taught two close friends how to produce,
            one of whom has made a name for himself in his own scene.
            <br />
            <br />
            I've collaborated with many artists across the world, including glaive, onlyfriend, d1v, Nosgov, Days to
            Waste, and OUTHR.
            <br />
            <br />
            In 2022, I took a break from music production to focus on my studies.
          </p>
        </>
      ) : tab === 'powerlifting' ? (
        <>
          <ResponsiveContainer width="100%" height={480} className="max-w-6xl">
            <LineChart data={chartData}>
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
          <p className="section-body max-w-5xl mt-10 text-center">
            I started powerlifting in 2023 and followed NSuns and Sheiko's programs before being coached by Veniamin
            Yovenko in Feb. 2025.
            <br />
            <br />
            Currently, I'm improving my strength everyday in the 82.5kg weight class.
          </p>
        </>
      ) : tab === 'ice hockey' ? (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center">
          <p className="section-body max-w-5xl mt-10 text-center">
            I got into ice hockey in March 2024. I taught myself how to ice skate, occasionally play in beer league,
            and love watching the NHL.
            <br />
            <br />
            My usual position is defenseman and my favorite player is Cale Makar.
          </p>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center">
          <p className="section-body max-w-5xl mt-10 text-center">
            I've snowboarded in Pennsylvania, Vermont, West Virginia, and Maryland. My dream spots are Colorado and the
            French Alps.
          </p>
        </div>
      )}
    </SectionShell>
  );
}
