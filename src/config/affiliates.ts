export interface AffiliateItem {
  id: string;
  name: string;
  description: string;
  url: string;
  badge?: string;
  tone?: 'blue' | 'green' | 'purple' | 'amber';
  isPlaceholder?: boolean;
}

export const AFFILIATE_LINKS: AffiliateItem[] = [
  {
    id: '1password',
    name: '1Password',
    description: 'パスワードの作成・保存・同期を、ワンクリックで安心に使える候補。',
    url: '#',
    badge: 'おすすめ',
    tone: 'blue',
    isPlaceholder: true,
  },
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    description: '無料プランが軽く、個人利用にも扱いやすい保管サービスの候補。',
    url: '#',
    badge: '軽量',
    tone: 'green',
    isPlaceholder: true,
  },
  {
    id: 'yubikey',
    name: 'YubiKey',
    description: '2FA を強くするハードウェア候補。セキュリティの土台として検討中。',
    url: '#',
    badge: '強化',
    tone: 'purple',
    isPlaceholder: true,
  },
];
