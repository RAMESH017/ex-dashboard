import React from 'react';
import { Wallet, Landmark, ArrowRightLeft, Percent } from 'lucide-react';

export default function Accounts() {
  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0' }}>Financial Treasury</h2>
        <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Multi-currency cross-border cash reserves and escrow clearances.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        
        {/* AED Account Card */}
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
            <Landmark size={22} color="#3b82f6" />
            <span style={{ fontWeight: '700', fontSize: '14px', color: '#94a3b8' }}>AED Wallet</span>
          </div>
          <span style={{ fontSize: '12px', color: '#64748b', display: 'block', textTransform: 'uppercase' }}>Available Balance</span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', margin: '4px 0 0 0', color: '#fff' }}>142,500.00 <span style={{ fontSize: '14px', color: '#64748b' }}>AED</span></h3>
        </div>

        {/* USD Account Card */}
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #064e3b 100%)', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
            <Wallet size={22} color="#10b981" />
            <span style={{ fontWeight: '700', fontSize: '14px', color: '#94a3b8' }}>USD Escrow</span>
          </div>
          <span style={{ fontSize: '12px', color: '#64748b', display: 'block', textTransform: 'uppercase' }}>Available Balance</span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', margin: '4px 0 0 0', color: '#fff' }}>$38,810.00 <span style={{ fontSize: '14px', color: '#64748b' }}>USD</span></h3>
        </div>

      </div>
    </div>
  );
}