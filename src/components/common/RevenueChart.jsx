import React from 'react';

export default function RevenueChart() {
  // Mock data representing the heights from your layout image
  const chartData = [
    { month: 'Jan', income: 'h-[50%]', spend: 'h-[30%]' },
    { month: 'Feb', income: 'h-[65%]', spend: 'h-[35%]' },
    { month: 'Mar', income: 'h-[62%]', spend: 'h-[40%]' },
    { month: 'Apr', income: 'h-[70%]', spend: 'h-[48%]' },
    { month: 'May', income: 'h-[85%]', spend: 'h-[52%]' },
    { month: 'Jun', income: 'h-[82%]', spend: 'h-[60%]' },
  ];

  return (
    <div className="w-full">
      {/* Legend Header */}
      <div className="flex items-center justify-center gap-6 mb-6 text-xs font-medium text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-3 w-6 rounded bg-blue-500"></span>
          <span>Income</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-6 rounded bg-orange-500"></span>
          <span>Spend</span>
        </div>
      </div>

      {/* Bar Chart Container Area */}
      <div className="relative flex h-56 w-full items-end justify-between border-b border-l border-slate-200 px-2 pt-4 dark:border-slate-800">
        {chartData.map((data, idx) => (
          <div key={idx} className="flex flex-1 flex-col items-center h-full justify-end group">
            <div className="flex items-end gap-1.5 sm:gap-3 h-full w-full justify-center px-1">
              {/* Income Bar */}
              <div className={`${data.income} w-3 sm:w-6 rounded-t bg-blue-500 transition-all duration-300 group-hover:bg-blue-600 shadow-sm relative`}>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow">Income</div>
              </div>
              {/* Spend Bar */}
              <div className={`${data.spend} w-3 sm:w-6 rounded-t bg-orange-400 transition-all duration-300 group-hover:bg-orange-500 shadow-sm relative`}>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow">Spend</div>
              </div>
            </div>
            <span className="mt-2 text-xs font-medium text-slate-400 dark:text-slate-500">{data.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}