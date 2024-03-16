const { useEffect, useRef } = require("react");

const useCustomMemo = (cb, deps) => {
  const memoizedRef = useRef(null);

  const areEqual = (prevDeps, nextDeps) => {
    if (prevDeps === null) return false;

    if (prevDeps.length !== nextDeps.length) return false;

    for (let i = 0; i < prevDeps.length; i++) {
      if (prevDeps[i] !== nextDeps[i]) {
        return false;
      }
    }

    return true;
  };

  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }

  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  return memoizedRef.current.value;
};

export default useCustomMemo;
