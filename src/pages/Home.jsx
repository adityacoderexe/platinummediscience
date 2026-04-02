import { useEffect, useRef, useState } from 'react';

export default function Home({ navigate }) {
  const statsRef = useRef(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState({ revenue: 0, experts: 0, countries: 0, programs: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts({
        revenue: Math.round(4.2 * eased * 10) / 10,
        experts: Math.round(47 * eased),
        countries: Math.round(12 * eased),
        programs: Math.round(128 * eased),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  // Animated floating medical icons
  const FloatingIcons = () => (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {[
        { top: '15%', left: '8%', size: 48, delay: '0s', color: 'rgba(0,180,216,0.15)' },
        { top: '25%', right: '10%', size: 60, delay: '1s', color: 'rgba(201,162,39,0.15)' },
        { top: '60%', left: '5%', size: 36, delay: '2s', color: 'rgba(0,180,216,0.1)' },
        { top: '70%', right: '8%', size: 44, delay: '0.5s', color: 'rgba(201,162,39,0.1)' },
        { top: '40%', left: '15%', size: 28, delay: '1.5s', color: 'rgba(255,255,255,0.08)' },
        { top: '50%', right: '15%', size: 32, delay: '2.5s', color: 'rgba(255,255,255,0.08)' },
      ].map((item, i) => (
        <div key={i} style={{
          position: 'absolute', ...item,
          animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: item.delay,
        }}>
          <svg width={item.size} height={item.size} viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill={item.color}/>
            <rect x="13" y="6" width="6" height="20" rx="2" fill={item.color.replace('0.1', '0.4').replace('0.15', '0.5').replace('0.08', '0.3')}/>
            <rect x="6" y="13" width="20" height="6" rx="2" fill={item.color.replace('0.1', '0.4').replace('0.15', '0.5').replace('0.08', '0.3')}/>
          </svg>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', padding: '80px 0 60px'
      }}>
        <FloatingIcons />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="animate-fadeIn">
            <span className="badge badge-info" style={{ marginBottom: '24px', fontSize: '0.8rem', background: 'rgba(0,180,216,0.2)', color: '#00b4d8', border: '1px solid rgba(0,180,216,0.3)' }}>
              🌟 Leading Medical Innovation Since 2022
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 800, color: 'white',
            lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em'
          }}>
            Revolutionizing Healthcare<br/>
            <span style={{ background: 'linear-gradient(135deg, #00b4d8, #c9a227)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Across The Globe
            </span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.8)',
            maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.7
          }}>
            Platinum Medi Science is at the forefront of medical innovation, bringing cutting-edge solutions to healthcare systems worldwide.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}
              onClick={() => document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Our Vision
            </button>
            <button className="btn btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}
              onClick={() => navigate('investor')}>
              Invest With Us →
            </button>
          </div>
          {/* Scroll indicator */}
          <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.6 }}>
            <span style={{ color: 'white', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: 2, height: 40, background: 'linear-gradient(to bottom, white, transparent)', borderRadius: 2 }} />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section ref={statsRef} style={{
        background: 'white', padding: '48px 0',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)', position: 'relative', zIndex: 2
      }}>
        <div className="container">
          <div className="grid-4">
            {[
              { value: `₹${counts.revenue} Cr`, label: 'Total Revenue', icon: '💰', color: '#c9a227' },
              { value: `${counts.experts}+`, label: 'Medical Experts', icon: '👨‍⚕️', color: '#1565c0' },
              { value: `${counts.countries}`, label: 'Countries Reached', icon: '🌍', color: '#00b4d8' },
              { value: `${counts.programs}+`, label: 'Active Programs', icon: '📋', color: '#16a34a' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '16px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '8px', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" id="mission-section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
            <span className="badge badge-info" style={{ marginBottom: '16px' }}>Our Mission</span>
            <h2 className="section-title">Democratizing Healthcare<br/>Through Innovation</h2>
            <p className="section-subtitle">
              To democratize healthcare by leveraging technology, research, and innovation — making world-class medical solutions accessible to every corner of the globe.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: (<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="rgba(21,101,192,0.1)"/><path d="M14 20h12M20 14v12" stroke="#1565c0" strokeWidth="2.5" strokeLinecap="round"/><circle cx="20" cy="20" r="7" stroke="#1565c0" strokeWidth="2"/></svg>),
                title: 'AI-Driven Diagnostics',
                desc: 'Leveraging artificial intelligence to revolutionize medical diagnostics, enabling faster and more accurate detection of diseases.',
                color: '#1565c0',
                bg: 'rgba(21,101,192,0.05)'
              },
              {
                icon: (<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="rgba(0,180,216,0.1)"/><path d="M14 26l4-4 3 3 5-7" stroke="#00b4d8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                title: 'Precision Medicine',
                desc: 'Tailoring medical treatment and prevention strategies to individual patient characteristics, genetics, and lifestyle factors.',
                color: '#00b4d8',
                bg: 'rgba(0,180,216,0.05)'
              },
              {
                icon: (<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="rgba(201,162,39,0.1)"/><circle cx="20" cy="20" r="8" stroke="#c9a227" strokeWidth="2"/><path d="M20 12v16M12 20h16" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round"/></svg>),
                title: 'Global Healthcare Network',
                desc: 'Building interconnected healthcare ecosystems across 12 countries to share knowledge, resources, and best practices.',
                color: '#c9a227',
                bg: 'rgba(201,162,39,0.05)'
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ background: item.bg, border: `1px solid ${item.color}20`, textAlign: 'center', padding: '36px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATION */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>Why Choose Us</span>
            <h2 className="section-title">Why Platinum Medi Science?</h2>
            <p className="section-subtitle">
              We combine cutting-edge technology with deep medical expertise to deliver transformative healthcare solutions.
            </p>
          </div>
          <div className="grid-4">
            {[
              { icon: '🔬', title: 'Medical Research', desc: 'Pioneering research programs driving the next generation of medical breakthroughs.', color: '#1565c0' },
              { icon: '💻', title: 'Tech Integration', desc: 'Seamlessly integrating advanced technology into every facet of healthcare delivery.', color: '#00b4d8' },
              { icon: '🤝', title: 'Global Partnerships', desc: 'Strategic alliances with leading healthcare organizations across 12 countries.', color: '#c9a227' },
              { icon: '❤️', title: 'Patient-First Approach', desc: 'Every innovation, every decision, every solution — centered around patient outcomes.', color: '#16a34a' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 24px', borderTop: `3px solid ${item.color}` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6, fontSize: '0.88rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'var(--color-navy)', padding: '80px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.15) 0%, transparent 70%)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
            Ready to Transform Healthcare Together?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', marginBottom: '40px', maxWidth: 560, margin: '0 auto 40px' }}>
            Join us in our mission to revolutionize the medical industry and make quality healthcare accessible globally.
          </p>
          <button className="btn btn-gold" style={{ fontSize: '1rem', padding: '16px 40px' }}
            onClick={() => navigate('investor')}>
            Contact Investors →
          </button>
        </div>
      </section>
    </div>
  );
}
