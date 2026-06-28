import React from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, Ship, Circle } from 'lucide-react';

export default function Dashboard() {
  const transactions = [
    { id: 'TX-10029', date: '2026-06-28', description: 'Port clearance handling fee', category: 'Port Charges', amount: '-$1,250.00', status: 'Completed', positive: false },
    { id: 'TX-10028', date: '2026-06-27', description: 'Advance buyer collection invoice #88', category: 'Income', amount: '+$45,800.00', status: 'Completed', positive: true },
    { id: 'TX-10027', date: '2026-06-25', description: 'Container truck logistics fuel surcharge', category: 'Transportation', amount: '-$850.00', status: 'Pending', positive: false }
  ];

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      
      {/* Upper Context Header */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>Logistics Overview</h2>
        <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Real-time status indicators across border trade pipelines.</p>
      </div>

      {/* Grid Row: 4 Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        
        {/* Card 1 */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ pading: '10px', borderRadius: '10px', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#3b82f6', display: 'flex', padding: '10px' }}><DollarSign size={22} /></div>
          <div>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Total Revenue</p>
            <h3 style={{ margin: '4px 0', fontSize: '22px', fontWeight: '700' }}>$245,670</h3>
            <span style={{ fontSize: '12px', color: '#10b981' }}>↑ 12.5% this month</span>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ pading: '10px', borderRadius: '10px', backgroundColor: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', display: 'flex', padding: '10px' }}><ArrowDownRight size={22} /></div>
          <div>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Total Expenses</p>
            <h3 style={{ margin: '4px 0', fontSize: '22px', fontWeight: '700' }}>$89,120</h3>
            <span style={{ fontSize: '12px', color: '#f43f5e' }}>↓ 4.2% reduction</span>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ pading: '10px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', padding: '10px' }}><ArrowUpRight size={22} /></div>
          <div>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Net Profit</p>
            <h3 style={{ margin: '4px 0', fontSize: '22px', fontWeight: '700' }}>$156,550</h3>
            <span style={{ fontSize: '12px', color: '#10b981' }}>↑ 18.1% improvement</span>
          </div>
        </div>

        {/* Card 4 */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ pading: '10px', borderRadius: '10px', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', display: 'flex', padding: '10px' }}><Ship size={22} /></div>
          <div>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Active Shipments</p>
            <h3 style={{ margin: '4px 0', fontSize: '22px', fontWeight: '700' }}>14 Tracked</h3>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>88 absolute total containers</span>
          </div>
        </div>

      </div>

      {/* Main Bottom Section Grid Matrix */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Recent Transactions Table Component Card */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 20px 0', color: '#f8fafc' }}>Recent Ledger Logs</h4>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1e293b', color: '#64748b' }}>
                <th style={{ padding: '12px 8px', fontWeight: '600' }}>ID</th>
                <th style={{ padding: '12px 8px', fontWeight: '600' }}>Description</th>
                <th style={{ padding: '12px 8px', fontWeight: '600' }}>Category</th>
                <th style={{ padding: '12px 8px', fontWeight: '600', textAlign: 'right' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} style={{ borderBottom: '1px solid #1e293b/40', color: '#cbd5e1' }}>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: '#64748b', fontFamily: 'monospace' }}>{tx.id}</td>
                  <td style={{ padding: '16px 8px', fontWeight: '500' }}>{tx.description}</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ backgroundColor: '#1e293b', padding: '4px 8px', borderRadius: '6px', fontSize: '12px' }}>{tx.category}</span></td>
                  <td style={{ padding: '16px 8px', textAlign: 'right', fontWeight: '600', color: tx.positive ? '#10b981' : '#f43f5e' }}>{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Milestone Tracker Pipeline Card Component */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: '#f8fafc' }}>Milestone Progress Status</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Circle size={10} fill="#3b82f6" color="#3b82f6" />
              <div><p style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Sourced Goods</p><span style={{ fontSize: '12px', color: '#64748b' }}>Tuticorin Hub Mills</span></div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Circle size={10} fill="#f59e0b" color="#f59e0b" />
              <div><p style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Customs Clearance</p><span style={{ fontSize: '12px', color: '#64748b' }}>Port Loading Phase</span></div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Circle size={10} fill="#10b981" color="#10b981" />
              <div><p style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Jebel Ali Port Arrival</p><span style={{ fontSize: '12px', color: '#64748b' }}>Delivered Distribution</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}