const activities = [
  {
    number: '01',
    photo: '/images/activity_a80.jpg',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'ボランティア活動',
    body: '集落の普請（ふしん）や農作業など、地域の暮らしを支える活動に参加。地元の方と一緒に汗を流しながら、只見の文化を体で学びます。',
    tag: '地域貢献',
  },
  {
    number: '02',
    photo: '/images/activity_a10.jpg',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: '学生向けツアー・体験企画',
    body: '只見の自然・食・文化を体験できる学生ツアーを企画・運営。地域の人との交流や、普段の学生生活では味わえない体験を提供しています。',
    tag: '企画運営',
  },
  {
    number: '03',
    photo: '/images/activity_a60.jpg',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    title: 'ワークショップ・対話の場',
    body: '只見が抱える地域課題を学生の目線で考えるワークショップを開催。ただ「体験する」だけでなく、学び・考え・発信する力を一緒に育てます。',
    tag: '学習・対話',
  },
  {
    number: '04',
    photo: '/images/activity_a50.jpg',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: 'SNS・メディアによる情報発信',
    body: 'Twitter（X）・Instagramで活動の様子を発信中。只見の魅力や学生の挑戦を多くの人に届け、「行ってみたい」「関わってみたい」人を増やしています。',
    tag: '発信',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-24 px-6 bg-green-950">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-orange-400 font-bold tracking-widest text-xs uppercase">Activities</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">活動内容</h2>
          <p className="mt-4 text-green-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            只見町での現場活動から情報発信まで、<br className="hidden sm:block" />
            学生ならではのスタイルで多角的に取り組んでいます。
          </p>
        </div>

        {/* Activity cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activities.map((a) => (
            <div
              key={a.number}
              className="rounded-2xl bg-green-900/50 border border-green-700/40 overflow-hidden"
            >
              {/* Photo thumbnail */}
              <div className="h-44 overflow-hidden">
                <img
                  src={a.photo}
                  alt={a.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start gap-5">
                  {/* Number + icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                      {a.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-green-500 tracking-widest">{a.number}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-800 text-green-300 border border-green-700">
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{a.title}</h3>
                    <p className="text-green-300 text-sm leading-relaxed">{a.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
