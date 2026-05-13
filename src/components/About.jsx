const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: '只見の自然・文化と生きる',
    body: '雪深い只見町に根ざした暮らしと文化。集落の普請（ふしん）や農作業など、地域の営みに学生が混ざり込み、一緒に汗を流します。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    title: '地域と学生をつなぐ',
    body: '只見の人たちと学生が継続的に関われる関係性をつくること。一度きりでなく、「また来たい」「また会いたい」と思える縁を大切にしています。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '学生らしい挑戦を',
    body: '「何かしてみたいけどきっかけがない」という学生こそ大歓迎。複数大学のメンバーが集まり、互いに刺激しながら、自分なりの関わり方を見つけています。',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest text-xs uppercase">About</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-gray-900">えんびゃれとは</h2>
        </div>

        {/* Main description block */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-12 mb-16 border border-green-100">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-loose">
              えんびゃれは、
              <span className="font-bold text-green-800">福島県只見町</span>
              をフィールドに活動する学生団体です。<br />
              豪雪地帯に広がる豊かな自然、受け継がれてきた集落の知恵と文化、<br className="hidden sm:block" />
              そこで生きる人々との出会いを通じて、<br />
              <span className="font-bold text-green-700">「若者が只見と関わり続けるきっかけ」</span>
              をつくっています。
            </p>
            <p className="mt-6 text-gray-500 text-base leading-relaxed">
              学生が地域に入り込み、一緒に汗を流すことで生まれる縁（えん）。<br />
              その縁が、若者にとっても只見にとっても、あたらしい力になると信じています。
            </p>
          </div>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg hover:border-green-200 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-50 text-green-700 mb-5 group-hover:bg-green-100 transition-colors">
                {v.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
