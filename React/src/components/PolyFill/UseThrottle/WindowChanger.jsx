import { useState, useEffect } from "react";

import useThrottle from "./use-throttle";

const WindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  const throttledHandleResize = useThrottle(handleResize, 500);

  return (
    <>
      Window Size: {windowSize.width} X {windowSize.height}
    </>
  );
};

export default WindowResize;
