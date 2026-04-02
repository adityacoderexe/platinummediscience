export default function AdminDashboard() {
  const staffList = [
    { name: 'Sneha Patel', id: 'STF001', dept: 'Operations', txToday: 8, status: 'Active', lastActive: '10 min ago' },
    { name: 'Amit Joshi', id: 'STF002', dept: 'Operations', txToday: 5, status: 'Active', lastActive: '25 min ago' },
    { name: 'Pooja Gupta', id: 'STF003', dept: 'Operations', txToday: 11, status: 'Active', lastActive: '5 min ago' },
    { name: 'Kiran Rao', id: 'STF004', dept: 'Operations', txToday: 7, status: 'Active', lastActive: '1 hour ago' },
    { name: 'Nisha Verma', id: 'STF005', dept: 'Operations', txToday: 0, status: 'On Leave', lastActive: '2 days ago' },
  ];

  const auditorActivity = [
    { name: 'Vikram Desai', id: 'AUD001', reviewed: 115, flagged: 3, pending: 13, accuracy: '97.8%', status: 'Active' },
    { name: 'Rohit Kapoor', id: 'AUD002', reviewed: 98, flagged: 2, pending: 8, accuracy: '98.2%', status: 'Active' },
  ];

  const reports = [
    { title: 'November Monthly Report', date: '2024-11-29', status: 'Generated', by: 'Priya Sharma' },
    { title: 'Q3 Financial Summary', date: '2024-10-31', status: 'Generated', by: 'Priya Sharma' },
    { title: 'Staff Performance Review', date: '2024-11-25', status: 'Generated', by: 'Priya Sharma' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)' }}>
          Admin Dashboard 👨‍💼
        </h1>
        <p style={{ color: 'var(--color-text-light)', marginTop: '4px', fontSize: '0.9rem' }}>
          Manage staff operations, auditor activity, and company reports.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {[
          { label: 'Total Staff', value: '12', icon: '👥', color: '#1565c0', bg: 'rgba(21,101,192,0.1)' },
          { label: 'Auditors', value: '4', icon: '🔍', color: '#0d9488', bg: 'rgba(13,148,136,0.1)' },
          { label: 'Pending Reviews', value: '7', icon: '⏳', color: '#d97706', bg: 'rgba(217,119,6,0.1)' },
          { label: 'Flagged Transactions', value: '3', icon: '🚩', color: '#dc2626', bg: 'rgba(220,38,38,0.1)' },
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

      {/* Staff Table */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>👥 Staff Activity</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr><th>Name</th><th>ID</th><th>Department</th><th>Tx Today</th><th>Status</th><th>Last Active</th></tr>
            </thead>
            <tbody>
              {staffList.map((s, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>{s.id}</td>
                  <td>{s.dept}</td>
                  <td style={{ fontWeight: 700, color: 'var(--color-medical-blue)' }}>{s.txToday}</td>
                  <td>
                    <span className={`badge ${s.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td style={{ color: 'var(--color-text-light)', fontSize: '0.85rem' }}>{s.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Auditor Activity */}
        <div className="card">
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>🔍 Auditor Activity</h3>
          {auditorActivity.map((a, i) => (
            <div key={i} style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', marginBottom: i < auditorActivity.length - 1 ? '12px' : '0', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.9rem' }}>{a.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>{a.id}</div>
                </div>
                <span className="badge badge-success">{a.status}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px' }}>
                {[['Reviewed', a.reviewed, '#0d2137'], ['Flagged', a.flagged, '#dc2626'], ['Pending', a.pending, '#d97706'], ['Accuracy', a.accuracy, '#16a34a']].map(([label, val, color]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color }}>{val}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-light)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Reports */}
        <div className="card">
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>📋 Recent Reports</h3>
          {reports.map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px 0', borderBottom: i < reports.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--color-navy)', marginBottom: '3px' }}>{r.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>By {r.by} · {r.date}</div>
              </div>
              <span className="badge badge-teal" style={{ fontSize: '0.68rem' }}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
