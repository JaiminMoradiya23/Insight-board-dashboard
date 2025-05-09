import { useState, useEffect } from 'react';

const useCounter = (endValue, duration = 2000, startValue = 0) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    // Parse the end value to ensure it's a number
    const end = typeof endValue === 'string' 
      ? parseFloat(endValue.replace(/[^0-9.-]+/g, '')) 
      : endValue;

    // Ensure we have valid numbers
    if (isNaN(end) || isNaN(startValue)) {
      setCount(0);
      return;
    }

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutExpo = (x) => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };

      const currentCount = Math.floor(startValue + (end - startValue) * easeOutExpo(progress));
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, startValue]);

  return count;
};

export default useCounter; 