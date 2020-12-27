const Contact = () => {
  return (
    <section className="hero" style={styles.hasBackground}>
      <img style={styles.isBackground} src="hero-bg.jpg" alt="fill background" />
      <div className="hero-body">
        <div className="container has-text-white" style={styles.content}>
          <h2 class="is-size-1 has-text-centered" id="contact">
            KONTAKT
          </h2>
          <div className="columns">
            <div className="column">
              <p className="title is-4 has-text-white">FIREMNÍ ÚDAJE</p>
              <p style={styles.text}>MAR-COMPLEX s.r.o.</p>
              <p style={styles.text}>IČ: 26807998</p>
              <p style={styles.text}>Právní forma: společnost s ručením omezeným. Společnost je registrovaná v Obchodním rejstříku vedeném KS Ostrava oddíl C, vložka 26488</p>
            </div>
            <div className="column">
              <p className="title is-4 has-text-white">KONTAKTNÍ ÚDAJE</p>
              <p style={styles.text}>
                <b>Fakturační adresa:</b>
              </p>
              <p style={styles.text}>
                MAR-COMPLEX s.r.o.
                <br />
                Beskydská 124
                <br />
                738 01
                <br />
                Frýdek-Místek
              </p>
              <p style={styles.text}>
                <b>Doručovací adresa:</b>
              </p>
              <p style={styles.text}>
                MAR-COMPLEX s.r.o.
                <br />
                Pionýrů 2069
                <br />
                738 01
                <br />
                Frýdek-Místek
              </p>
              <p style={styles.text}>IČ: 26807998</p>
              <p style={styles.text}>
                +420 777 097 207
                <br />– jednatel společnosti Ševčík Vlastislav
                <br />
                info@marcomplex.cz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const styles = {
  hasBackground: {
    overflow: 'hidden',
    position: 'relative',
  },
  isBackground: {
    opacity: '93%',
    objectPosition: 'center center',
    objectFit: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    maxWidth: '900px',
  },
  text: {
    marginBottom: '1rem',
    color: 'white',
  },
  marginBottom: {
    marginBottom: '1rem',
  },
};
