import React from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-slate-900">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
