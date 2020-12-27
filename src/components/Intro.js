const Intro = () => {
  return (
    <section className="hero is-fullheight-with-navbar" style={styles.hasBackground}>
      <img style={styles.isBackground} src="hero-bg.jpg" alt="fill background" />
      <div className="hero-body">
        <div className="container">
          <div className="columns is-6 is-centered" style={styles.introWrapper}>
            <div className="column has-text-centered">
              <div style={{ ...styles.commonIntro, ...styles.leftIntro }}>Jsme vlastníky koncese na výrobu a rozvod tepelné energie s instalovaným výkonem jednoho zdroje nad 50 kW</div>
            </div>
            <div className="column">
              <div style={{ ...styles.commonIntro, ...styles.rightIntro }}>
                <div>Máme přes 30 let zkušeností s:</div>
                <ul style={styles.bulletList}>
                  <li style={styles.bulletMargin}>Měřící a regulační technikou</li>
                  <li style={styles.bulletMargin}>Automatizaci , servisem a dispečinkem v teplárenské oblasti</li>
                  <li style={styles.bulletMargin}>Výrobou a rozvodem tepelné energie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

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
  introWrapper: {
    paddingTop: '100px',
  },
  commonIntro: {
    maxWidth: '300px',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    textShadow: '1px 1px 1px black',
    lineHeight: '1.7rem',
  },
  leftIntro: {
    position: 'relative',
    float: 'right',
    textAlign: 'right',
    marginTop: '-100px',
  },
  rightIntro: {
    position: 'relative',
    float: 'left',
    textAlign: 'left',
  },
  bulletList: {
    listStyle: 'circle',
  },
  bulletMargin: {
    marginLeft: '20px',
  },
};
