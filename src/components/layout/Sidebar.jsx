import React from 'react';
import { 
  LayoutDashboard, ShoppingCart, TrendingUp, Users, Truck, 
  Package, Ship, Wallet, BarChart3, Folder, Settings 
} from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen, currentTab, setCurrentTab }) {
  // Navigation mapping matrix arrays matching your 11 layout blocks
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard Home', icon: LayoutDashboard },
    { id: 'expenses', label: 'Expenses', icon: ShoppingCart },
    { id: 'income', label: 'Income', icon: TrendingUp },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'suppliers', label: 'Suppliers', icon: Truck },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'shipments', label: 'Shipments', icon: Ship },
    { id: 'accounts', label: 'Accounts', icon: Wallet },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'documents', label: 'Documents', icon: Folder },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div 
      style={{
        width: '260px',
        backgroundColor: '#0f172a',
        borderRight: '1px solid #1e293b',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        color: '#ffffff',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Sidebar Header Brand Logo */}
      <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', height: '36px', width: '36px', alignItems: 'center', justifyOrigin: 'center', justifyContent: 'center', borderRadius: '8px', backgroundColor: '#2563eb' }}>
          <Ship size={18} color="#fff" />
        </div>
        <span style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '-0.025em' }}>Trade Gateway</span>
      </div>

      {/* Navigation Links Scroll Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: isActive ? '600' : '400',
                backgroundColor: isActive ? '#2563eb' : 'transparent',
                color: isActive ? '#ffffff' : '#94a3b8',
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
            >
              <Icon size={18} style={{ color: isActive ? '#ffffff' : '#64748b' }} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}