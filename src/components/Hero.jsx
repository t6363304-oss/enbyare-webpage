export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/activity_a1.jpg')" }}
      />

      {/* Dark green overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-950/65 to-green-950/85" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-32">
        {/* Badge */}
        <span className="inline-block mb-6 px-5 py-2 rounded-full bg-orange-500/90 text-white text-sm font-bold tracking-widest shadow-lg">
          学生団体 ・ 福島県只見町
        </span>

        {/* Main title */}
        <h1 className="text-6xl sm:text-8xl font-black text-white mb-6 tracking-tight leading-none">
          えんびゃれ
        </h1>

        {/* Catchphrase */}
        <p className="text-xl sm:text-2xl text-green-100 font-bold mb-5 leading-relaxed">
          若者が只見と関わり続けるきっかけをつくる学生団体
        </p>

        {/* Sub-copy */}
        <p className="text-green-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-12">
          豪雪地帯に広がる只見の自然、受け継がれてきた集落の文化、<br className="hidden sm:block" />
          そこで生きる人々との出会い。<br className="hidden sm:block" />
          学生だからこそできる挑戦を、一緒にしてみませんか。
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-sm shadow-lg"
          >
            えんびゃれを知る
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white/50 text-white hover:bg-white/10 font-bold rounded-full text-sm backdrop-blur-sm"
          >
            参加・お問い合わせ
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
