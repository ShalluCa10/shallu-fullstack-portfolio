import { useEffect, useState } from "react";
import { getPortfolio } from "../api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getPortfolio();
      setProjects(data?.projects || []);
    };

    fetchProjects();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Projects</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;