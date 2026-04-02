export default function About({ navigate }) {
  const team = [
    {
      avatar: 'AM', name: 'Dr. Arjun Mehta', title: 'Founder & CEO',
      desc: '15+ years of experience in medical innovation and healthcare entrepreneurship. Pioneer in integrating AI with clinical diagnostics.',
      color: 'linear-gradient(135deg, #c9a227, #f0c940)'
    },
    {
      avatar: 'PS', name: 'Priya Sharma', title: 'Head of Administration',
      desc: 'Expert in healthcare operations management with a proven track record of scaling medical organizations across emerging markets.',
      color: 'linear-gradient(135deg, #1565c0, #00b4d8)'
    },
    {
      avatar: 'VD', name: 'Vikram Desai', title: 'Chief Financial Auditor',
      desc: 'Specialist in medical finance compliance with 12 years of experience ensuring fiscal integrity in healthcare systems.',
      color: 'linear-gradient(135deg, #0d9488, #00b4d8)'
    },
    {
      avatar: 'SP', name: 'Sneha Patel', title: 'Operations Lead',
      desc: 'Driving ground-level healthcare delivery with expertise in process optimization and cross-functional team coordination.',
      color: 'linear-gradient(135deg, #64748b, #94a3b8)'
    },
  ];

  const values = [
    { icon: '💡', title: 'Innovation', desc: 'Constantly pushing the boundaries of what is possible in healthcare technology and research.' },
    { icon: '🎯', title: 'Integrity', desc: 'Operating with unwavering ethical standards in every decision, partnership, and patient interaction.' },
    { icon: '⭐', title: 'Excellence', desc: 'Setting the highest standards in medical research, clinical outcomes, and patient satisfaction.' },
    { icon: '🤲', title: 'Compassion', desc: 'Putting humanity at the heart of every innovation, ensuring healthcare serves people first.' },
  ];

  const milestones = [
    { year: '2022', month: 'Jan', title: 'Company Founded', desc: 'Platinum Medi Science Pvt. Ltd. incorporated in Mumbai by Dr. Arjun Mehta with a vision to transform Indian healthcare.' },
    { year: '2022', month: 'Jul', title: 'Core Team Assembled', desc: 'Assembled a world-class team of 12 medical professionals, researchers, and technologists.' },
    { year: '2022', month: 'Dec', title: 'First Research Partnership', desc: 'Signed landmark research collaboration with two top-tier Indian medical institutions.' },
    { year: '2023', month: 'Mar', title: 'International Expansion', desc: 'Extended operations to 5 countries across South and Southeast Asia, establishing regional hubs.' },
    { year: '2023', month: 'Sep', title: '₹2 Cr Revenue Milestone', desc: 'Achieved ₹2 Crore in annual revenue — a testament to our growing impact and market trust.' },
    { year: '2024', month: 'Jan', title: 'Global Reach: 12 Countries', desc: 'Expanded footprint to 12 countries, partnering with 30+ healthcare organizations worldwide.' },
    { year: '2024', month: 'Nov', title: '₹4.2 Cr Revenue & 47 Experts', desc: 'Surpassed ₹4.2 Crore in revenue with 47 medical experts driving our mission forward.' },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #1565c0 50%, #0d2137 100%)',
        padding: '100px 0 80px', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(0,180,216,0.2) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="badge" style={{ background: 'rgba(201,162,39,0.2)', color: '#f0c940', border: '1px solid rgba(201,162,39,0.3)', marginBottom: '20px' }}>
            Est. 2022 · Mumbai, India
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '20px', lineHeight: 1.15 }}>
            About <span style={{ background: 'linear-gradient(135deg, #00b4d8, #c9a227)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Platinum Medi Science</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            A story of passion, innovation, and an unwavering commitment to transforming healthcare for billions.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <span className="badge badge-info" style={{ marginBottom: '16px' }}>Our Story</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>From Vision to Reality</h2>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.95rem' }}>
                Platinum Medi Science was born in January 2022 from a simple yet profound belief: that world-class healthcare should not be a privilege. Dr. Arjun Mehta, after witnessing firsthand the disparities in healthcare access across India and neighbouring countries, set out to build a company that could bridge that gap through technology and innovation.
              </p>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.95rem' }}>
                Starting from a small office in Mumbai with a team of passionate professionals, we rapidly grew into a global medical innovation company. Our research programs, diagnostic solutions, and healthcare partnerships have touched thousands of lives across 12 countries in under three years.
              </p>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Today, Platinum Medi Science stands as a beacon of what is possible when compassion meets cutting-edge science. With ₹4.2 Crore in revenue and 47 world-class medical experts on our team, we are only just getting started on our journey to transform global healthcare.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{
                background: 'linear-gradient(135deg, #0d2137, #1565c0)',
                borderRadius: '20px', padding: '48px 40px', color: 'white', textAlign: 'center'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🏥</div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#00b4d8', marginBottom: '8px' }}>2022</div>
                <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>Year of Founding</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', textAlign: 'center' }}>
                  {[['47+','Experts'],['12','Countries'],['₹4.2Cr','Revenue'],['128','Programs']].map(([v,l]) => (
                    <div key={l} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 8px' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#c9a227' }}>{v}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            <div className="card" style={{ borderLeft: '4px solid #1565c0', padding: '40px 36px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔭</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                To be the world's most trusted healthcare innovation company by 2030, setting the global standard for medical excellence and accessible healthcare technology.
              </p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid #00b4d8', padding: '40px 36px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎯</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>Our Mission</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                To democratize healthcare by leveraging technology, research, and global innovation — making world-class medical solutions accessible to every corner of the globe, regardless of geography or economic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '36px 24px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.88rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="badge badge-navy" style={{ marginBottom: '16px' }}>The People Behind the Vision</span>
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">Meet the passionate innovators driving Platinum Medi Science forward.</p>
          </div>
          <div className="grid-4">
            {team.map((member, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '36px 24px' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%', background: member.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 800, fontSize: '1.3rem',
                  margin: '0 auto 16px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                }}>
                  {member.avatar}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-cyan)', fontWeight: 600, marginBottom: '12px' }}>{member.title}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS TIMELINE */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '16px' }}>Our Journey</span>
            <h2 className="section-title">Milestones & Achievements</h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #1565c0, #00b4d8)', transform: 'translateX(-50%)' }} />
            {milestones.map((m, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '32px', position: 'relative'
              }}>
                <div style={{ width: '45%', [i % 2 === 0 ? 'paddingRight' : 'paddingLeft']: '28px' }}>
                  <div className="card" style={{ padding: '20px 24px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="badge badge-info" style={{ fontSize: '0.7rem' }}>{m.year}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>{m.month}</span>
                    </div>
                    <h4 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem', marginBottom: '6px' }}>{m.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div style={{
                  position: 'absolute', left: '50%', top: '20px', width: 14, height: 14,
                  borderRadius: '50%', background: '#1565c0', border: '3px solid white',
                  transform: 'translateX(-50%)', boxShadow: '0 0 0 3px rgba(21,101,192,0.3)'
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-navy)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>Be Part of Our Story</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '32px', maxWidth: 480, margin: '0 auto 32px' }}>
            Explore investment opportunities and help us scale our impact to every corner of the world.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('investor')}>Explore Investment Opportunities →</button>
        </div>
      </section>
    </div>
  );
}
