import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntil2025());

  function getTimeUntil2025() {
    const target = new Date('2025-01-01T00:00:00');
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntil2025());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="relative">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 flex items-center justify-center bg-black/50 countdown-circle">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">{value}</div>
                  <div className="text-sm text-blue-400 uppercase">{unit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}