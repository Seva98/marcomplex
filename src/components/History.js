const History = () => {
  return (
    <section className="hero" style={styles.hasBackground}>
      <img style={styles.isBackground} src="hero-bg.jpg" alt="fill background" />
      <div className="hero-body">
        <div className="container has-text-white" style={styles.content}>
          <h2 class="is-size-1 has-text-centered" id="history">
            HISTORIE
          </h2>
          <p style={styles.text}>Firma MAR-COMPLEX s.r.o. vznikla 14.5.2003 jako přímé pokračování firmy fyzické osoby Ševčík Vlastislav – MARTECH ( zal. 1992).</p>
          <p style={{ ...styles.text, ...styles.marginBottom }}>
            Tomu předcházel zaměstnanecký poměr u firmy Závody průmyslové automatizace Praha ( 1976 - 1992) od montéra přes servis, zkušební provozy až po zahraničního šéfmontéra v různých oblastech
            průmyslu.
          </p>
          <h2 class="is-size-1 has-text-centered" id="work">
            ČINNOST
          </h2>
          <p style={styles.text}>
            Po celou dobu se věnujeme činnosti v oblasti Měření a regulace od projektů, dodávek, servisu až po dálkovou dispečerskou správu a to dnes především v teplárenské oblasti, kdy dodáváme
            rovněž zařízení na klíč včetně technologie.
          </p>
          <p style={styles.text}>
            Jsme vlastníky Koncese na výrobu a rozvod tepelné energie. Díky tomu můžeme poskytovat zákazníkům komplexní služby spojené s provozem tepelných zdrojů a jejich distribucí.
          </p>
          <p style={styles.text}>Provádíme i stavební dozor pro investory a generální dodavatele nejen v uvedené oblasti ale i v mnoha jiných, kde se instalují systémy MaR.</p>
        </div>
      </div>
    </section>
  );
};

export default History;

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
    maxWidth: '600px',
  },
  text: {
    textIndent: '22px',
    marginBottom: '1rem',
  },
  marginBottom: {
    marginBottom: '1rem',
  },
};
