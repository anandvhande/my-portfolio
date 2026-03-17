const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and what you learned.",
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "Another project with a concise explanation and your role.",
    link: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: "Something interactive, visual, or technically interesting.",
    link: "https://github.com/yourusername/project-three",
  },
];

export default function Home() {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <p style={styles.kicker}>Your Name</p>
        <h1 style={styles.title}>Frontend developer building clean, fast web experiences.</h1>
        <p style={styles.subtitle}>
          I’m brushing up my React and Next.js skills by building polished, practical projects.
        </p>

        <div style={styles.actions}>
          <a href="#projects" style={styles.primaryButton}>View Projects</a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            style={styles.secondaryButton}
          >
            GitHub
          </a>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About</h2>
        <p style={styles.paragraph}>
          I enjoy building responsive interfaces, learning modern frontend patterns,
          and turning ideas into simple, usable products.
        </p>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <div style={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardText}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={styles.cardLink}
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.paragraph}>
          Email: <a href="mailto:you@example.com">you@example.com</a>
        </p>
        <p style={styles.paragraph}>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noreferrer"
          >
            yourusername
          </a>
        </p>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "64px 24px 96px",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: "#111827",
    lineHeight: 1.6,
  },
  hero: {
    padding: "48px 0 32px",
  },
  kicker: {
    fontSize: 14,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#2563eb",
    marginBottom: 12,
  },
  title: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    lineHeight: 1.05,
    margin: "0 0 16px",
  },
  subtitle: {
    fontSize: "1.125rem",
    maxWidth: 700,
    color: "#4b5563",
    marginBottom: 24,
  },
  actions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  primaryButton: {
    background: "#111827",
    color: "white",
    padding: "12px 18px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
  },
  secondaryButton: {
    border: "1px solid #d1d5db",
    color: "#111827",
    padding: "12px 18px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
  },
  section: {
    marginTop: 56,
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginBottom: 16,
  },
  paragraph: {
    color: "#374151",
    maxWidth: 760,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 20,
    background: "#fff",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: "1.1rem",
  },
  cardText: {
    color: "#4b5563",
    marginBottom: 14,
  },
  cardLink: {
    textDecoration: "none",
    fontWeight: 600,
  },
};