import { useState, useEffect } from 'react';

export default function DashboardLayout({ currentUser, onLogout, children, activePage, setActivePage }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const NAV_ITEMS = {
    CEO: [
      { id: 'overview', label: 'Overview', icon: '📊' },
      { id: 'performance', label: 'Performance', icon: '📈' },
      { id: 'staff', label: 'Staff Management', icon: '👥' },
      { id: 'financial', label: 'Financial Reports', icon: '💰' },
      { id: 'audit', label: 'Audit Trail', icon: '🔍' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
    ],
    Admin: [
      { id: 'overview', label: 'Overview', icon: '📊' },
      { id: 'staff', label: 'Staff', icon: '👥' },
      { id: 'auditors', label: 'Auditors', icon: '🔍' },
      { id: 'reports', label: 'Reports', icon: '📋' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
    ],
    Auditor: [
      { id: 'overview', label: 'Overview', icon: '📊' },
      { id: 'transactions', label: 'Transactions', icon: '💳' },
      { id: 'flagged', label: 'Flagged Items', icon: '🚩' },
      { id: 'reports', label: 'Reports', icon: '📋' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
    ],
    Staff: [
      { id: 'overview', label: 'Overview', icon: '📊' },
      { id: 'new-transaction', label: 'New Transaction', icon: '➕' },
      { id: 'history', label: 'Transaction History', icon: '📋' },
      { id: 'workers', label: 'Workers', icon: '👷' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
    ],
  };

  const ROLE_COLORS = {
    CEO: { bg: 'linear-gradient(135deg, #c9a227, #f0c940)', label: 'badge-gold' },
    Admin: { bg: 'linear-gradient(135deg, #1565c0, #00b4d8)', label: 'badge-info' },
    Auditor: { bg: 'linear-gradient(135deg, #0d9488, #00b4d8)', label: 'badge-teal' },
    Staff: { bg: 'linear-gradient(135deg, #64748b, #94a3b8)', label: 'badge-navy' },
  };

  const navItems = NAV_ITEMS[currentUser.role] || NAV_ITEMS.Staff;
  const roleColor = ROLE_COLORS[currentUser.role] || ROLE_COLORS.Staff;
  const activeLabel = navItems.find(n => n.id === activePage)?.label || 'Overview';

  const formatDate = (date) => date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const formatTime = (date) => date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const logoIconJSX = (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#sideGrad)"/>
      <rect x="13" y="6" width="6" height="20" rx="2" fill="white"/>
      <rect x="6" y="13" width="20" height="6" rx="2" fill="white"/>
      <defs>
        <linearGradient id="sideGrad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#1565c0"/>
          <stop offset="1" stopColor="#00b4d8"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const sidebarJSX = (
    <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {logoIconJSX}
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'white', lineHeight: 1.2 }}>
              <span style={{ background: 'linear-gradient(135deg, #c9a227, #f0c940)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Platinum</span>
              {' Medi'}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Science</div>
          </div>
        </div>
      </div>

      {/* User */}
      <div className="sidebar-user">
        <div className="sidebar-avatar" style={{ background: roleColor.bg }}>
          {currentUser.avatar}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ color: 'white', fontWeight: 600, fontSize: '0.88rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {currentUser.name}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
            <span className={`badge ${roleColor.label}`} style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
              {currentUser.role}
            </span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-nav-item${activePage === item.id ? ' active' : ''}`}
            onClick={() => { setActivePage(item.id); setSidebarOpen(false); }}
          >
            <span style={{ fontSize: '1rem' }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className="sidebar-footer">
        <button
          onClick={onLogout}
          style={{
            display: 'flex', alignItems: 'center', gap: '10px', width: '100%',
            padding: '11px 14px', borderRadius: '6px',
            background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.25)',
            color: '#fca5a5', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500,
            fontFamily: 'inherit', transition: 'all 0.25s ease'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(220,38,38,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(220,38,38,0.15)'; }}
        >
          <span>🚪</span>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .sidebar { transform: translateX(-260px); transition: transform 0.3s ease; }
          .sidebar.open { transform: translateX(0); }
          .dashboard-content { margin-left: 0 !important; }
          .mobile-overlay { display: block !important; }
        }
        .mobile-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99; }
      `}</style>

      <div className="dashboard-layout">
        {sidebarJSX}

        {sidebarOpen && (
          <div className="mobile-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        <div className="dashboard-content">
          {/* Topbar */}
          <header className="dashboard-topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{
                  display: 'none', background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '1.4rem', color: '#64748b', padding: '4px'
                }}
                className="mobile-menu-btn"
              >
                ☰
              </button>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2332', lineHeight: 1 }}>{activeLabel}</h2>
                <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>{formatDate(currentTime)}</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>{formatTime(currentTime)}</span>
              <button style={{
                width: 38, height: 38, borderRadius: '50%', border: '1px solid #e2e8f0',
                background: 'white', cursor: 'pointer', fontSize: '1.1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>🔔</button>
              <div className="sidebar-avatar" style={{ width: 36, height: 36, fontSize: '0.8rem', background: roleColor.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
                {currentUser.avatar}
              </div>
            </div>
          </header>
          <style>{`@media (max-width: 768px) { .mobile-menu-btn { display: flex !important; } }`}</style>

          {/* Main content */}
          <main className="dashboard-main">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
