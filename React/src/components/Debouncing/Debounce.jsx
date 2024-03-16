import { useState } from "react";

const DebounceComp = () => {
  const [pressedCount, setPressedCount] = useState(0);
  const [triggerdCount, setTriggeredCount] = useState(0);

  const handleClick = (e) => {
    setPressedCount((prev) => prev + 1);
    debounceCount();
  };

  const myDebounce = (cb, d) => {
    let timer;

    return function (...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const debounceCount = myDebounce(() => {
    setTriggeredCount(triggerdCount + 1);
  }, 800);

  return (
    <>
      <button onClick={(e) => handleClick()}>Increment</button>
      <p> Button Pressed {pressedCount} Times</p>
      <p> Triggered {triggerdCount} Times</p>
    </>
  );
};

export default DebounceComp;
