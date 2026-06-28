import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { ThemeProvider } from './context/ThemeContext';

// Layout Structural Shells
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

// Functional Workspace View Modules
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import Customers from './pages/Customers';
import Suppliers from './pages/Suppliers';
import Products from './pages/Products';
import Shipments from './pages/Shipments';
import Accounts from './pages/Accounts';
import Reports from './pages/Reports';
import Documents from './pages/Documents';
import Settings from './pages/Settings';

/**
 * Navigation Router Switch Engine
 * Selects and renders the appropriate panel matching the sidebar navigation path.
 */
function DashboardContent({ currentTab, sidebarOpen, setSidebarOpen, setCurrentTab }) {
  const renderTabContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'expenses':
        return <Expenses />;
      case 'income':
        return <Income />;
      case 'customers':
        return <Customers />;
      case 'suppliers':
        return <Suppliers />;
      case 'products':
        return <Products />;
      case 'shipments':
        return <Shipments />;
      case 'accounts':
        return <Accounts />;
      case 'reports':
        return <Reports />;
      case 'documents':
        return <Documents />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div 
      className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-200"
      style={{
        display: 'flex',
        flexDirection: 'row', // Guarantees Sidebar and Content container sit side-by-side
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      {/* 11-link Primary Navigation Sidebar Drawer Panel */}
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
      />

      {/* Main Structural Layout View Container Wrapper Frame */}
      <div 
        className="flex flex-1 flex-col overflow-hidden"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        {/* Dynamic Nav Control Strip */}
        <Navbar 
          onMenuClick={() => setSidebarOpen(true)} 
          title={currentTab} 
        />

        {/* Scalable View Frame Outer Space Canvas */}
        <main 
          className="flex-1 overflow-y-auto no-scrollbar"
          style={{
            flex: 1,
            overflowY: 'auto'
          }}
        >
          <div className="animate-fade-in">
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

/**
 * Identity Security Filter Interceptor Controller View Shell Component
 */
function AppNavigationShell() {
  const { token: authCtxToken, loading } = useAuth();
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fallback for local development if backend context provider hasn't updated yet
  const localDevToken = localStorage.getItem('token');
  const activeToken = authCtxToken || localDevToken;

  // Structural delay handler waiting for JWT Token handshake resolver
  if (loading && !activeToken) {
    return (
      <div 
        className="flex h-screen w-screen items-center justify-center bg-slate-50 text-sm font-semibold tracking-wide text-slate-500 dark:bg-[#0b0f19] dark:text-slate-400"
        style={{
          display: 'flex',
          height: '100vh',
          width: '100vw',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020617',
          color: '#64748b',
          fontFamily: 'sans-serif'
        }}
      >
        <div 
          className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent mr-2" 
          style={{
            height: '20px',
            width: '20px',
            borderRadius: '50%',
            border: '2px solid #2563eb',
            borderTopColor: 'transparent',
            marginRight: '8px'
          }}
        />
        Synchronizing Application State...
      </div>
    );
  }

  // Redirect instantly to isolation screen block if key metrics match session decay
  if (!activeToken) {
    return <Login />;
  }

  return (
    <DashboardContent 
      currentTab={currentTab}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      setCurrentTab={setCurrentTab}
    />
  );
}

/**
 * Root System Infrastructure Main Entry Initialization Hook Wrapper
 */
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppNavigationShell />
      </AuthProvider>
    </ThemeProvider>
  );
}