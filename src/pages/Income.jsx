import React, { useState } from 'react';
import { TrendingUp, Plus, Trash2, Calendar, User, DollarSign } from 'lucide-react';

export default function Income() {
  const [incomeStreams, setIncomeStreams] = useState([
    { id: 1, date: '2026-06-27', reference: 'Advance buyer collection invoice #88', channel: 'Client Escrow', amount: 45800.00 },
    { id: 2, date: '2026-06-22', description: 'LC Verification clearing installment', channel: 'Letter of Credit', amount: 28900.00 }
  ]);

  const [ref, setRef] = useState('');
  const [channel, setChannel] = useState('Client Escrow');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('2026-06-28');

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (!ref || !amount) return;

    const newIncome = {
      id: Date.now(),
      date,
      reference: ref,
      channel,
      amount: parseFloat(amount)
    };

    setIncomeStreams([newIncome, ...incomeStreams]);
    setRef('');
    setAmount('');
  };

  const handleDelete = (id) => {
    setIncomeStreams(incomeStreams.filter(item => item.id !== id));
  };

  const totalIncome = incomeStreams.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ padding: '32px', backgroundColor: '#020617', minHeight: 'calc(100vh - 64px)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      
      {/* Header block */}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>Inbound Remittance Ledger</h2>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Monitor trade receipts, open balances, and escrow distributions.</p>
        </div>
        <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '12px 24px' }}>
          <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '600', textTransform: 'uppercase', display: 'block' }}>Total Inflow</span>
          <span style={{ fontSize: '24px', fontWeight: '700', color: '#10b981' }}>${totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      {/* Layout Grid columns split */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'start' }}>
        
        {/* Entry submission card component */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={18} color="#10b981" /> Record Secure Remittance
          </h3>
          
          <form onSubmit={handleAddIncome} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Payment Reference / Invoice</label>
              <input type="text" required value={ref} onChange={(e) => setRef(e.target.value)} placeholder="e.g., UAE Forwarder Balance Retainer" style={{ backgroundColor: 'rgba(2, 6, 17, 0.5)', border: '1px solid #334155', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Remit Channel</label>
                <select value={channel} onChange={(e) => setChannel(e.target.value)} style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }}>
                  <option value="Client Escrow">Client Escrow</option>
                  <option value="Letter of Credit">Letter of Credit</option>
                  <option value="Direct Telegraphic">Direct Wire</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Value ($)</label>
                <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" style={{ backgroundColor: 'rgba(2, 6, 17, 0.5)', border: '1px solid #334155', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Settlement Date</label>
              <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} style={{ backgroundColor: 'rgba(2, 6, 17, 0.5)', border: '1px solid #334155', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }} />
            </div>

            <button type="submit" style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyOrigin: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
              <Plus size={16} /> Secure Receipt Log
            </button>
          </form>
        </div>

        {/* Stream History Tracker Board */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 20px 0' }}>Cleared Inflow Records</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {incomeStreams.map((stream) => (
              <div key={stream.id} style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', padding: '14px', border: '1px solid #1e293b', borderRadius: '12px', backgroundColor: 'rgba(2, 6, 17, 0.2)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontWeight: '600', fontSize: '14px', color: '#f8fafc' }}>{stream.reference}</span>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#64748b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={12} /> {stream.channel}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {stream.date}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontWeight: '700', color: '#10b981', fontSize: '15px' }}>+{stream.amount.toFixed(2)}</span>
                  <button onClick={() => handleDelete(stream.id)} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer' }}><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}