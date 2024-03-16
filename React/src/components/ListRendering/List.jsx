import { useState } from "react";

import Element from "./Element";

const ListRender = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const increaseSizeByOne = (e) => {
    const index = Array.from(e.target.parentElement.children).indexOf(e.target);

    if (index != -1) {
      setList((prevList) => {
        const newList = [...prevList];
        newList[index] += 1;
        return newList;
      });
    }
  };

  return (
    <>
      <ul style={{ listStyle: "none" }} onClick={increaseSizeByOne}>
        {list.map((value, index) => (
          <Element key={value.toString() + index} value={value} />
        ))}
      </ul>
    </>
  );
};

export default ListRender;
