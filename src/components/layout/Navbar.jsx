import React from 'react';
import { Bell, Sun, LogOut } from 'lucide-react';

export default function Navbar({ onMenuClick, title }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div 
      style={{
        height: '64px',
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        color: '#ffffff',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Current Title Module Label */}
      <h1 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'capitalize', margin: 0 }}>
        {title === 'dashboard' ? 'Dashboard Home' : title}
      </h1>

      {/* Right Control Strip Actions Area */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}><Sun size={18} /></button>
        <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', position: 'relative' }}>
          <Bell size={18} />
          <span style={{ position: 'absolute', top: '-2px', right: '-2px', height: '6px', width: '6px', backgroundColor: '#ef4444', borderRadius: '50%' }} />
        </button>
        
        <div style={{ height: '20px', width: '1px', backgroundColor: '#1e293b' }} />
        
        {/* User Identity Info Profile Block */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ height: '32px', width: '32px', borderRadius: '50%', backgroundColor: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600' }}>
            AD
          </div>
          <span style={{ fontSize: '14px', fontWeight: '500', color: '#e2e8f0' }}>Admin Operator</span>
        </div>

        <button 
          onClick={handleLogout}
          style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px' }}
          title="Logout Session"
        >
          <LogOut size={16} />
        </button>
      </div>
    </div>
  );
}