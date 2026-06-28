import React, { useState } from 'react';
import { Users, Mail, Globe, Plus, Trash2, ShieldCheck } from 'lucide-react';

export default function Customers() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Al-Mansoori Logistics LLC', contact: 'mansoori@logistics.ae', location: 'Dubai, UAE', orders: 24, status: 'Active' },
    { id: 2, name: 'Zeeland Import Corp', contact: 'ops@zeelandimport.nl', location: 'Rotterdam, Netherlands', orders: 12, status: 'Active' }
  ]);

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0' }}>Customer Directory</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Manage global buyers, port destinations, and distribution pipelines.</p>
        </div>
        <button style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={16} /> Add Buyer Account
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {customers.map(customer => (
          <div key={customer.id} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '20px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600', color: '#f8fafc' }}>{customer.name}</h3>
                <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontSize: '11px', padding: '2px 8px', borderRadius: '12px', fontWeight: '600' }}>{customer.status}</span>
              </div>
              <Users size={20} color="#3b82f6" />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#94a3b8', borderTop: '1px solid #1e293b', paddingTop: '12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} /> {customer.contact}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={14} /> {customer.location}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldCheck size={14} /> {customer.orders} Completed Shipments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}