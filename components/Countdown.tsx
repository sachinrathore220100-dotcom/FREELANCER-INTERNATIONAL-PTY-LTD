
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const Item = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-2xl md:text-4xl font-serif mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center flex-wrap">
      <Item label="Days" value={timeLeft.days} />
      <Item label="Hours" value={timeLeft.hours} />
      <Item label="Mins" value={timeLeft.minutes} />
      <Item label="Secs" value={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;
