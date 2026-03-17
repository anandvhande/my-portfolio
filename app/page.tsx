const papers = [
  {
    title: "Title of Paper One",
    venue: "Journal / Conference, 2025",
    description:
      "A short 1–2 sentence summary of the paper and its main contribution.",
    link: "#",
  },
  {
    title: "Title of Paper Two",
    venue: "Preprint, 2024",
    description:
      "A brief description of the problem studied and the main result.",
    link: "#",
  },
  {
    title: "Title of Paper Three",
    venue: "Conference Name, 2023",
    description:
      "A concise explanation of the topic, methods, or findings.",
    link: "#",
  },
];

const talks = [
  {
    title: "Talk Title",
    event: "Seminar or Conference Name, 2025",
  },
  {
    title: "Another Talk Title",
    event: "Department Colloquium, 2024",
  },
];

export default function Home() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.name}>Your Name</h1>
          <p style={styles.role}>
            PhD Student in Mathematics
          </p>
          <p style={styles.affiliation}>
            Department of Mathematics, Your University
          </p>
        </div>

        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#research" style={styles.navLink}>Research</a>
          <a href="#papers" style={styles.navLink}>Papers</a>
          <a href="#talks" style={styles.navLink}>Talks</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <p style={styles.intro}>
          I am a graduate student working in probability, statistical mechanics,
          and related areas. My research interests include percolation,
          random-cluster models, first-passage percolation, and interacting
          particle systems.
        </p>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About</h2>
        <p style={styles.paragraph}>
          I am a PhD student in the Department of Mathematics at Your University,
          advised by Professor Advisor Name. My work focuses on problems in
          probability theory and mathematical physics, especially questions
          involving phase transitions, connectivity, and geometric properties of
          random media.
        </p>
        <p style={styles.paragraph}>
          Before joining Your University, I studied at Previous Institution,
          where I completed a degree in Mathematics.
        </p>
      </section>

      <section id="research" style={styles.section}>
        <h2 style={styles.sectionTitle}>Research Interests</h2>
        <ul style={styles.list}>
          <li>Percolation theory</li>
          <li>Random-cluster and Ising-type models</li>
          <li>First-passage percolation</li>
          <li>Noise sensitivity and dynamical percolation</li>
          <li>Probability in statistical mechanics</li>
        </ul>
      </section>

      <section id="papers" style={styles.section}>
        <h2 style={styles.sectionTitle}>Papers & Preprints</h2>
        <div style={styles.items}>
          {papers.map((paper) => (
            <article key={paper.title} style={styles.itemCard}>
              <h3 style={styles.itemTitle}>{paper.title}</h3>
              <p style={styles.itemMeta}>{paper.venue}</p>
              <p style={styles.paragraph}>{paper.description}</p>
              <a href={paper.link} style={styles.link}>
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="talks" style={styles.section}>
        <h2 style={styles.sectionTitle}>Selected Talks</h2>
        <div style={styles.items}>
          {talks.map((talk) => (
            <article key={talk.title} style={styles.itemCard}>
              <h3 style={styles.itemTitle}>{talk.title}</h3>
              <p style={styles.itemMeta}>{talk.event}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.paragraph}>
          Email: <a href="mailto:you@example.com" style={styles.link}>you@example.com</a>
        </p>
        <p style={styles.paragraph}>
          CV: <a href="#" style={styles.link}>Curriculum Vitae</a>
        </p>
        <p style={styles.paragraph}>
          Google Scholar: <a href="#" style={styles.link}>Profile</a>
        </p>
        <p style={styles.paragraph}>
          arXiv: <a href="#" style={styles.link}>Author page</a>
        </p>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "48px 24px 80px",
    fontFamily:
      'Georgia, "Times New Roman", Times, serif',
    color: "#111827",
    lineHeight: 1.7,
    backgroundColor: "#ffffff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 24,
    flexWrap: "wrap",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: 24,
    marginBottom: 32,
  },
  name: {
    fontSize: "2.4rem",
    margin: 0,
    fontWeight: 600,
  },
  role: {
    margin: "8px 0 4px",
    fontSize: "1.1rem",
    color: "#374151",
  },
  affiliation: {
    margin: 0,
    color: "#4b5563",
  },
  nav: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginTop: 8,
  },
  navLink: {
    textDecoration: "none",
    color: "#1f2937",
    fontSize: "0.98rem",
  },
  hero: {
    marginBottom: 40,
  },
  intro: {
    fontSize: "1.15rem",
    color: "#1f2937",
    maxWidth: 760,
  },
  section: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: 16,
    borderBottom: "1px solid #f0f0f0",
    paddingBottom: 8,
  },
  paragraph: {
    fontSize: "1rem",
    color: "#374151",
    marginBottom: 14,
  },
  list: {
    paddingLeft: 22,
    color: "#374151",
  },
  items: {
    display: "grid",
    gap: 16,
  },
  itemCard: {
    padding: "16px 0",
    borderBottom: "1px solid #f3f4f6",
  },
  itemTitle: {
    margin: "0 0 6px",
    fontSize: "1.1rem",
    fontWeight: 600,
  },
  itemMeta: {
    margin: "0 0 8px",
    color: "#6b7280",
    fontStyle: "italic",
  },
  link: {
    color: "#1d4ed8",
    textDecoration: "none",
  },
};