'use client';

import React, { useState, useRef, useEffect } from 'react';
import { generatePassword, calculateStrength } from '../lib/crypto';
import { Copy } from 'lucide-react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [excludeSimilar, setExcludeSimilar] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const strength = calculateStrength(password);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function handleGenerate() {
    const p = generatePassword({
      length,
      useUppercase: upper,
      useLowercase: lower,
      useNumbers: numbers,
      useSymbols: symbols,
      excludeSimilar,
    });
    setPassword(p);
  }

  function handleCopy() {
    if (!password) return;
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setCopyError('');
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setCopyError('コピーに失敗しました');
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopyError(''), 2500);
    });
  }

  return (
    <>
      <section className="p-6 border rounded-lg bg-slate-50">
        <div className="flex items-center justify-between mb-4">
          <div className={`px-3 py-1 rounded text-white ${strength.color}`}>{strength.label}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <label className="flex items-center justify-between">
            長さ: <input type="number" min={4} max={256} value={length} onChange={(e) => setLength(Number(e.target.value))} className="ml-2 w-20 p-1 border rounded" />
          </label>
          <div className="flex gap-2 flex-wrap">
            <label className="flex items-center gap-2"><input type="checkbox" checked={upper} onChange={(e) => setUpper(e.target.checked)} /> 大文字</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)} /> 小文字</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} /> 数字</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} /> 記号</label>
          </div>
        </div>

        <label className="flex items-center gap-2 mb-4">
          <input type="checkbox" checked={excludeSimilar} onChange={(e) => setExcludeSimilar(e.target.checked)} /> 紛らわしい文字を除外 (O,0,l,1)
        </label>

        <div className="mb-4 flex gap-2">
          <button onClick={handleGenerate} className="btn">生成</button>
          <button onClick={handleCopy} className="btn-secondary flex items-center gap-2"><Copy size={16} /> コピー</button>
        </div>

        <div className="p-3 bg-white border rounded font-mono break-all">{password || <span className="text-gray-400">生成されたパスワードがここに表示されます</span>}</div>
      </section>

      {copied && (
        <div role="status" aria-live="polite" className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-md text-white shadow" style={{ backgroundColor: '#1f4fd6' }}>
          クリップボードにコピーしました
        </div>
      )}

      {copyError && (
        <div role="status" aria-live="polite" className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-md text-white shadow" style={{ backgroundColor: '#dc2626' }}>
          {copyError}
        </div>
      )}
    </>
  );
}
