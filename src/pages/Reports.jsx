import React from 'react';
import { BarChart3, TrendingUp, Download, Calendar, FileSpreadsheet } from 'lucide-react';

export default function Reports() {
  const analyticsData = [
    { matrix: 'Net Gross Trade Revenue', target: '$245,670.00', condition: 'Optimal', shift: '+12.5%' },
    { matrix: 'Duty Tariffs & Customs Levies', target: '$3,100.00', condition: 'Audited', shift: 'Stable' },
    { matrix: 'Average Cargo Transit Time', target: '6.4 Days', condition: 'Efficient', shift: '-0.8 Days' }
  ];

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      
      {/* Module Header Strip */}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>Analytics & Reports</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Review customs evaluations, cross-border margins, and shipment statistics.</p>
        </div>
        <button style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Download size={16} /> Export Custom Manifest
        </button>
      </div>

      {/* Main Core Ledger Grid Rows */}
      <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BarChart3 size={18} color="#3b82f6" /> Strategic Performance Metrics
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {analyticsData.map((row, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #1e293b', borderRadius: '12px', backgroundColor: 'rgba(2, 6, 17, 0.2)' }}>
              <div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#f8fafc', display: 'block' }}>{row.matrix}</span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Status Profile: <strong style={{ color: '#94a3b8' }}>{row.condition}</strong></span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#fff', display: 'block' }}>{row.target}</span>
                <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '500' }}>{row.shift}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}