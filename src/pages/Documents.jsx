import React, { useState } from 'react';
import { Folder, FileText, Download, ShieldCheck, Eye, Search } from 'lucide-react';

export default function Documents() {
  const [vaultDocs] = useState([
    { id: 'DOC-2026-A', name: 'Bill_of_Lading_IN_UAE_773.pdf', type: 'Shipping Manifest', bytes: '2.4 MB', authority: 'Verified' },
    { id: 'DOC-2026-B', name: 'Customs_Duty_Clearance_Stamp.pdf', type: 'Tariff Receipt', bytes: '1.1 MB', authority: 'Verified' },
    { id: 'DOC-2026-C', name: 'Commercial_Invoice_Buyer_88.pdf', type: 'Trade Ledger', bytes: '840 KB', authority: 'Pending Signature' }
  ]);

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0' }}>Secure Vault</h2>
        <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Access encrypted customs declarations, commercial agreements, and port clearance parameters.</p>
      </div>

      {/* Directory Grid Array Layout */}
      <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#090d16' }}>
          <Folder size={18} color="#3b82f6" />
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Administrative Asset Store</span>
        </div>

        <div style={{ padding: '8px 16px' }}>
          {vaultDocs.map((doc) => (
            <div key={doc.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(30, 41, 59, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'rgba(148, 163, 184, 0.05)', color: '#94a3b8' }}><FileText size={20} /></div>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', color: '#e2e8f0' }}>{doc.name}</h4>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{doc.type} — <span style={{ fontFamily: 'monospace' }}>{doc.bytes}</span></span>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '6px', fontWeight: '600', backgroundColor: doc.authority === 'Verified' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: doc.authority === 'Verified' ? '#10b981' : '#f59e0b' }}>
                  {doc.authority}
                </span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px' }} title="View File"><Eye size={16} /></button>
                  <button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', padding: '4px' }} title="Download encrypted asset"><Download size={16} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}