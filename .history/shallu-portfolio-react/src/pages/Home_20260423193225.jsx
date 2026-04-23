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

  if (!data) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.name}>{data.name}</h1>
        <p style={styles.role}>{data.role}</p>

        {/* SOCIAL LINKS */}
        <div style={styles.socials}>
          <a href="#" style={styles.link}>LinkedIn</a>
          <a href="#" style={styles.link}>GitHub</a>
          <a href="#" style={styles.link}>Instagram</a>
        </div>
      </section>

      {/* SKILLS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Skills 💻</h2>
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
        <h2 style={styles.heading}>Projects 🚀</h2>
        <div style={styles.grid}>
          {data.projects?.map((project, i) => (
            <div key={i} style={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Contact Me 💌</h2>

        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" rows="5" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;

/* 💖 STYLES */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "linear-gradient(135deg, #ffe4f2, #fff)",
    minHeight: "100vh",
    padding: "30px",
  },

  hero: {
    textAlign: "center",
    padding: "40px",
    background: "#ff69b4",
    color: "white",
    borderRadius: "20px",
    marginBottom: "30px",
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

  heading: {
    fontSize: "24px",
    color: "#ff1493",
    marginBottom: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontWeight: "bold",
    color: "#ff1493",
  },

  projectCard: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "500px",
    margin: "auto",
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
};