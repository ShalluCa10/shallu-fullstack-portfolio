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

        <div style={styles.socials}>
          <a href="#" style={styles.link}>GitHub</a>
          <a href="#" style={styles.link}>LinkedIn</a>
          <a href="#" style={styles.link}>Instagram</a>
        </div>
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
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={styles.section}>
        <h2 style={styles.title}>Contact Me</h2>

        <form style={styles.form}>
          <input style={styles.input} placeholder="Your Name" />
          <input style={styles.input} placeholder="Your Email" />
          <textarea style={styles.textarea} placeholder="Message..." rows="5" />
          <button style={styles.button}>Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} {data.name} | Built with React 💖</p>
      </footer>
    </div>
  );
};

export default Home;

/* 💖 STYLES */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "linear-gradient(135deg, #ffe4f2, #ffffff)",
    minHeight: "100vh",
    padding: "30px",
    color: "#111",
  },

  loading: {
    textAlign: "center",
    marginTop: "50px",
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
  },

  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },

  section: {
    marginBottom: "40px",
  },

  title: {
    fontSize: "26px",
    marginBottom: "20px",
    color: "#ff1493",
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

  form: {
    maxWidth: "500px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ff69b4",
  },

  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ff69b4",
  },

  button: {
    padding: "12px",
    background: "#ff1493",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    color: "#666",
  },
};