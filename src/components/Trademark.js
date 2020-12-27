const Trademark = () => {
  return (
    <section className="has-text-centered" style={styles.section}>
      <div>
        &#169; {new Date().getFullYear()} - <a href="https://sevcik.dev">sevcik.dev</a>
      </div>
    </section>
  );
};

export default Trademark;

const styles = {
  section: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
};
