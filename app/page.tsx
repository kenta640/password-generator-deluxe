import React from 'react';
import { AffiliateSection } from '../src/components/AffiliateSection';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">パスワードジェネレーター</h1>
      <p className="text-sm text-gray-600 mb-6">シンプルで高速、完全静的エクスポート対応</p>
      <AffiliateSection />
    </main>
  );
}
