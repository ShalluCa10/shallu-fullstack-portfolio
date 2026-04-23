import { useEffect, useState } from "react";
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

  if (!data) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  return (
    <div style={styles.container}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.name}>{data.name}</h1>
        <h3 style={styles.role}>{data.role}</h3>
      </section>

      {/* SKILLS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Skills</h2>
        <div style={styles.grid}>
          {data.skills?.map((skill, index) => (
            <div key={index} style={styles.card}>
              {skill.name || skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        <div style={styles.grid}>
          {data.projects?.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.technologies && (
                <div style={styles.tags}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

/* ===== INLINE STYLES ===== */
const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },

  hero: {
    textAlign: "center",
    marginBottom: "50px",
  },

  name: {
    fontSize: "40px",
    margin: "0",
    color: "#111827",
  },

  role: {
    fontSize: "20px",
    color: "#6b7280",
  },

  section: {
    marginBottom: "40px",
  },

  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#111827",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontWeight: "bold",
  },

  projectCard: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  tags: {
    marginTop: "10px",
  },

  tag: {
    display: "inline-block",
    background: "#e5e7eb",
    padding: "5px 10px",
    borderRadius: "20px",
    marginRight: "5px",
    fontSize: "12px",
  },
};