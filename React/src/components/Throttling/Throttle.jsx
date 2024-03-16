import { useState, useRef } from "react";

const ThrottleComp = () => {
  const [pressedCount, setPressedCount] = useState(0);
  const [triggerdCount, setTriggeredCount] = useState(0);

  const lastRef = useRef(0);

  const handleClick = (e) => {
    setPressedCount((prev) => prev + 1);
    throttleCount();
  };

  const myThrottle = (cb, d) => {
    let last = lastRef.current;

    return function (...args) {
      let now = new Date().getTime();

      if (now - last < d) return;

      lastRef.current = now;

      return cb(...args);
    };
  };

  const throttleCount = myThrottle(() => {
    setTriggeredCount(triggerdCount + 1);
  }, 8000);

  return (
    <>
      <button onClick={(e) => handleClick()}>Increment</button>
      <p> Button Pressed {pressedCount} Times</p>
      <p> Triggered {triggerdCount} Times</p>
    </>
  );
};

export default ThrottleComp;
// https://www.youtube.com/watch?v=rS_4YfbEo2U
