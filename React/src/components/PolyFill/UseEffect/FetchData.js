import { useEffect, useState } from "react";

import useCustomEffect from "./use-custom-effect";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Response not OK");
      }

      const fetchData = await response.json();
      setData(fetchData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  useCustomEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {data.map((post) => {
        return <li key={post.id}> {post.title}</li>;
      })}
    </ul>
  );
};

export default FetchData;
