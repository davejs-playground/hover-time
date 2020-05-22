import { useState, useEffect } from 'react';

export const useTimer = () => {
  const [startTime, setStartTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Start the timer
  const start = () => {
    if (time === 0) {
      setStartTime(Date.now());
    }
    setIsRunning(true);
  };

  // Stop the timer
  const stop = () => {
    setIsRunning(false);
    setTime(Date.now() - startTime);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    const UPDATE_INTERVAL = 17; // 1000ms / 60fps = 16.67 (maintains 60fps)

    const updateTime = () => {
      if (isRunning) {
        setTime(Date.now() - startTime);
      }
    };
    const interval = setInterval(updateTime, UPDATE_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, startTime]);

  return {
    time,
    start,
    stop,
    reset,
  };
};
