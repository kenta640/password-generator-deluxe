import { AFFILIATE_LINKS } from '../config/affiliates';

export function AffiliateSection() {
  if (!AFFILIATE_LINKS || AFFILIATE_LINKS.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 p-4 border rounded-xl bg-slate-900/50">
      <h3 className="text-sm font-bold text-gray-400 mb-3">
        生成したパスワードの保管はこちら（外部サービス）
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AFFILIATE_LINKS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-800 rounded-lg hover:border-slate-700 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">{item.name}</span>
                {item.badge && (
                  <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1">{item.description}</p>
            </div>
            <span className="text-xs text-blue-400 mt-3 inline-block">詳細を見る →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
