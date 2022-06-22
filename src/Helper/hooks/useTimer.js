import React from "react";
import { Time } from "../utils.module";

export const TimerStatuses = {
  Idle: "idle",
  Paused: "paused",
  Running: "running",
};

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
    time: Time(time),
    timerStatus,
  };
};

export default useTimer;
