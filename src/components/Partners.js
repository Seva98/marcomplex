const Partners = () => {
  return (
    <section className="section">
      <div className="container ">
        <h2 class="is-size-1 has-text-centered" id="partners">
          PARTNEŘI
        </h2>
        <div className="tile is-ancestor is-vertical">
          <div className="tile">
            <div className="tile has-text-centered" style={styles.imgContainer}>
              <img style={styles.img} src="partners/amit.png" alt="Amit" />
            </div>
            <div className="tile" style={styles.imgContainer}>
              <img style={styles.img} src="partners/cressto.png" alt="Amit" />
            </div>
            <div className="tile" style={styles.imgContainer}>
              <img style={styles.img} src="partners/danfoss.png" alt="Amit" />
            </div>
            <div className="tile" style={styles.imgContainer}>
              <img style={styles.img} src="partners/kamstrup.png" alt="Amit" />
            </div>
          </div>
          <div className="tile">
            <div className="tile" style={styles.imgContainer}>
              <img style={styles.img} src="partners/ldm.png" alt="Amit" />
            </div>
            <div className="tile" style={styles.imgContainer}>
              <img style={styles.img} src="partners/mksoft.png" alt="Amit" />
            </div>
            <div className="tile" style={styles.imgContainer}>
              <img style={styles.img} src="partners/sensit.png" alt="Amit" />
            </div>
            <div className="tile" style={styles.imgContainer}>
              <img style={styles.img} src="partners/systherm.png" alt="Amit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

const styles = {
  imgContainer: {
    textAlign: 'center',
  },
  img: {
    objectFit: 'contain',
    padding: '20px',
  },
};
