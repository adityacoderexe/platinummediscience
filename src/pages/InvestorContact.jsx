import { useState } from 'react';

export default function InvestorContact() {
  const [form, setForm] = useState({
    fullName: '', company: '', email: '', phone: '',
    investmentRange: '', areaOfInterest: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.company.trim()) errs.company = 'Company/Organization is required';
    if (!form.email.trim()) errs.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email';
    if (!form.investmentRange) errs.investmentRange = 'Please select an investment range';
    if (!form.areaOfInterest) errs.areaOfInterest = 'Please select an area of interest';
    if (!form.message.trim()) errs.message = 'Please provide your investment proposal';
    else if (form.message.trim().length < 30) errs.message = 'Message must be at least 30 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', background: 'var(--color-bg)' }}>
        <div style={{ textAlign: 'center', maxWidth: 540, background: 'white', borderRadius: '20px', padding: '60px 48px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '2.5rem' }}>
            ✅
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '16px' }}>
            Inquiry Submitted!
          </h2>
          <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, marginBottom: '32px', fontSize: '1rem' }}>
            Thank you, <strong>{form.fullName}</strong>! Our investor relations team will contact you within <strong>48 hours</strong> to discuss your investment interest.
          </p>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '16px 20px', marginBottom: '32px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#15803d', marginBottom: '8px', fontSize: '0.9rem' }}>What happens next?</div>
            {['Our team reviews your inquiry within 24 hours', 'You receive a personalized investment overview', 'We schedule a call to discuss opportunities'].map((step, i) => (
              <div key={i} style={{ fontSize: '0.85rem', color: '#166534', padding: '3px 0' }}>✓ {step}</div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ fullName: '', company: '', email: '', phone: '', investmentRange: '', areaOfInterest: '', message: '' }); }}>
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #1565c0 50%, #0d9488 100%)',
        padding: '80px 0 60px', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(201,162,39,0.2) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="badge" style={{ background: 'rgba(201,162,39,0.2)', color: '#f0c940', border: '1px solid rgba(201,162,39,0.3)', marginBottom: '16px' }}>
            💼 Investor Relations
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
            Invest in the Future<br/>of Healthcare
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Join a growing network of investors backing the next generation of medical innovation.
          </p>
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Why Invest With Us?</h2>
          </div>
          <div className="grid-3" style={{ marginBottom: '0' }}>
            {[
              { icon: '📈', title: 'Strong Growth Trajectory', desc: 'From ₹0 to ₹4.2 Crore in under 3 years, with a clear path to ₹20 Crore by 2026.' },
              { icon: '🌍', title: 'Global Market Opportunity', desc: 'Operating across 12 countries in a global healthcare market worth over $10 trillion.' },
              { icon: '🔬', title: 'Innovation-Driven Model', desc: 'Proprietary research programs and technology partnerships creating defensible competitive moats.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '36px 28px', borderTop: `3px solid var(--color-cyan)` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '10px', fontSize: '1.05rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="badge badge-info" style={{ marginBottom: '16px' }}>Investment Inquiry</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Submit Your Inquiry</h2>
              <p style={{ color: 'var(--color-text-light)' }}>Fill out the form below and our investor relations team will be in touch shortly.</p>
            </div>

            <div className="card" style={{ padding: '48px' }}>
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className={`form-input${errors.fullName ? ' error' : ''}`} type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Dr. John Smith" />
                    {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company / Organization *</label>
                    <input className={`form-input${errors.company ? ' error' : ''}`} type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Healthcare Ltd." />
                    {errors.company && <span className="form-error">{errors.company}</span>}
                  </div>
                </div>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className={`form-input${errors.email ? ' error' : ''}`} type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Investment Range *</label>
                    <select className={`form-input form-select${errors.investmentRange ? ' error' : ''}`} name="investmentRange" value={form.investmentRange} onChange={handleChange}>
                      <option value="">Select range...</option>
                      <option value="under-10l">Under ₹10 Lakhs</option>
                      <option value="10l-50l">₹10L – ₹50L</option>
                      <option value="50l-1cr">₹50L – ₹1 Crore</option>
                      <option value="1cr-5cr">₹1 Cr – ₹5 Crore</option>
                      <option value="5cr-plus">₹5 Crore+</option>
                      <option value="custom">Custom / Discuss</option>
                    </select>
                    {errors.investmentRange && <span className="form-error">{errors.investmentRange}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Area of Interest *</label>
                    <select className={`form-input form-select${errors.areaOfInterest ? ' error' : ''}`} name="areaOfInterest" value={form.areaOfInterest} onChange={handleChange}>
                      <option value="">Select area...</option>
                      <option value="rd">Research & Development</option>
                      <option value="operations">Operations</option>
                      <option value="technology">Technology</option>
                      <option value="global">Global Expansion</option>
                      <option value="all">All Areas</option>
                    </select>
                    {errors.areaOfInterest && <span className="form-error">{errors.areaOfInterest}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Message / Investment Proposal *</label>
                  <textarea
                    className={`form-input${errors.message ? ' error' : ''}`}
                    name="message" value={form.message} onChange={handleChange}
                    rows={5} placeholder="Please describe your investment interest, any specific areas of focus, and any questions you may have..."
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem', justifyContent: 'center' }} disabled={submitting}>
                  {submitting ? '⏳ Submitting...' : '📨 Submit Investment Inquiry'}
                </button>
              </form>
            </div>

            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
              Your information is kept strictly confidential. We respond within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
