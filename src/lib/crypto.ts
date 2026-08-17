export interface PasswordOptions {
  length: number;
  useUppercase: boolean; // A-Z
  useLowercase: boolean; // a-z
  useNumbers: boolean;   // 0-9
  useSymbols: boolean;   // !@#$%^&*...
  excludeSimilar: boolean; // O, 0, l, 1 などの紛らわしい文字を除外
}

const CHAR_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  similar: /[O0l1I]/g,
};

export function generatePassword(options: PasswordOptions): string {
  let validChars = '';
  if (options.useUppercase) validChars += CHAR_SETS.uppercase;
  if (options.useLowercase) validChars += CHAR_SETS.lowercase;
  if (options.useNumbers) validChars += CHAR_SETS.numbers;
  if (options.useSymbols) validChars += CHAR_SETS.symbols;

  if (options.excludeSimilar) {
    validChars = validChars.replace(CHAR_SETS.similar, '');
  }

  if (!validChars) return '';

  const array = new Uint32Array(options.length);
  // ブラウザ環境を想定（SSGでクライアント側の操作に使用）
  if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.getRandomValues === 'function') {
    window.crypto.getRandomValues(array);
  } else {
    // サーバー/ビルド時には単純な擬似乱数を使用（生成はクライアントで行う想定）
    for (let i = 0; i < array.length; i++) array[i] = Math.floor(Math.random() * 0xffffffff);
  }

  let password = '';
  for (let i = 0; i < options.length; i++) {
    password += validChars[array[i] % validChars.length];
  }

  return password;
}

export function calculateStrength(password: string): { score: number; label: string; color: string } {
  if (!password) return { score: 0, label: 'なし', color: 'bg-gray-500' };

  let poolSize = 0;
  if (/[a-z]/.test(password)) poolSize += 26;
  if (/[A-Z]/.test(password)) poolSize += 26;
  if (/[0-9]/.test(password)) poolSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) poolSize += 32;

  const entropy = password.length * Math.log2(poolSize || 1);

  if (entropy < 40) return { score: 25, label: '弱い', color: 'bg-red-500' };
  if (entropy < 60) return { score: 50, label: '普通', color: 'bg-yellow-500' };
  if (entropy < 80) return { score: 75, label: '強い', color: 'bg-blue-500' };
  return { score: 100, label: '非常に強力', color: 'bg-green-500' };
}
