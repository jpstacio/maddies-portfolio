// src/pages/Home.tsx
export default function Home() {
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Welcome</h1>
      <p style={styles.subtitle}>Maddie's Website</p>
      <p style={styles.text}>
        This is my personal portfolio. Here you’ll find my projects, skills, and ways to get in touch.
      </p>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: '1rem',
  },
  text: {
    maxWidth: '600px',
    lineHeight: 1.6,
    color: '#444',
  },
};
