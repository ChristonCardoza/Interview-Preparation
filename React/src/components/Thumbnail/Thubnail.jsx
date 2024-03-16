import { useState, useEffect, useRef } from "react";
import React from "react";
const Thubnail = () => {
  const [apiData, setApiData] = useState([]);
  const [curImg, setcurImg] = useState({});
  const counter = useRef(0);

  const fetchData = async () => {
    console.log("apiData");
    const response = await fetch("https://dummyjson.com/products");

    if (response.ok) {
      const d = await response.json();
      setApiData(d.products);
      setcurImg(d.products[counter.current]);
    }
  };

  useEffect(() => {
    fetchData(curImg);
  }, []);

  const handleNext = (e) => {
    const val = counter.current + 1;

    if (apiData.length > val) {
      counter.current = val;

      setcurImg(apiData[val]);
    }
  };

  useEffect(() => {}, [curImg]);

  const handlePrev = (e) => {
    const val = counter.current - 1;

    if (val >= 0) {
      counter.current = val;
      setcurImg(apiData[val]);
    }
  };

  console.log(counter.current);

  return (
    <>
      <div>
        <button onClick={handlePrev} disabled={counter.current == 0}>
          prev
        </button>
        <button
          onClick={handleNext}
          disabled={counter.current == apiData.length - 1}
        >
          next
        </button>
      </div>
      <div style={{ marginTop: 5 }}>
        <img src={curImg.thumbnail} />
      </div>
    </>
  );
};

export default Thubnail;
