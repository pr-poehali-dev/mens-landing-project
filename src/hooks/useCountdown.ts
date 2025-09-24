import { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(initialHours: number = 3) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
    const savedEndTime = localStorage.getItem('offerEndTime');
    const now = new Date().getTime();
    
    if (savedEndTime && parseInt(savedEndTime) > now) {
      const diff = parseInt(savedEndTime) - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      return { hours, minutes, seconds };
    } else {
      const endTime = now + (initialHours * 60 * 60 * 1000);
      localStorage.setItem('offerEndTime', endTime.toString());
      return { hours: initialHours, minutes: 0, seconds: 0 };
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const savedEndTime = localStorage.getItem('offerEndTime');
      if (!savedEndTime) return;
      
      const now = new Date().getTime();
      const endTime = parseInt(savedEndTime);
      const difference = endTime - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem('offerEndTime');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}