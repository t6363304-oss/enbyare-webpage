const cards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    title: 'つながりを大切に',
    // TODO: 活動内容に合わせて変更してください
    body: 'メンバー同士、地域の方々との深いつながりを育みながら活動しています。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: '社会とつながる',
    body: '地域課題に向き合い、学生ならではの視点で社会に貢献しています。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 3v1m0 16v1m8.66-13l-.87.5M4.21 17.5l-.87.5M20.66 17.5l-.87-.5M4.21 6.5l-.87-.5M21 12h-1M4 12H3" />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
    title: '学びと成長',
    body: '活動を通じて仲間とともに成長し、自分自身の可能性を広げています。',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-widest text-sm uppercase">About</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800">えんびゃれとは</h2>
        </div>

        {/* Mission text */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          {/* TODO: 団体の紹介文・理念に変更してください */}
          <p className="text-gray-600 text-lg leading-relaxed">
            えんびゃれは、地域と学生をつなぐボランティア団体です。<br />
            「縁」を大切に、社会のさまざまな場面で活動しています。<br />
            誰もが輝ける社会を目指して、日々活動中です。
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 text-teal-600 mb-5">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
