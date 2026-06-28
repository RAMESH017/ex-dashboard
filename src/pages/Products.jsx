import React, { useState } from 'react';
import { Package, Box, Columns, BarChart } from 'lucide-react';

export default function Products() {
  const [products] = useState([
    { id: 'PROD-77', name: 'Premium Combed Cotton Yarn', hscode: '5205.21', stock: '4,200 kg', value: '$18,900' },
    { id: 'PROD-82', name: 'Industrial Bleached Textiles', hscode: '5208.21', stock: '8,500 meters', value: '$34,000' }
  ]);

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0' }}>Commodity Vault</h2>
        <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Stock levels and globally verified HS-Code catalog arrays.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}><Package size={20} /></div>
              <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#64748b' }}>{p.id}</span>
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', color: '#fff' }}>{p.name}</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' }}>Customs HS Code: <strong>{p.hscode}</strong></p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderTop: '1px solid #1e293b', paddingTop: '12px', color: '#cbd5e1' }}>
              <div><span style={{ color: '#64748b', display: 'block', fontSize: '11px' }}>Inventory</span><strong>{p.stock}</strong></div>
              <div style={{ textAlign: 'right' }}><span style={{ color: '#64748b', display: 'block', fontSize: '11px' }}>Asset Value</span><strong style={{ color: '#10b981' }}>{p.value}</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}