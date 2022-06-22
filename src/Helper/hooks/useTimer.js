import React from "react";

export const TimerStatuses = {
  Idle: "idle",
  Paused: "paused",
  Running: "running",
};

// TODO:
// 1. Consider using React.useReducer(), it would make more sense
// since some of our states depend on each other
//
// 2. Also consider making time as an object with some properties
// - time.value --> return the time as number
// - time.inCentiSecond --> return the time in centi second
// - time.inSeconds --> return the time in seconds
// - time.inMinutes --> return the time in monutes
// - time.asString --> return the time in human readable format: mm:ss:cc
export const useTimer = () => {
  const [time, setTime] = React.useState(0);
  const [timerStatus, setTimerStatuses] = React.useState(TimerStatuses.Idle);
  const intervalRef = React.useRef(null);

  const clearTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  const pauseTimer = React.useCallback(() => {
    setTimerStatuses(TimerStatuses.Paused);
    clearTimer();
  }, []);

  const startTimer = React.useCallback(() => {
    setTimerStatuses(TimerStatuses.Running);
    clearTimer();

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 10);
    // It says: do the function every 10/1000 = 1/100 seconds
    // For showing centiseconds, we need to devide 1 second to 100 parts, so every second is composed of 100*(1/100 second)
  }, []);

  const resetTimer = React.useCallback(() => {
    setTimerStatuses(TimerStatuses.Idle);
    clearTimer();
    setTime(0);
  }, []);

  React.useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    pauseTimer,
    resetTimer,
    startTimer,
    time,
    timerStatus,
  };
};

export default useTimer;
