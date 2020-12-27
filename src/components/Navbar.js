const Navbar = () => {
  const navItems = [
    {
      name: 'Partneři',
      id: '#partners',
    },
    {
      name: 'Historie',
      id: '#history',
    },
    {
      name: 'Činnost',
      id: '#work',
    },
    {
      name: 'Reference',
      id: '#references',
    },
    {
      name: 'Kontakt',
      id: '#contact',
    },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <a href="#title">
              <span className="title" id="title">
                MAR-COMPLEX s.r.o.
              </span>
            </a>
          </div>
          <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarTarget" style={styles.burger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="navbar-menu" id="navbarTarget">
          <div className="navbar-end">
            {navItems.map(({ name, id }) => (
              <a key={name} className="navbar-item navbar-text" href={`${id}`}>
                {name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  burger: {
    background: 'white',
    border: 'none',
  },
};

// Burger toggle
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
