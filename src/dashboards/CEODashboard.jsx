import { COMPANY_STATS, STAFF_PERFORMANCE, RECENT_ACTIVITY } from '../data/mockData.js';

export default function CEODashboard({ currentUser }) {
  const performance = [
    { dept: 'Administration', manager: 'Priya Sharma', score: 96, status: 'Excellent' },
    { dept: 'Finance & Audit', manager: 'Vikram Desai', score: 94, status: 'Excellent' },
    { dept: 'Operations', manager: 'Sneha Patel', score: 91, status: 'Good' },
  ];

  const statusBadge = (status) => {
    if (status === 'Excellent') return <span className="badge badge-teal">{status}</span>;
    if (status === 'Good') return <span className="badge badge-info">{status}</span>;
    return <span className="badge badge-warning">{status}</span>;
  };

  return (
    <div>
      {/* Welcome */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)' }}>
          Welcome back, {currentUser.name} 👋
        </h1>
        <p style={{ color: 'var(--color-text-light)', marginTop: '4px', fontSize: '0.9rem' }}>
          Here's your company overview for today.
        </p>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        {[
          { label: 'Total Revenue', value: '₹4.2 Cr', icon: '💰', color: '#c9a227', bg: 'rgba(201,162,39,0.1)' },
          { label: 'Total Employees', value: '47', icon: '👥', color: '#1565c0', bg: 'rgba(21,101,192,0.1)' },
          { label: 'Active Transactions', value: '128', icon: '💳', color: '#00b4d8', bg: 'rgba(0,180,216,0.1)' },
          { label: 'Global Reach', value: '12 Countries', icon: '🌍', color: '#16a34a', bg: 'rgba(22,163,74,0.1)' },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '24px', position: 'relative', overflow: 'hidden', border: `1px solid ${s.color}20` }}>
            <div style={{ position: 'absolute', right: 20, top: 20, width: 48, height: 48, borderRadius: '10px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
              {s.icon}
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginTop: '6px', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        {/* Financial Summary */}
        <div className="card">
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>
            💰 Financial Summary
          </h3>
          {[
            { label: 'This Month', value: '₹38.5 Lakhs', color: 'var(--color-navy)' },
            { label: 'Last Month', value: '₹41.2 Lakhs', color: 'var(--color-text-light)' },
            { label: 'Growth', value: '-6.5%', color: '#dc2626' },
            { label: 'Q4 Target', value: '₹1.5 Cr', color: '#16a34a' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
              <span style={{ color: 'var(--color-text-light)', fontSize: '0.88rem' }}>{item.label}</span>
              <span style={{ fontWeight: 700, color: item.color, fontSize: '0.95rem' }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Auditor Performance */}
        <div className="card">
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>
            🔍 Audit Performance
          </h3>
          {[
            { label: 'Transactions Reviewed', value: '128', color: 'var(--color-navy)' },
            { label: 'Flagged', value: '3', color: '#dc2626' },
            { label: 'Pending', value: '12', color: '#d97706' },
            { label: 'Accuracy Rate', value: '97.8%', color: '#16a34a' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
              <span style={{ color: 'var(--color-text-light)', fontSize: '0.88rem' }}>{item.label}</span>
              <span style={{ fontWeight: 700, color: item.color, fontSize: '0.95rem' }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Table */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>
          📈 Department Performance Overview
        </h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Manager</th>
                <th>Performance Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {performance.map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{row.dept}</td>
                  <td>{row.manager}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ flex: 1, height: 6, background: '#f1f5f9', borderRadius: 3 }}>
                        <div style={{ width: `${row.score}%`, height: '100%', background: row.score >= 95 ? '#0d9488' : '#1565c0', borderRadius: 3 }} />
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '0.88rem', minWidth: 40 }}>{row.score}%</span>
                    </div>
                  </td>
                  <td>{statusBadge(row.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>
          🕐 Recent Activity
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {RECENT_ACTIVITY.map((activity, i) => (
            <div key={activity.id} style={{
              display: 'flex', alignItems: 'flex-start', gap: '14px',
              padding: '14px 0', borderBottom: i < RECENT_ACTIVITY.length - 1 ? '1px solid #f1f5f9' : 'none'
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                background: activity.type === 'success' ? '#dcfce7' : activity.type === 'warning' ? '#fef3c7' : '#dbeafe',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem'
              }}>
                {activity.type === 'success' ? '✅' : activity.type === 'warning' ? '⚠️' : 'ℹ️'}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-text-dark)', fontWeight: 500, marginBottom: '2px' }}>{activity.action}</div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>{activity.department}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
