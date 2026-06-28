import React from 'react';

export default function ExpensePieChart() {
  const categories = [
    { name: 'Office Rent', percentage: '25%', color: 'bg-blue-500' },
    { name: 'Salary', percentage: '20%', color: 'bg-red-500' },
    { name: 'Port Charges', percentage: '15%', color: 'bg-orange-500' },
    { name: 'Customs Charges', percentage: '10%', color: 'bg-yellow-500' },
    { name: 'Transportation', percentage: '10%', color: 'bg-green-500' },
    { name: 'Packaging', percentage: '8%', color: 'bg-teal-500' },
    { name: 'Others', percentage: '8%', color: 'bg-slate-400' },
  ];

  return (
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row lg:flex-col xl:flex-row">
      {/* CSS-Only Pure Donut Layout Visualization */}
      <div className="relative flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-teal-400 to-orange-400 p-8 shadow-inner dark:from-blue-600">
        <div className="h-full w-full rounded-full bg-white shadow-md dark:bg-slate-900 flex flex-col items-center justify-center">
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total</span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">100%</span>
        </div>
      </div>

      {/* Content List Indicators */}
      <div className="w-full flex-1 space-y-2 text-xs sm:max-w-[180px] lg:max-w-none xl:max-w-[180px]">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${cat.color}`}></span>
              <span className="truncate text-slate-600 dark:text-slate-400 font-medium">{cat.name}</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white pl-2">{cat.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}