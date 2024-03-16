import useCustomMemo from "./use-custom-memo";

const { useState, useMemo } = require("react");

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("Expensive Calculation...");
    return counter * counter;
  };

  // const memoizedSquaredValue = useMemo(squaredValue, [counter]);

  const memoizedSquaredValue = useCustomMemo(squaredValue, [counter]);

  return (
    <>
      <h2>Counter: {counter}</h2>
      <h2>Sqared Counter: {memoizedSquaredValue}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>Counter 2: {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
