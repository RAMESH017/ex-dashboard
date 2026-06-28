import React, { useState } from 'react';
import { Truck, MapPin, Phone, Plus, Tag } from 'lucide-react';

export default function Suppliers() {
  const [suppliers] = useState([
    { id: 1, company: 'Tuticorin Garment Mills', agent: 'R. Kumar', phone: '+91 461 234589', origins: 'Tamil Nadu, India', type: 'Product Sourcing' },
    { id: 2, description: 'Oceanic Freight Transit', agent: 'Capt. S. Ahmed', phone: '+971 4 881234', origins: 'Jebel Ali, Dubai', type: 'Logistics Partner' }
  ]);

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0' }}>Supplier Network</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Monitor supply lines, mills, and shipping agencies.</p>
        </div>
        <button style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
          + Connect Supplier
        </button>
      </div>

      <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1e293b', color: '#64748b', backgroundColor: '#090d16' }}>
              <th style={{ padding: '16px' }}>Company Node</th>
              <th style={{ padding: '16px' }}>Liaison Agent</th>
              <th style={{ padding: '16px' }}>Contact Line</th>
              <th style={{ padding: '16px' }}>Origin Hub</th>
              <th style={{ padding: '16px', textAlign: 'right' }}>Classification</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map(sup => (
              <tr key={sup.id} style={{ borderBottom: '1px solid rgba(30, 41, 59, 0.5)', color: '#cbd5e1' }}>
                <td style={{ padding: '16px', fontWeight: '600', color: '#fff' }}>{sup.company || sup.description}</td>
                <td style={{ padding: '16px' }}>{sup.agent}</td>
                <td style={{ padding: '16px', color: '#94a3b8' }}><Phone size={12} inline="true" /> {sup.phone}</td>
                <td style={{ padding: '16px' }}><MapPin size={12} /> {sup.origins}</td>
                <td style={{ padding: '16px', textAlign: 'right' }}><span style={{ backgroundColor: '#1e293b', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', color: '#3b82f6' }}>{sup.type}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}