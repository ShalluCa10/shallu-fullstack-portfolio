import  { useEffect, useState } from "react";
import { getPortfolioData } from "src/api";

const Portfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPortfolioData();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      {/* NAME & ROLE */}
      <h1>{data.name}</h1>
      <h3>{data.role}</h3>

      {/* SKILLS */}
      <h2>Skills</h2>
      <ul>
        {data.skills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* PROJECTS */}
      <h2>Projects</h2>
      {data.projects?.map((project, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;