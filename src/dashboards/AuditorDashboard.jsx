import { useState } from 'react';
import { TRANSACTIONS, AUDITOR_REPORTS } from '../data/mockData.js';

export default function AuditorDashboard() {
  const [flagForm, setFlagForm] = useState({ txId: '', reason: '' });
  const [flagSuccess, setFlagSuccess] = useState(false);
  const [flagError, setFlagError] = useState('');

  const statusBadge = (status) => {
    if (status === 'Approved') return <span className="badge badge-success">{status}</span>;
    if (status === 'Pending') return <span className="badge badge-warning">{status}</span>;
    if (status === 'Flagged') return <span className="badge badge-danger">{status}</span>;
    return <span className="badge">{status}</span>;
  };

  const handleFlag = (e) => {
    e.preventDefault();
    if (!flagForm.txId.trim()) { setFlagError('Transaction ID is required'); return; }
    if (!flagForm.reason.trim()) { setFlagError('Reason is required'); return; }
    setFlagError('');
    setFlagSuccess(true);
    setFlagForm({ txId: '', reason: '' });
    setTimeout(() => setFlagSuccess(false), 4000);
  };

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)' }}>
          Audit Dashboard 🔍
        </h1>
        <p style={{ color: 'var(--color-text-light)', marginTop: '4px', fontSize: '0.9rem' }}>
          Review, verify, and flag financial transactions.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {[
          { label: 'Total Reviewed', value: '115', icon: '✅', color: '#16a34a', bg: 'rgba(22,163,74,0.1)' },
          { label: 'Pending Review', value: '13', icon: '⏳', color: '#d97706', bg: 'rgba(217,119,6,0.1)' },
          { label: 'Flagged Items', value: '3', icon: '🚩', color: '#dc2626', bg: 'rgba(220,38,38,0.1)' },
          { label: 'Accuracy Rate', value: '97.8%', icon: '🎯', color: '#1565c0', bg: 'rgba(21,101,192,0.1)' },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '24px', position: 'relative', overflow: 'hidden', border: `1px solid ${s.color}20` }}>
            <div style={{ position: 'absolute', right: 20, top: 20, width: 48, height: 48, borderRadius: '10px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{s.icon}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginTop: '6px', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1rem' }}>💳 Transaction Review Queue</h3>
          <span className="badge badge-info" style={{ fontSize: '0.75rem' }}>{TRANSACTIONS.length} Records</span>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Txn ID</th><th>Staff ID</th><th>Worker</th><th>Amount</th><th>Date</th><th>Description</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {TRANSACTIONS.slice(0, 10).map((tx) => (
                <tr key={tx.id}>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: '#1565c0', fontWeight: 600 }}>{tx.id}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.82rem' }}>{tx.staffId}</td>
                  <td style={{ fontWeight: 500 }}>{tx.workerName}</td>
                  <td style={{ fontWeight: 700 }}>₹{tx.amount.toLocaleString('en-IN')}</td>
                  <td style={{ color: 'var(--color-text-light)', fontSize: '0.85rem' }}>{tx.date}</td>
                  <td style={{ color: 'var(--color-text-light)', fontSize: '0.85rem', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tx.description}</td>
                  <td>{statusBadge(tx.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Flag Transaction Form */}
        <div className="card">
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>🚩 Flag a Transaction</h3>
          {flagSuccess && (
            <div style={{ background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', color: '#15803d', fontSize: '0.88rem' }}>
              ✅ Transaction flagged successfully. The admin and CEO have been notified.
            </div>
          )}
          {flagError && (
            <div style={{ background: '#fee2e2', border: '1px solid #fecaca', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', color: '#dc2626', fontSize: '0.88rem' }}>
              ⚠️ {flagError}
            </div>
          )}
          <form onSubmit={handleFlag}>
            <div className="form-group">
              <label className="form-label">Transaction ID</label>
              <input className="form-input" type="text" placeholder="e.g. TXN-2024-005" value={flagForm.txId} onChange={e => { setFlagForm(prev => ({ ...prev, txId: e.target.value })); setFlagError(''); }} />
            </div>
            <div className="form-group">
              <label className="form-label">Reason for Flagging</label>
              <textarea className="form-input" rows={3} placeholder="Describe the issue or anomaly..." value={flagForm.reason} onChange={e => { setFlagForm(prev => ({ ...prev, reason: e.target.value })); setFlagError(''); }} style={{ resize: 'none' }} />
            </div>
            <button type="submit" className="btn" style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', color: 'white', width: '100%', justifyContent: 'center' }}>
              🚩 Flag Transaction
            </button>
          </form>
        </div>

        {/* Audit Reports */}
        <div className="card">
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>📋 Recent Audit Reports</h3>
          {AUDITOR_REPORTS.map((r) => (
            <div key={r.id} style={{ padding: '12px', background: r.status === 'Flagged' ? '#fff5f5' : '#f8fafc', borderRadius: '8px', marginBottom: '10px', border: `1px solid ${r.status === 'Flagged' ? '#fecaca' : '#e2e8f0'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#1565c0', fontWeight: 600 }}>{r.transactionId}</span>
                <span className={`badge ${r.status === 'Flagged' ? 'badge-danger' : 'badge-teal'}`} style={{ fontSize: '0.68rem' }}>{r.status}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', lineHeight: 1.5, marginBottom: '4px' }}>{r.findings}</p>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{r.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
