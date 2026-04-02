import { useState } from 'react';
import { WORKERS, TRANSACTIONS } from '../data/mockData.js';

export default function StaffDashboard({ currentUser }) {
  const [form, setForm] = useState({ workerId: '', workerName: '', bankAccount: '', amount: '', description: '' });
  const [errors, setErrors] = useState({});
  const [transactions, setTransactions] = useState(TRANSACTIONS);
  const [toast, setToast] = useState(null);
  const [txCounter, setTxCounter] = useState(21);

  const handleWorkerSelect = (workerId) => {
    const worker = WORKERS.find(w => w.id === workerId);
    if (worker) {
      setForm(prev => ({ ...prev, workerId, workerName: worker.name, bankAccount: worker.bankAccount }));
    } else {
      setForm(prev => ({ ...prev, workerId: '', workerName: '', bankAccount: '' }));
    }
    setErrors(prev => ({ ...prev, workerId: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.workerId) errs.workerId = 'Please select a worker';
    if (!form.amount || isNaN(Number(form.amount)) || Number(form.amount) <= 0) errs.amount = 'Please enter a valid amount';
    if (!form.description.trim()) errs.description = 'Description is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const newTx = {
      id: `TXN-2024-0${txCounter}`,
      staffId: currentUser.id,
      workerName: form.workerName,
      workerId: form.workerId,
      bankAccount: form.bankAccount,
      amount: Number(form.amount),
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      description: form.description,
    };

    setTransactions(prev => [newTx, ...prev]);
    setTxCounter(prev => prev + 1);
    setForm({ workerId: '', workerName: '', bankAccount: '', amount: '', description: '' });
    setErrors({});

    setToast({ message: `Transaction ${newTx.id} submitted successfully!`, type: 'success' });
    setTimeout(() => setToast(null), 4000);
  };

  const statusBadge = (status) => {
    if (status === 'Approved') return <span className="badge badge-success">{status}</span>;
    if (status === 'Pending') return <span className="badge badge-warning">{status}</span>;
    if (status === 'Flagged') return <span className="badge badge-danger">{status}</span>;
    return <span className="badge">{status}</span>;
  };

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.type === 'success' ? '✅' : '❌'} {toast.message}
        </div>
      )}

      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)' }}>
          Staff Portal 👋
        </h1>
        <p style={{ color: 'var(--color-text-light)', marginTop: '4px', fontSize: '0.9rem' }}>
          Submit worker salary transactions and track payment history.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {[
          { label: "Today's Transactions", value: transactions.filter(t => t.date === new Date().toISOString().split('T')[0]).length || 8, icon: '📋', color: '#1565c0', bg: 'rgba(21,101,192,0.1)' },
          { label: 'Total This Month', value: '47', icon: '📅', color: '#00b4d8', bg: 'rgba(0,180,216,0.1)' },
          { label: 'Amount Processed', value: '₹8.4L', icon: '💰', color: '#c9a227', bg: 'rgba(201,162,39,0.1)' },
          { label: 'Pending', value: transactions.filter(t => t.status === 'Pending').length, icon: '⏳', color: '#d97706', bg: 'rgba(217,119,6,0.1)' },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '24px', position: 'relative', overflow: 'hidden', border: `1px solid ${s.color}20` }}>
            <div style={{ position: 'absolute', right: 20, top: 20, width: 48, height: 48, borderRadius: '10px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{s.icon}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginTop: '6px', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px', marginBottom: '24px' }}>
        {/* New Transaction Form */}
        <div className="card">
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>➕ New Transaction</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Worker</label>
              <select className={`form-input form-select${errors.workerId ? ' error' : ''}`} value={form.workerId} onChange={e => handleWorkerSelect(e.target.value)}>
                <option value="">Select worker...</option>
                {WORKERS.map(w => <option key={w.id} value={w.id}>{w.name} ({w.id})</option>)}
              </select>
              {errors.workerId && <span className="form-error">{errors.workerId}</span>}
            </div>

            {form.workerName && (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '10px 14px', marginBottom: '14px', fontSize: '0.83rem' }}>
                <div style={{ fontWeight: 600, color: '#15803d', marginBottom: '2px' }}>{form.workerName}</div>
                <div style={{ color: '#166534', fontFamily: 'monospace' }}>{form.bankAccount}</div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Amount (₹)</label>
              <input className={`form-input${errors.amount ? ' error' : ''}`} type="number" placeholder="e.g. 45000" value={form.amount} onChange={e => { setForm(prev => ({ ...prev, amount: e.target.value })); setErrors(prev => ({ ...prev, amount: '' })); }} min="1" />
              {errors.amount && <span className="form-error">{errors.amount}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <input className={`form-input${errors.description ? ' error' : ''}`} type="text" placeholder="e.g. Monthly salary disbursement" value={form.description} onChange={e => { setForm(prev => ({ ...prev, description: e.target.value })); setErrors(prev => ({ ...prev, description: '' })); }} />
              {errors.description && <span className="form-error">{errors.description}</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Transaction →
            </button>
          </form>
        </div>

        {/* Workers Quick List */}
        <div className="card">
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '20px', fontSize: '1rem' }}>👷 Workers Directory</h3>
          <div className="table-container" style={{ maxHeight: '380px', overflowY: 'auto' }}>
            <table className="table">
              <thead>
                <tr><th>Name</th><th>Department</th><th>Total Paid</th><th>Last Payment</th></tr>
              </thead>
              <tbody>
                {WORKERS.map((w) => (
                  <tr key={w.id}>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{w.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontFamily: 'monospace' }}>{w.id}</div>
                    </td>
                    <td style={{ fontSize: '0.85rem' }}>{w.department}</td>
                    <td style={{ fontWeight: 700, color: '#1565c0', fontSize: '0.88rem' }}>₹{(w.totalPaid / 1000).toFixed(0)}K</td>
                    <td style={{ fontSize: '0.82rem', color: 'var(--color-text-light)' }}>{w.lastPayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1rem' }}>📋 My Transaction History</h3>
          <span className="badge badge-info" style={{ fontSize: '0.75rem' }}>{transactions.length} Records</span>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr><th>Txn ID</th><th>Worker Name</th><th>Account</th><th>Amount</th><th>Date</th><th>Description</th><th>Status</th></tr>
            </thead>
            <tbody>
              {transactions.slice(0, 10).map((tx) => (
                <tr key={tx.id}>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: '#1565c0', fontWeight: 600 }}>{tx.id}</td>
                  <td style={{ fontWeight: 500, fontSize: '0.88rem' }}>{tx.workerName}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'var(--color-text-light)' }}>{tx.bankAccount}</td>
                  <td style={{ fontWeight: 700 }}>₹{tx.amount.toLocaleString('en-IN')}</td>
                  <td style={{ color: 'var(--color-text-light)', fontSize: '0.85rem' }}>{tx.date}</td>
                  <td style={{ color: 'var(--color-text-light)', fontSize: '0.82rem', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tx.description}</td>
                  <td>{statusBadge(tx.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
