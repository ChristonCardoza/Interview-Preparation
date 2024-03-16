import { useRef } from "react";

import ChildComp from "./Child";

const ChildStateChanger = () => {
  const counterRef = useRef(null);

  return (
    <>
      <div>
        <ChildComp ref={counterRef} />
      </div>
      <button onClick={() => counterRef.current?.reset()}>
        Reset From Parent
      </button>
    </>
  );
};

export default ChildStateChanger;
