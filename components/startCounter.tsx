'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  label: string;
  target: number;
}

const StatCounter = ({ label, target }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = 0;
          const end = target;
          if (start === end) return;

          const duration = 2000;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentNum = Math.floor(progress * end);
            setCount(currentNum);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="bg-white p-6 rounded-lg shadow-sm w-full">
      <div className="text-4xl font-bold text-[#C0A062] mb-2">
        {count}
        {target === 100 ? '+' : ''}
      </div>
      <p className="font-semibold">{label}</p>
    </div>
  );
};

export default StatCounter;
