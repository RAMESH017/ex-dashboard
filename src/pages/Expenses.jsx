import React, { useState } from 'react';
import { ShoppingCart, Plus, Trash2, Calendar, Tag, DollarSign, FileText } from 'lucide-react';

export default function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2026-06-28', description: 'Port clearance handling fee', category: 'Port Charges', amount: 1250.00 },
    { id: 2, date: '2026-06-25', description: 'Container truck logistics fuel surcharge', category: 'Transportation', amount: 850.00 },
    { id: 3, date: '2026-06-20', description: 'Customs customs clearance stamp duty', category: 'Duty & Taxes', amount: 3100.00 }
  ]);

  const [desc, setDesc] = useState('');
  const [cat, setCat] = useState('Port Charges');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('2026-06-28');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;
    
    const newExpense = {
      id: Date.now(),
      date,
      description: desc,
      category: cat,
      amount: parseFloat(amount)
    };
    
    setExpenses([newExpense, ...expenses]);
    setDesc('');
    setAmount('');
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      
      {/* Header section */}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>Expense Tracking Ledger</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Log and audit outgoing costs, logistics distributions, and custom tariffs.</p>
        </div>
        <div style={{ backgroundColor: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)', borderRadius: '12px', padding: '12px 24px' }}>
          <span style={{ fontSize: '12px', color: '#f43f5e', fontWeight: '600', textTransform: 'uppercase', display: 'block' }}>Total Outflow</span>
          <span style={{ fontSize: '24px', fontWeight: '700', color: '#f43f5e' }}>${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      {/* Grid Split Content */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'start' }}>
        
        {/* Entry Log Form */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingCart size={18} color="#f43f5e" /> Record New Outflow Line
          </h3>
          
          <form onSubmit={handleAddExpense} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Description</label>
              <input type="text" required value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g., Container storage costs" style={{ backgroundColor: 'rgba(2, 6, 17, 0.5)', border: '1px solid #334155', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Category</label>
                <select value={cat} onChange={(e) => setCat(e.target.value)} style={{ backgroundColor: 'rgba(2, 26, 17, 0.5)', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }}>
                  <option value="Port Charges">Port Charges</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Duty & Taxes">Duty & Taxes</option>
                  <option value="Sourcing Cost">Sourcing Cost</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Amount ($)</label>
                <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" style={{ backgroundColor: 'rgba(2, 6, 17, 0.5)', border: '1px solid #334155', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Posting Date</label>
              <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} style={{ backgroundColor: 'rgba(2, 6, 17, 0.5)', border: '1px solid #334155', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }} />
            </div>

            <button type="submit" style={{ backgroundColor: '#f43f5e', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
              <Plus size={16} /> Log Expense Line
            </button>
          </form>
        </div>

        {/* Expense Record View Table */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 20px 0' }}>Recorded Audit Logs</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {expenses.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', padding: '14px', border: '1px solid #1e293b', borderRadius: '12px', backgroundColor: 'rgba(2, 6, 17, 0.2)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontWeight: '600', fontSize: '14px', color: '#f8fafc' }}>{item.description}</span>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#64748b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Tag size={12} /> {item.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {item.date}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontWeight: '700', color: '#f43f5e', fontSize: '15px' }}>-${item.amount.toFixed(2)}</span>
                  <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#475569'}><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}