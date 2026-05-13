const achievements = [
  {
    date: '2024年GW',
    category: '現地活動',
    categoryColor: 'bg-green-100 text-green-800',
    title: '上福井集落での普請・芋植えに参加',
    body: '福島県只見町・上福井集落の普請（地域共同作業）と芋植えに、複数大学の学生が参加。集落の方々と一緒に汗を流し、地域の文化に触れました。',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    date: '活動継続中',
    category: 'チーム',
    categoryColor: 'bg-orange-100 text-orange-800',
    title: '複数大学の学生が只見町で活動',
    body: '東京・関東圏をはじめ複数の大学から学生が集まり、只見町での活動を継続。学年・大学を超えたつながりが生まれています。',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
  {
    date: 'メディア掲載',
    category: 'メディア',
    categoryColor: 'bg-blue-100 text-blue-800',
    title: '福島民報・福島民友に掲載',
    body: '福島県の主要地方紙「福島民報」「福島民友」に活動が紹介されました。地域メディアを通じて、学生の取り組みが只見全体に届いています。',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest text-xs uppercase">Achievements</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-gray-900">活動実績</h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            学生たちは今も只見と関わり続けています。
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-green-200" />

          <div className="space-y-8">
            {achievements.map((item, i) => (
              <div key={i} className="relative flex gap-6 sm:gap-10">
                {/* Circle on timeline */}
                <div className="flex-shrink-0 w-12 sm:w-16 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-green-700 border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow mb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.categoryColor}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More coming */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">活動は現在も継続中です。最新情報はSNSをチェック！</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://twitter.com/HPR49150091"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <a
              href="https://instagram.com/tadami_okoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
