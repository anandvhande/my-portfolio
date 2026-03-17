import TriangularPercolation from "@/components/TriangularPercolation";

const basePath =
  process.env.NODE_ENV === "production" ? "/my-portfolio" : "";

const paper = {
  title: "Syracuse Maps as Non-singular Power-Bounded Transformations and Their Inverse Maps",
  link: "https://arxiv.org/abs/2208.11801",
};

export default function Home() {
  return (
    <main style={styles.pageBackground}>
      <div style={styles.main}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.name}>Anand Hande</h1>
            <p style={styles.role}>PhD Student in Mathematics</p>
            <p style={styles.affiliation}>
              Department of Mathematics, Georgia Institute of Technology
            </p>

            <p style={styles.cv}>
              <a href={`${basePath}/cv.pdf`} style={styles.link}>
                Curriculum Vitae
              </a>
            </p>
          </div>

          <nav style={styles.nav}>
            <a href="#research" className="navLink">
              Research
            </a>
            <a href="#papers" className="navLink">
              Papers
            </a>
            <a href="#contact" className="navLink">
              Contact
            </a>
          </nav>
        </header>

        <section style={styles.profileSection}>
          <div style={styles.imageWrapper}>
            <img
              src={`${basePath}/headshot.jpg`}
              style={styles.headshot}
            />
          </div>

          <div style={styles.profileText}>
            <h2 style={styles.profileHeading}>About</h2>
            <p style={styles.paragraph}>
              I am a 3rd year math phd student at Georgia Tech studying probability theory, specifically percolation.  My advisor is Michael Damron.  Currently, I am working on problems in dynamical percolation.  
            </p>
            <p style={styles.paragraph}>
              Before grad school, I studied Mathematics (B.S) and Computer Science (B.S) at UNC Chapel Hill.  There, I worked with Dr. Idris Assani in number theory and ergodic theory.
            </p>
            <p style={styles.paragraph}>
              Outside of math, I enjoy playing tennis and running.
            </p>
          </div>
        </section>

        <section id="research" style={styles.sectionCard}>
  <h2 style={styles.sectionTitle}>Research Interests</h2>
  <ul style={styles.list}>
    <li>Bernoulli percolation</li>
    <li>First-passage percolation</li>
    <li>Noise sensitivity and dynamical percolation</li>
  </ul>

</section>

        <section id="papers" style={styles.sectionCard}>
          <h2 style={styles.sectionTitle}>Papers</h2>
          <article style={styles.itemCard}>
            <h3 style={styles.itemTitle}>{paper.title}</h3>
            <a href={paper.link} style={styles.link}>
              arxiv link →
            </a>
          </article>
        </section>

        <section id="contact" style={styles.sectionCard}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <p style={styles.paragraph}>
            Email:{" "}
            <a href="ahande3@gatech.edu" style={styles.link}>
              ahande3@gatech.edu
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  pageBackground: {
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom, #eef6ff 0%, #f8fbff 18%, #ffffff 45%)",
  },
  main: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "48px 24px 80px",
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    color: "#111827",
    lineHeight: 1.7,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 24,
    flexWrap: "wrap",
    padding: "28px 32px",
    marginBottom: 32,
    border: "1px solid #dbeafe",
    borderRadius: 20,
    background: "rgba(255,255,255,0.88)",
    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.08)",
    backdropFilter: "blur(6px)",
  },
  name: {
    fontSize: "2.6rem",
    margin: 0,
    fontWeight: 600,
    color: "#0f172a",
  },
  role: {
    margin: "8px 0 4px",
    fontSize: "1.08rem",
    color: "#1d4ed8",
    fontWeight: 500,
  },
  affiliation: {
    margin: 0,
    color: "#475569",
  },
  cv: {
    marginTop: 14,
  },
  nav: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginTop: 8,
  },
  profileSection: {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gap: 32,
    alignItems: "start",
    marginBottom: 32,
    padding: "28px 32px",
    border: "1px solid #dbeafe",
    borderRadius: 20,
    background: "#ffffff",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
  },
  imageWrapper: {
    width: "100%",
  },
  headshot: {
    width: "100%",
    maxWidth: 220,
    borderRadius: 16,
    display: "block",
    border: "3px solid #dbeafe",
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.12)",
  },
  profileText: {
    minWidth: 0,
  },
  profileHeading: {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginTop: 0,
    marginBottom: 16,
    color: "#0f172a",
  },
  sectionCard: {
    marginTop: 24,
    padding: "28px 32px",
    border: "1px solid #dbeafe",
    borderRadius: 20,
    background: "#ffffff",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
  },
  sectionTitle: {
    fontSize: "1.45rem",
    fontWeight: 600,
    marginTop: 0,
    marginBottom: 16,
    color: "#0f172a",
    borderBottom: "1px solid #e0ecff",
    paddingBottom: 10,
  },
  paragraph: {
    fontSize: "1rem",
    color: "#334155",
    marginBottom: 14,
  },
  list: {
    paddingLeft: 22,
    color: "#334155",
    margin: 0,
  },
  itemCard: {
    padding: "4px 0 0",
  },
  itemTitle: {
    margin: "0 0 6px",
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#0f172a",
  },
  itemMeta: {
    margin: "0 0 8px",
    color: "#64748b",
    fontStyle: "italic",
  },
  link: {
    color: "#1d4ed8",
    textDecoration: "none",
    fontWeight: 500,
  },
};