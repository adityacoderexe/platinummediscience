export const TRANSACTIONS = [
  { id: 'TXN-2024-001', staffId: 'STF001', workerName: 'Rajesh Kumar', workerId: 'WRK001', bankAccount: 'HDFC****4521', amount: 45000, status: 'Approved', date: '2024-11-28', description: 'Monthly salary disbursement' },
  { id: 'TXN-2024-002', staffId: 'STF001', workerName: 'Meena Iyer', workerId: 'WRK002', bankAccount: 'SBI****8834', amount: 38500, status: 'Approved', date: '2024-11-28', description: 'Monthly salary disbursement' },
  { id: 'TXN-2024-003', staffId: 'STF001', workerName: 'Arun Nair', workerId: 'WRK003', bankAccount: 'ICICI****2210', amount: 52000, status: 'Pending', date: '2024-11-29', description: 'Performance bonus' },
  { id: 'TXN-2024-004', staffId: 'STF001', workerName: 'Suman Reddy', workerId: 'WRK004', bankAccount: 'AXIS****6677', amount: 41000, status: 'Approved', date: '2024-11-27', description: 'Monthly salary disbursement' },
  { id: 'TXN-2024-005', staffId: 'STF001', workerName: 'Pradeep Singh', workerId: 'WRK005', bankAccount: 'KOTAK****9912', amount: 75000, status: 'Flagged', date: '2024-11-26', description: 'Special allowance – awaiting approval' },
  { id: 'TXN-2024-006', staffId: 'STF001', workerName: 'Ananya Bose', workerId: 'WRK006', bankAccount: 'HDFC****3301', amount: 43000, status: 'Approved', date: '2024-11-25', description: 'Monthly salary disbursement' },
  { id: 'TXN-2024-007', staffId: 'STF001', workerName: 'Ravi Teja', workerId: 'WRK007', bankAccount: 'SBI****5521', amount: 39500, status: 'Approved', date: '2024-11-24', description: 'Monthly salary disbursement' },
  { id: 'TXN-2024-008', staffId: 'STF001', workerName: 'Kavitha Menon', workerId: 'WRK008', bankAccount: 'ICICI****7890', amount: 48000, status: 'Pending', date: '2024-11-29', description: 'Travel reimbursement' },
  { id: 'TXN-2024-009', staffId: 'STF001', workerName: 'Dinesh Rathore', workerId: 'WRK009', bankAccount: 'YES****4432', amount: 36000, status: 'Approved', date: '2024-11-23', description: 'Monthly salary disbursement' },
  { id: 'TXN-2024-010', staffId: 'STF001', workerName: 'Lakshmi Krishnan', workerId: 'WRK010', bankAccount: 'HDFC****1234', amount: 55000, status: 'Flagged', date: '2024-11-22', description: 'Duplicate payment – under review' },
  { id: 'TXN-2024-011', staffId: 'STF001', workerName: 'Rajesh Kumar', workerId: 'WRK001', bankAccount: 'HDFC****4521', amount: 5000, status: 'Approved', date: '2024-11-20', description: 'Medical reimbursement' },
  { id: 'TXN-2024-012', staffId: 'STF001', workerName: 'Meena Iyer', workerId: 'WRK002', bankAccount: 'SBI****8834', amount: 3500, status: 'Approved', date: '2024-11-19', description: 'Conveyance allowance' },
  { id: 'TXN-2024-013', staffId: 'STF001', workerName: 'Arun Nair', workerId: 'WRK003', bankAccount: 'ICICI****2210', amount: 8000, status: 'Approved', date: '2024-11-18', description: 'Overtime payment' },
  { id: 'TXN-2024-014', staffId: 'STF001', workerName: 'Suman Reddy', workerId: 'WRK004', bankAccount: 'AXIS****6677', amount: 12000, status: 'Pending', date: '2024-11-17', description: 'Project completion bonus' },
  { id: 'TXN-2024-015', staffId: 'STF001', workerName: 'Pradeep Singh', workerId: 'WRK005', bankAccount: 'KOTAK****9912', amount: 42000, status: 'Approved', date: '2024-11-16', description: 'Monthly salary disbursement' },
  { id: 'TXN-2024-016', staffId: 'STF001', workerName: 'Ananya Bose', workerId: 'WRK006', bankAccount: 'HDFC****3301', amount: 6500, status: 'Approved', date: '2024-11-15', description: 'Special duty allowance' },
  { id: 'TXN-2024-017', staffId: 'STF001', workerName: 'Ravi Teja', workerId: 'WRK007', bankAccount: 'SBI****5521', amount: 9000, status: 'Flagged', date: '2024-11-14', description: 'Advance payment – requires CEO approval' },
  { id: 'TXN-2024-018', staffId: 'STF001', workerName: 'Kavitha Menon', workerId: 'WRK008', bankAccount: 'ICICI****7890', amount: 46000, status: 'Approved', date: '2024-11-13', description: 'Monthly salary disbursement' },
  { id: 'TXN-2024-019', staffId: 'STF001', workerName: 'Dinesh Rathore', workerId: 'WRK009', bankAccount: 'YES****4432', amount: 4000, status: 'Approved', date: '2024-11-12', description: 'Mobile allowance' },
  { id: 'TXN-2024-020', staffId: 'STF001', workerName: 'Lakshmi Krishnan', workerId: 'WRK010', bankAccount: 'HDFC****1234', amount: 53000, status: 'Approved', date: '2024-11-11', description: 'Monthly salary disbursement' },
];

export const WORKERS = [
  { id: 'WRK001', name: 'Rajesh Kumar', department: 'Clinical Research', bankAccount: 'HDFC****4521', totalPaid: 542000, lastPayment: '2024-11-28' },
  { id: 'WRK002', name: 'Meena Iyer', department: 'Laboratory Services', bankAccount: 'SBI****8834', totalPaid: 463200, lastPayment: '2024-11-28' },
  { id: 'WRK003', name: 'Arun Nair', department: 'Medical Devices', bankAccount: 'ICICI****2210', totalPaid: 625600, lastPayment: '2024-11-29' },
  { id: 'WRK004', name: 'Suman Reddy', department: 'Pharmaceuticals', bankAccount: 'AXIS****6677', totalPaid: 493200, lastPayment: '2024-11-27' },
  { id: 'WRK005', name: 'Pradeep Singh', department: 'Business Development', bankAccount: 'KOTAK****9912', totalPaid: 588000, lastPayment: '2024-11-26' },
  { id: 'WRK006', name: 'Ananya Bose', department: 'Quality Assurance', bankAccount: 'HDFC****3301', totalPaid: 517200, lastPayment: '2024-11-25' },
  { id: 'WRK007', name: 'Ravi Teja', department: 'IT & Technology', bankAccount: 'SBI****5521', totalPaid: 474000, lastPayment: '2024-11-24' },
  { id: 'WRK008', name: 'Kavitha Menon', department: 'Human Resources', bankAccount: 'ICICI****7890', totalPaid: 580800, lastPayment: '2024-11-29' },
  { id: 'WRK009', name: 'Dinesh Rathore', department: 'Supply Chain', bankAccount: 'YES****4432', totalPaid: 432000, lastPayment: '2024-11-23' },
  { id: 'WRK010', name: 'Lakshmi Krishnan', department: 'Finance', bankAccount: 'HDFC****1234', totalPaid: 660000, lastPayment: '2024-11-22' },
];

export const STAFF_PERFORMANCE = [
  { staffId: 'STF001', name: 'Sneha Patel', transactionsCount: 47, accuracy: 97.8, lastActive: '2024-11-29', department: 'Operations', status: 'Active' },
  { staffId: 'STF002', name: 'Amit Joshi', transactionsCount: 38, accuracy: 95.2, lastActive: '2024-11-28', department: 'Operations', status: 'Active' },
  { staffId: 'STF003', name: 'Pooja Gupta', transactionsCount: 52, accuracy: 98.5, lastActive: '2024-11-29', department: 'Operations', status: 'Active' },
  { staffId: 'STF004', name: 'Kiran Rao', transactionsCount: 41, accuracy: 96.1, lastActive: '2024-11-27', department: 'Operations', status: 'Active' },
  { staffId: 'STF005', name: 'Nisha Verma', transactionsCount: 29, accuracy: 93.7, lastActive: '2024-11-26', department: 'Operations', status: 'On Leave' },
];

export const AUDITOR_REPORTS = [
  { id: 'AUD-RPT-001', auditorId: 'AUD001', transactionId: 'TXN-2024-005', status: 'Flagged', findings: 'Amount exceeds standard allowance limit by 25%. Requires CEO sign-off.', date: '2024-11-27' },
  { id: 'AUD-RPT-002', auditorId: 'AUD001', transactionId: 'TXN-2024-010', status: 'Flagged', findings: 'Possible duplicate transaction detected. Previous payment issued on 2024-10-22.', date: '2024-11-23' },
  { id: 'AUD-RPT-003', auditorId: 'AUD001', transactionId: 'TXN-2024-017', status: 'Flagged', findings: 'Advance payment category not pre-approved. CEO approval required.', date: '2024-11-15' },
  { id: 'AUD-RPT-004', auditorId: 'AUD001', transactionId: 'TXN-2024-003', status: 'Reviewed', findings: 'Performance bonus verified against KPI records. Cleared for processing.', date: '2024-11-29' },
  { id: 'AUD-RPT-005', auditorId: 'AUD001', transactionId: 'TXN-2024-008', status: 'Reviewed', findings: 'Travel reimbursement receipts verified. Amount within policy limits.', date: '2024-11-29' },
];

export const COMPANY_STATS = {
  totalRevenue: '₹4.2 Cr',
  totalStaff: 47,
  activeTransactions: 128,
  globalReach: '12 Countries',
  thisMonth: '₹38.5 Lakhs',
  lastMonth: '₹41.2 Lakhs',
  growth: '-6.5%',
  q4Target: '₹1.5 Cr',
  transactionsReviewed: 128,
  flagged: 3,
  pending: 12,
  accuracyRate: '97.8%'
};

export const RECENT_ACTIVITY = [
  { id: 1, action: 'Transaction TXN-2024-020 approved', department: 'Operations', time: '2 hours ago', type: 'success' },
  { id: 2, action: 'Auditor flagged TXN-2024-017 for review', department: 'Finance & Audit', time: '4 hours ago', type: 'warning' },
  { id: 3, action: 'Staff submitted 8 new transactions', department: 'Operations', time: '6 hours ago', type: 'info' },
  { id: 4, action: 'Monthly report generated by Admin', department: 'Administration', time: '1 day ago', type: 'info' },
  { id: 5, action: 'CEO reviewed Q4 financial targets', department: 'Executive Leadership', time: '1 day ago', type: 'info' },
];
