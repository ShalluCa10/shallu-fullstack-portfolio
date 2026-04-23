import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map(project => (
        <div key={project._id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p><strong>Languages:</strong> {project.languages}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;