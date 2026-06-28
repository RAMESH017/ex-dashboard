import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function ToastNotification({ message, onClose, duration = 4000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-xl bg-slate-900 p-4 text-white shadow-xl dark:bg-white dark:text-slate-900 border border-slate-800 dark:border-slate-200 max-w-sm animate-fade-in-up">
      <div className="rounded-full bg-emerald-500 p-1.5 text-white">
        <CheckCircle2 size={16} />
      </div>
      <div className="flex-1 text-sm font-medium">{message}</div>
      <button 
        onClick={onClose} 
        className="rounded p-0.5 text-slate-400 hover:bg-slate-800 dark:text-slate-500 dark:hover:bg-slate-100 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}