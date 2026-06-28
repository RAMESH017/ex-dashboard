import React, { useState } from 'react';
import { Ship, Lock, User, AlertCircle, ArrowRight } from 'lucide-react';

export default function Login() {
  // SET DEFAULTS: Pre-filling with 'admin' so you don't even have to type it in development
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Mocking the backend API handshake locally
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        // 1. Simulate saving the secure token to localStorage
        localStorage.setItem('token', 'mock_dev_jwt_token_gateway_2026');
        
        // 2. Force a page reload to let your App.jsx auth listener pick up the token instantly
        window.location.reload();
      } else {
        setError('Invalid operator credentials. Please use admin / admin for local access.');
        setLoading(false);
      }
    }, 400); // Quick 400ms delay to make the animation feel real!
  };

  return (
    <div 
      className="flex min-h-screen w-full items-center justify-center bg-slate-950 px-4"
      style={{
        display: 'flex',
        minHeight: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#020617',
        fontFamily: 'sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', backgroundColor: 'rgba(37, 99, 235, 0.1)', filter: 'blur(100px)' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '300px', height: '300px', backgroundColor: 'rgba(79, 70, 229, 0.1)', filter: 'blur(100px)' }} />

      {/* Main Container Card */}
      <div 
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '16px',
          border: '1px solid #1e293b',
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(16px)',
          padding: '32px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          zIndex: 10
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
          <div 
            style={{
              display: 'flex',
              height: '48px',
              width: '48px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              background: 'linear-gradient(to top right, #2563eb, #4f46e5)',
              color: '#ffffff',
              marginBottom: '16px'
            }}
          >
            <Ship size={24} />
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0', letterSpacing: '-0.025em' }}>ERP Trade Gateway</h2>
          <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>Local Development Mode Active</p>
        </div>

        {/* Error Notification */}
        {error && (
          <div 
            style={{
              display: 'flex',
              alignItems: 'start',
              gap: '12px',
              borderRadius: '12px',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              backgroundColor: 'rgba(127, 29, 29, 0.2)',
              padding: '16px',
              color: '#f87171',
              fontSize: '14px',
              marginBottom: '20px'
            }}
          >
            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ margin: 0, fontWeight: '500' }}>{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Username Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8' }}>
              Operator Username
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '16px', color: '#64748b', display: 'flex', alignItems: 'center' }}>
                <User size={16} />
              </span>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  backgroundColor: 'rgba(2, 6, 17, 0.5)',
                  padding: '12px 16px 12px 44px',
                  fontSize: '14px',
                  color: '#ffffff',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8' }}>
              Security Access Pin
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '16px', color: '#64748b', display: 'flex', alignItems: 'center' }}>
                <Lock size={16} />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  backgroundColor: 'rgba(2, 6, 17, 0.5)',
                  padding: '12px 16px 12px 44px',
                  fontSize: '14px',
                  color: '#ffffff',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              borderRadius: '12px',
              backgroundColor: '#2563eb',
              padding: '14px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#ffffff',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
              boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.2)',
              marginTop: '8px'
            }}
          >
            <span>{loading ? 'Bypassing Server Check...' : 'Sign In Secure Session'}</span>
            {!loading && <ArrowRight size={16} />}
          </button>
          
        </form>

        <div style={{ marginTop: '32px', paddingTop: '16px', borderTop: '1px solid #1e293b', textAlign: 'center', fontSize: '11px', color: '#475569', fontWeight: '500' }}>
          &copy; 2026 Trade Gateway Systems. Offline Sandbox Sandbox.
        </div>

      </div>
    </div>
  );
}