import React from 'react';

export default function SummaryCard({ title, value, changeText, isPositive, isNeutral, icon: Icon, iconBg }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
        <span className={`rounded-lg p-2 ${iconBg}`}>
          <Icon size={20} />
        </span>
      </div>
      <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
      <p className={`mt-1 text-xs font-medium ${
        isNeutral ? 'text-slate-400' : isPositive ? 'text-green-600' : 'text-red-600'
      }`}>
        {changeText}
      </p>
    </div>
  );
}