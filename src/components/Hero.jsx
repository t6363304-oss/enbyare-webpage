export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 via-white to-emerald-50 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium tracking-wider">
          学生ボランティア団体
        </span>
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          えんびゃれ
        </h1>
        {/* TODO: 団体のキャッチコピーに変更してください */}
        <p className="text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed">
          つながりから、社会を変える。<br className="hidden sm:block" />
          ひとりひとりの力を、大きなうねりに。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-colors shadow-md"
          >
            えんびゃれを知る
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold rounded-full transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce text-teal-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
