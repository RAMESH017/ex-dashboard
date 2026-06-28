import React from 'react';

export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 w-full max-w-[1600px] mx-auto animate-fade-in pb-12">
      {children}
    </div>
  );
}