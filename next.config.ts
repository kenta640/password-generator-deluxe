import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // 静的HTML/JSを出力（サーバー不要）
  images: {
    unoptimized: true, // next/image の最適化サーバーを無効化
  },
};

export default nextConfig;
