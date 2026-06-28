import React from 'react';

export default function TransactionTable({ transactions }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="border-b border-slate-100 bg-slate-50/70 text-xs font-semibold uppercase text-slate-400 dark:border-slate-800 dark:bg-slate-900/50">
          <tr>
            <th className="py-3 px-4">Transaction ID</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Description</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
              <td className="py-3.5 px-4 font-medium text-slate-900 dark:text-white">{tx.id}</td>
              <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{tx.date}</td>
              <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 max-w-[200px] truncate">{tx.description}</td>
              <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium dark:bg-slate-800">
                  {tx.category}
                </span>
              </td>
              <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">{tx.amount}</td>
              <td className="py-3.5 px-4">
                <span className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${
                  tx.status === 'Completed' 
                    ? 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400' 
                    : 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400'
                }`}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}