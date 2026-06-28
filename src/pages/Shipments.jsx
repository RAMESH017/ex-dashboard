import React from 'react';
import { Ship, Anchor, MapPin, Compass } from 'lucide-react';

export default function Shipments() {
  const shipments = [
    { id: 'SH-9923', vessel: 'MAERSK MC-KINNEY', container: '40ft HC × 4', route: 'Tuticorin → Jebel Ali', status: 'In Transit', eta: '2026-07-04' }
  ];

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0' }}>Ocean Freight Monitor</h2>
        <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Live bill of lading manifests and shipping channel milestones.</p>
      </div>

      {shipments.map(sh => (
        <div key={sh.id} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '10px', borderRadius: '10px', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}><Ship size={22} /></div>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>{sh.vessel}</h3>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Manifest Ref: {sh.id} — {sh.container}</span>
              </div>
            </div>
            <span style={{ backgroundColor: '#f59e0b', color: '#000', fontSize: '12px', padding: '6px 14px', borderRadius: '20px', fontWeight: '700' }}>{sh.status}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '16px', backgroundColor: '#020617', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Anchor size={16} color="#64748b" /><div><span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Port of Loading</span><strong>Tuticorin Port (IN)</strong></div></div>
            <Compass size={20} className="animate-spin" style={{ color: '#1e293b' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'end', textAlign: 'right' }}><MapPin size={16} color="#64748b" /><div><span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Port of Discharge</span><strong>Jebel Ali (AE)</strong></div></div>
          </div>

          <div style={{ fontSize: '13px', color: '#94a3b8' }}>
            Estimated Handover Terminal Arrival Date: <strong style={{ color: '#fff' }}>{sh.eta}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}