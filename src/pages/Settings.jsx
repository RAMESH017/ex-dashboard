import React from 'react';
import { Settings as ConfigIcon, Shield, Server, RefreshCw, Layers } from 'lucide-react';

export default function Settings() {
  const handleClearSession = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0' }}>Control Center</h2>
        <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Configure security handshakes, sandbox configurations, and default parameters.</p>
      </div>

      <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Card Block 1: Security parameters */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={18} color="#3b82f6" /> System Environment Status
          </h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.5' }}>
            The trade router is running in <strong>Local Offline Sandbox</strong>. Server authentication APIs are mocked to bypass network calls automatically.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: '#1e293b', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', color: '#cbd5e1' }}>Encryption: <strong>AES-256 Enabled</strong></span>
            <span style={{ backgroundColor: '#1e293b', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', color: '#cbd5e1' }}>Node Profile: <strong>Admin</strong></span>
          </div>
        </div>

        {/* Card Block 2: Sandbox Session Clear Tool */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', color: '#f43f5e', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Server size={18} /> Cache & Session Purging
          </h3>
          <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px 0' }}>
            Clearing local state resets all mock ledger variables and forces a secure redirect back to the central gateway card.
          </p>
          <button 
            onClick={handleClearSession}
            style={{ backgroundColor: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', color: '#f43f5e', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s' }}
          >
            <RefreshCw size={14} /> Clear Local Storage & Logout
          </button>
        </div>

      </div>
    </div>
  );
}