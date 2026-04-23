import React, { useEffect, useState } from "react";
import { getPortfolio } from "../api";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const result = await getPortfolio();
      setData(result);
    };

    loadData();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{data.name}</h1>
      <h3>{data.role}</h3>

      <h2>Skills</h2>
      <ul>
        {data.skills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;