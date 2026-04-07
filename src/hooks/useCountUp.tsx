import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  startOnView = true 
}: UseCountUpProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnView);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  useEffect(() => {
    if (!startOnView || !elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [startOnView]);

  return { count, elementRef };
};
