import React from 'react';
import { Layers, Truck, Anchor, CheckCircle } from 'lucide-react';

export default function PipelineKanban() {
  const columns = [
    { name: 'Sourced', icon: Layers, color: 'text-purple-500', bg: 'bg-purple-500', items: [{ id: '1', time: '18 minutes ago' }, { id: '3', time: '10 minutes ago' }] },
    { name: 'In Transit', icon: Truck, color: 'text-blue-500', bg: 'bg-blue-500', items: [{ id: '2', time: '13 minutes ago', active: true }] },
    { name: 'Port Handling', icon: Anchor, color: 'text-amber-500', bg: 'bg-amber-500', items: [{ id: '4', time: 'Awaiting clearance' }] },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 h-full">
      {columns.map((col, idx) => {
        const Icon = col.icon;
        return (
          <div key={idx} className="flex flex-col rounded-xl bg-slate-50 p-3 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
            <div className="mb-3 flex items-center gap-2">
              <Icon size={14} className={col.color} />
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{col.name}</p>
            </div>
            <div className="flex-1 space-y-2">
              {col.items.map((item) => (
                <div 
                  key={item.id} 
                  className={`rounded-lg border bg-white p-3 shadow-sm transition-all dark:bg-slate-900 ${
                    item.active 
                      ? 'border-blue-500 ring-1 ring-blue-500/30' 
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Shipment {item.id}</p>
                    <span className={`h-1.5 w-1.5 rounded-full ${col.bg}`}></span>
                  </div>
                  <span className="mt-1 block text-[10px] text-slate-400 dark:text-slate-500 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}