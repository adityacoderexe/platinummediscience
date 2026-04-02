import { useState, useEffect } from 'react';

function MedicalIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="url(#navGrad)"/>
      <rect x="13" y="6" width="6" height="20" rx="2" fill="white"/>
      <rect x="6" y="13" width="20" height="6" rx="2" fill="white"/>
      <defs>
        <linearGradient id="navGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1565c0"/>
          <stop offset="1" stopColor="#00b4d8"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Products', page: 'products' },
  { label: 'Investors', page: 'investor' },
];

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = NAV_LINKS;

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <div className="navbar-logo" onClick={() => { navigate('home'); setMenuOpen(false); }}>
              <MedicalIcon />
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>
                <span style={{ background: 'linear-gradient(135deg, #c9a227, #f0c940)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Platinum</span>
                {' '}
                <span style={{ color: 'white' }}>Medi Science</span>
              </span>
            </div>

            {/* Desktop nav */}
            <div className="navbar-links" style={{ display: 'flex' }}>
              {links.map(link => (
                <button
                  key={link.page}
                  className={`navbar-link${currentPage === link.page ? ' active' : ''}`}
                  onClick={() => navigate(link.page)}
                >
                  {link.label}
                </button>
              ))}
              <button
                className={`navbar-link btn-login${currentPage === 'login' ? ' active' : ''}`}
                onClick={() => navigate('login')}
              >
                Login
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ display: 'none' }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: 'rgba(13,33,55,0.98)',
            padding: '16px 24px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            {links.map(link => (
              <button
                key={link.page}
                className={`navbar-link${currentPage === link.page ? ' active' : ''}`}
                onClick={() => { navigate(link.page); setMenuOpen(false); }}
                style={{ textAlign: 'left', justifyContent: 'flex-start' }}
              >
                {link.label}
              </button>
            ))}
            <button
              className="navbar-link btn-login"
              onClick={() => { navigate('login'); setMenuOpen(false); }}
              style={{ marginTop: '8px', textAlign: 'center', justifyContent: 'center' }}
            >
              Login
            </button>
          </div>
        )}
      </nav>
      <style>{`
        @media (max-width: 768px) {
          .navbar-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
