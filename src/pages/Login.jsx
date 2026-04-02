import { useState } from 'react';
import { USERS } from '../data/credentials.js';

function MedicalGraphic() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" opacity="0.15">
      <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2"/>
      <circle cx="100" cy="100" r="55" stroke="white" strokeWidth="1.5"/>
      <rect x="85" y="40" width="30" height="120" rx="8" fill="white"/>
      <rect x="40" y="85" width="120" height="30" rx="8" fill="white"/>
      <circle cx="100" cy="100" r="12" fill="white"/>
    </svg>
  );
}

const DEMO_USERS = [
  { role: 'CEO', id: 'CEO001', pw: 'PlatinumCEO@2024', color: '#c9a227' },
  { role: 'Admin', id: 'ADM001', pw: 'PlatinumAdmin@2024', color: '#1565c0' },
  { role: 'Auditor', id: 'AUD001', pw: 'PlatinumAudit@2024', color: '#0d9488' },
  { role: 'Staff', id: 'STF001', pw: 'PlatinumStaff@2024', color: '#64748b' },
];

export default function Login({ onLogin }) {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!employeeId.trim() || !password.trim()) {
      setError('Please enter both Employee ID and password.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const user = USERS.find(u => u.id === employeeId.trim() && u.password === password);
      if (user) {
        onLogin(user);
      } else {
        setError('Invalid Employee ID or password. Please try again.');
        setLoading(false);
      }
    }, 800);
  };

  const demoUsers = DEMO_USERS;

  return (
    <>
      <style>{`
        .login-container { display: flex; min-height: 100vh; }
        .login-left { flex: 1; background: linear-gradient(145deg, #0d2137 0%, #1565c0 60%, #0d2137 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px; position: relative; overflow: hidden; }
        .login-right { flex: 1; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px; overflow-y: auto; }
        .login-form-card { width: 100%; max-width: 420px; }
        .demo-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; margin-top: 24px; }
        .demo-row { display: grid; grid-template-columns: auto 1fr 1fr; gap: 8px; align-items: center; padding: 6px 0; border-bottom: 1px solid #f1f5f9; font-size: 0.78rem; }
        .demo-row:last-child { border-bottom: none; }
        .input-wrapper { position: relative; }
        .input-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 1rem; pointer-events: none; }
        .input-with-icon { padding-left: 42px !important; }
        .input-toggle { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #94a3b8; font-size: 0.85rem; padding: 4px; }
        @media (max-width: 768px) {
          .login-container { flex-direction: column; }
          .login-left { min-height: 180px; flex: none; padding: 32px 24px; }
          .login-right { padding: 32px 20px; }
        }
      `}</style>

      <div className="login-container">
        {/* LEFT PANEL */}
        <div className="login-left">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(0,180,216,0.2) 0%, transparent 60%)' }} />

          {/* Floating circles bg */}
          {[{w:300,h:300,top:'-100px',left:'-100px',op:0.04},{w:200,h:200,bottom:'-50px',right:'-50px',op:0.06}].map((c,i) => (
            <div key={i} style={{ position:'absolute', width:c.w, height:c.h, top:c.top, left:c.left, bottom:c.bottom, right:c.right, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.1)', opacity:c.op }} />
          ))}

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            {/* Logo */}
            <div style={{ marginBottom: '32px' }}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ marginBottom: '16px' }}>
                <rect width="64" height="64" rx="16" fill="url(#loginGrad)"/>
                <rect x="26" y="12" width="12" height="40" rx="4" fill="white"/>
                <rect x="12" y="26" width="40" height="12" rx="4" fill="white"/>
                <defs>
                  <linearGradient id="loginGrad" x1="0" y1="0" x2="64" y2="64">
                    <stop stopColor="#1565c0"/><stop offset="1" stopColor="#00b4d8"/>
                  </linearGradient>
                </defs>
              </svg>
              <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'white', lineHeight: 1.2 }}>
                <span style={{ background: 'linear-gradient(135deg, #c9a227, #f0c940)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Platinum</span>
                {' Medi Science'}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '6px' }}>
                Innovating Healthcare, Transforming Lives
              </p>
            </div>

            {/* Graphic */}
            <div className="animate-float" style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
              <MedicalGraphic />
            </div>

            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 320 }}>
              Your secure portal to manage medical operations, transactions, and healthcare program outcomes.
            </div>

            <div style={{ display: 'flex', gap: '24px', marginTop: '32px', justifyContent: 'center' }}>
              {[['🔒','Secure'],['⚡','Fast'],['🌍','Global']].map(([icon, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem' }}>{icon}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <div className="login-form-card">
            {/* Heading */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="url(#loginGrad2)"/>
                  <rect x="13" y="6" width="6" height="20" rx="2" fill="white"/>
                  <rect x="6" y="13" width="20" height="6" rx="2" fill="white"/>
                  <defs>
                    <linearGradient id="loginGrad2" x1="0" y1="0" x2="32" y2="32">
                      <stop stopColor="#1565c0"/><stop offset="1" stopColor="#00b4d8"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span style={{ fontWeight: 800, color: '#0d2137', fontSize: '1rem' }}>
                  <span style={{ color: '#c9a227' }}>Platinum</span> Medi Science
                </span>
              </div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0d2137', marginBottom: '6px' }}>Welcome Back</h1>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Sign in to your account to continue</p>
            </div>

            {/* Error */}
            {error && (
              <div style={{
                background: '#fee2e2', border: '1px solid #fecaca', borderRadius: '8px',
                padding: '12px 16px', marginBottom: '20px', color: '#dc2626',
                fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                ⚠️ {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Employee ID</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    className="form-input input-with-icon"
                    type="text"
                    value={employeeId}
                    onChange={e => { setEmployeeId(e.target.value); setError(''); }}
                    placeholder="e.g. CEO001"
                    autoComplete="username"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    className="form-input input-with-icon"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    placeholder="Enter your password"
                    style={{ paddingRight: '48px' }}
                    autoComplete="current-password"
                  />
                  <button type="button" className="input-toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', marginTop: '8px' }}
              >
                {loading ? '⏳ Signing in...' : '→ Sign In'}
              </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.8rem', color: '#94a3b8' }}>
              For account access, contact your administrator.
            </p>

            {/* Demo Credentials */}
            <div className="demo-card">
              <div style={{ fontWeight: 700, color: '#0d2137', fontSize: '0.85rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🔑</span> Demo Credentials
              </div>
              {demoUsers.map((u) => (
                <div key={u.id} className="demo-row">
                  <span className="badge" style={{ background: `${u.color}20`, color: u.color, border: `1px solid ${u.color}30`, fontSize: '0.65rem', padding: '2px 8px', whiteSpace: 'nowrap' }}>
                    {u.role}
                  </span>
                  <span style={{ color: '#1a2332', fontWeight: 600, fontFamily: 'monospace', fontSize: '0.78rem' }}>{u.id}</span>
                  <span style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '0.72rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.pw}</span>
                </div>
              ))}
              <p style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '10px', textAlign: 'center' }}>
                Click a row or type credentials manually to sign in
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
