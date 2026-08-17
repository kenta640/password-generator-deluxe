export interface AffiliateItem {
  id: string;
  name: string;
  description: string;
  url: string;
  badge?: string;
}

export const AFFILIATE_LINKS: AffiliateItem[] = [
  /* 準備ができたらコメントアウトを解除
  {
    id: '1password',
    name: '1Password',
    description: 'エンジニア利用率高。生成したパスワードをワンクリックで安全同期。',
    url: 'https://1password.com/...', // アフィリエイトURL
    badge: 'おすすめ',
  },
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    description: 'オープンソースで無料から使える高機能パスワードマネージャー。',
    url: 'https://bitwarden.com/...',
  },
  */
];
