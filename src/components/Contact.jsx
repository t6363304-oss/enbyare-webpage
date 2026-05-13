const purposes = [
  {
    emoji: '🌱',
    title: '参加したい',
    subtitle: '学生・社会人の方へ',
    body: 'えんびゃれの活動に興味がある方、只見に行ってみたい方、一緒に何かしてみたい方。まずは気軽にDMを送ってください。',
    cta: 'DMで参加を相談する',
    href: 'https://twitter.com/HPR49150091',
    ctaStyle: 'bg-green-700 hover:bg-green-800 text-white',
    borderStyle: 'border-green-200 hover:border-green-400',
    badgeStyle: 'bg-green-50 text-green-700',
  },
  {
    emoji: '🤝',
    title: '協力したい',
    subtitle: '地域・企業・団体の方へ',
    body: '只見町や地域づくりに関心のある団体・企業の方、学生と一緒に何かできないか模索している方、ぜひお声がけください。',
    cta: 'メールでお問い合わせ',
    href: 'mailto:aizu.volun.tadami@gmail.com',
    ctaStyle: 'bg-orange-500 hover:bg-orange-600 text-white',
    borderStyle: 'border-orange-200 hover:border-orange-400',
    badgeStyle: 'bg-orange-50 text-orange-700',
  },
  {
    emoji: '📰',
    title: '取材したい',
    subtitle: 'メディア・記者の方へ',
    body: '活動の取材・記事掲載・インタビューなど、メディア関係の方もお気軽にご連絡ください。活動の詳細をお伝えします。',
    cta: '取材のお問い合わせ',
    href: 'mailto:aizu.volun.tadami@gmail.com',
    ctaStyle: 'bg-gray-800 hover:bg-gray-900 text-white',
    borderStyle: 'border-gray-200 hover:border-gray-400',
    badgeStyle: 'bg-gray-50 text-gray-700',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-6">
          <span className="text-green-600 font-bold tracking-widest text-xs uppercase">Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-gray-900">お問い合わせ</h2>
        </div>
        <p className="text-center text-gray-500 mb-16 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          参加したい、協力したい、取材したい——<br className="hidden sm:block" />
          どんなきっかけでも、まず連絡してみてください。
        </p>

        {/* Purpose cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {purposes.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border-2 p-8 flex flex-col transition-all hover:shadow-lg ${p.borderStyle}`}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold mb-5 w-fit ${p.badgeStyle}`}>
                <span>{p.emoji}</span>
                <span>{p.title}</span>
              </div>
              <p className="text-xs text-gray-400 font-medium mb-3">{p.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{p.body}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-full font-bold text-sm transition-all hover:shadow-md hover:-translate-y-0.5 transform ${p.ctaStyle}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Email CTA */}
        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8 mb-8 text-center">
          <p className="text-orange-800 font-bold text-lg mb-2">メールでもお気軽に</p>
          <p className="text-orange-600 text-sm mb-4">返信まで数日かかる場合があります。まずはSNSのDMがおすすめです。</p>
          <a
            href="mailto:aizu.volun.tadami@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            aizu.volun.tadami@gmail.com
          </a>
        </div>

        {/* SNS section */}
        <div className="bg-green-950 rounded-3xl p-8 sm:p-12 text-center">
          <p className="text-green-300 text-sm font-medium mb-4 tracking-wider uppercase">Follow Us</p>
          <p className="text-white font-bold text-xl mb-2">SNSでも発信中</p>
          <p className="text-green-400 text-sm mb-8">活動の最新情報はSNSでチェック！</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://twitter.com/HPR49150091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <a
              href="https://instagram.com/tadami_okoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-500 hover:to-purple-600 text-white font-bold rounded-full transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
