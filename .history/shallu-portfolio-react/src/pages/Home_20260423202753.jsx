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

  if (!data) return <h2 style={styles.loading}>Loading...</h2>;

  return (
    <div style={styles.page}>
      {/* HERO */}
      <header style={styles.hero}>
        <h1 style={styles.name}>{data.name}</h1>
        <p style={styles.role}>{data.role}</p>

      </header>

      {/* SKILLS */}
      <section style={styles.section}>
        <h2 style={styles.title}>Skills</h2>

        <div style={styles.grid}>
          {data.skills?.map((skill, i) => (
            <div key={i} style={styles.card}>
              {skill.name || skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={styles.section}>
        <h2 style={styles.title}>Projects</h2>

        <div style={styles.grid}>
          {data.projects?.map((project, i) => (
            <div key={i} style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{project.title}</h3>

              <p style={styles.projectDesc}>
                {project.description}
              </p>

              <div style={styles.tags}>
                {project.technologies?.map((tech, idx) => (
                  <span key={idx} style={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
               {/* LINKS */}
      <div style={styles.links}>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            style={styles.githubBtn}
          >
            GitHub
          </a>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            style={styles.liveBtn}
          >
            Live Demo
          </a>
        )}
      </div>
            </div>
          ))}
        </div>
      </section>

    
   
     {/* CONTACT INFO */}
<section style={styles.section}>
  <h2 style={styles.title}>Contact Me</h2>

  <div style={styles.contactBox}>
    <p>Email: shallusameera@gmail.com</p>

    <div style={styles.socials}>
          <a href="https://github.com/ShalluCa10" style={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/shallu-sameera-aa5b85280/" style={styles.link}>LinkedIn</a>
          <a href="https://www.instagram.com/sameera_always_smiles/" style={styles.link}>Instagram</a>
        </div>
  </div>
</section>
      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} {data.name} | Built with React 💖</p>
      </footer>
    </div>
  );
};

export default Home;

/*STYLES */
const styles = {
  page: {
  fontFamily: "Arial",
  background: "linear-gradient(135deg, #ffe4f2, #ffffff)",
  minHeight: "100vh",
  width: "100vw",
  margin: 0,
  padding: "30px",
  color: "#111",
  boxSizing: "border-box",
},


  loading: {
    textAlign: "center",
    marginTop: "50px",
  },
 title: {
  fontSize: "26px",
  marginBottom: "20px",
  color: "#ff1493",
  textAlign: "left",
},

  hero: {
    textAlign: "center",
    padding: "50px 20px",
    background: "linear-gradient(135deg, #ff69b4, #ff85c1)",
    borderRadius: "20px",
    color: "white",
    marginBottom: "40px",
  },

  name: {
    fontSize: "42px",
    margin: "0",
  },

  role: {
    fontSize: "18px",
    marginTop: "10px",
  },

  socials: {
  marginTop: "15px",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
},

 link: {
  color: "#ff1493",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "6px 12px",
  borderRadius: "20px",
  background: "#ffe4f2",
},
linkHover: {
  background: "#ff1493",
  color: "white",
},

  section: {
    marginBottom: "40px",
  },

  
links: {
  display: "flex",
  gap: "10px",
  marginTop: "15px",
},

githubBtn: {
  padding: "6px 12px",
  background: "#333",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "12px",
},

liveBtn: {
  padding: "6px 12px",
  background: "#ff1493",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "12px",
},
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(255, 20, 147, 0.15)",
    fontWeight: "bold",
    color: "#ff1493",
  },

  projectCard: {
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  projectTitle: {
    color: "#ff1493",
    marginBottom: "10px",
  },

  projectDesc: {
    fontSize: "14px",
    color: "#444",
  },

  tags: {
    marginTop: "10px",
  },

  tag: {
    display: "inline-block",
    background: "#ffe4f2",
    color: "#ff1493",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    marginRight: "5px",
    marginTop: "5px",
  },

contactBox: {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(255, 20, 147, 0.15)",
  textAlign: "center",
  color: "#444",
},

  footer: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    color: "#666",
  },
};