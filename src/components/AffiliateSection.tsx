import { AFFILIATE_LINKS } from '../config/affiliates';

const toneClasses = {
  blue: 'from-sky-500 via-blue-600 to-indigo-700',
  green: 'from-emerald-500 via-green-600 to-teal-700',
  purple: 'from-violet-500 via-purple-600 to-fuchsia-700',
  amber: 'from-amber-400 via-orange-500 to-rose-600',
};

export default function AffiliateSection() {
  if (!AFFILIATE_LINKS || AFFILIATE_LINKS.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 p-4 border rounded-xl bg-slate-900/60 shadow-lg shadow-slate-950/20">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300">Affiliate preview</p>
          <h3 className="text-lg font-bold text-white">おすすめのセキュリティツール</h3>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[10px] text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          placeholder
        </div>
      </div>

      <p className="mb-4 text-xs text-slate-300">
        このリポジトリでは、買う前の比較や候補確認用に、まずは見た目を整えたプレースホルダー表示を置いています。
        真の affiliate URL は後から差し替えます。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {AFFILIATE_LINKS.map((item) => {
          const card = (
            <div
              key={item.id}
              className={[
                'group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-3 transition transform hover:-translate-y-0.5 hover:border-sky-500/60',
                item.isPlaceholder ? 'cursor-default opacity-95' : 'cursor-pointer',
              ].join(' ')}
            >
              <div className={['mb-4 h-24 rounded-xl bg-gradient-to-br', toneClasses[item.tone ?? 'blue']].join(' ')}>
                <div className="flex h-full items-end justify-between p-3">
                  <div className="flex items-end gap-1.5">
                    {[0.35, 0.55, 0.8].map((height, idx) => (
                      <span
                        key={idx}
                        className="w-2 rounded-t-sm bg-white/80"
                        style={{ height: `${height * 50}px` }}
                      />
                    ))}
                  </div>
                  <span className="rounded-full border border-white/30 bg-slate-950/20 px-2 py-0.5 text-[10px] font-medium text-white/90">
                    signal
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="mt-1 text-[11px] text-slate-400">{item.badge ?? 'preview'}</div>
                </div>
                {item.isPlaceholder && (
                  <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-200">
                    draft
                  </span>
                )}
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-300">{item.description}</p>

              <div className="mt-4 flex items-center justify-between text-[11px] text-sky-300">
                <span>{item.isPlaceholder ? 'リンク未設定' : '詳細を見る'}</span>
                <span aria-hidden="true">→</span>
              </div>
            </div>
          );

          if (item.isPlaceholder) {
            return card;
          }

          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {card}
            </a>
          );
        })}
      </div>
    </section>
  );
}
