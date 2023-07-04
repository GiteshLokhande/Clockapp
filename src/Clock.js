import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <center>
        <h1>Clock</h1>
        <span>{time.toLocaleTimeString()}</span>
      </center>
    </div>
  );
}
