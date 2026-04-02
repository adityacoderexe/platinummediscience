export default function Products() {
  return (
    <div>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #1565c0 60%, #0d2137 100%)',
        padding: '80px 0 60px', textAlign: 'center'
      }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(201,162,39,0.2)', color: '#f0c940', border: '1px solid rgba(201,162,39,0.3)', marginBottom: '16px' }}>
            Innovation in Progress
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
            Our Products & Solutions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 540, margin: '0 auto' }}>
            Groundbreaking medical innovations currently in development
          </p>
        </div>
      </section>

      {/* EMPTY STATE */}
      <section className="section" style={{ background: 'var(--color-bg)', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            {/* Animated flask icon */}
            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
              <div className="animate-pulse" style={{
                width: 120, height: 120, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(21,101,192,0.1), rgba(0,180,216,0.15))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid rgba(0,180,216,0.2)'
              }}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M22 8v20L10 44a4 4 0 003.3 6.3h33.4A4 4 0 0050 44L38 28V8" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 8h20" stroke="#1565c0" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="24" cy="40" r="3" fill="rgba(0,180,216,0.5)"/>
                  <circle cx="36" cy="44" r="2" fill="rgba(201,162,39,0.5)"/>
                  <circle cx="30" cy="38" r="2.5" fill="rgba(21,101,192,0.4)"/>
                </svg>
              </div>
            </div>

            <span className="badge badge-gold" style={{ marginBottom: '20px', fontSize: '0.9rem', padding: '8px 20px' }}>
              🔬 Stay Tuned
            </span>

            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '20px' }}>
              Products Under Development
            </h2>
            <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '40px' }}>
              We are working on groundbreaking medical products and solutions. This section will be updated soon with our revolutionary healthcare offerings that will change how the world experiences medicine.
            </p>

            <div className="grid-3" style={{ gap: '16px', marginBottom: '40px' }}>
              {[
                { icon: '🧬', label: 'AI Diagnostics' },
                { icon: '💊', label: 'Precision Drugs' },
                { icon: '🩺', label: 'Smart Devices' },
              ].map((item, i) => (
                <div key={i} className="card-flat" style={{
                  background: 'white', borderRadius: '12px', padding: '20px',
                  border: '1px solid #e2e8f0', textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-light)' }}>{item.label}</div>
                  <div className="badge badge-warning" style={{ marginTop: '8px', fontSize: '0.7rem' }}>Coming Soon</div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'white', borderRadius: '12px', padding: '24px',
              border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center',
              gap: '16px', textAlign: 'left'
            }}>
              <div style={{ fontSize: '2rem', flexShrink: 0 }}>📬</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: '4px' }}>Get Notified</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                  Contact us at <a href="mailto:info@platinummediscience.com" style={{ color: 'var(--color-cyan)', textDecoration: 'none' }}>info@platinummediscience.com</a> to learn about our upcoming product launches.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
