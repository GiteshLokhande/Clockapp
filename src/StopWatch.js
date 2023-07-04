import React, { useState, useRef } from "react";

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        setElapsedTime(elapsedTime);
      }, 10);
      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <center>
        <h1>Stopwatch</h1>
        <div>{formatTime(elapsedTime)}</div>
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopStopwatch}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
      </center>
    </div>
  );
}
