import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'えんびゃれとは', href: '#about' },
  { label: '活動内容', href: '#activities' },
  { label: '活動実績', href: '#achievements' },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className={`text-xl font-black tracking-wide transition-colors ${
            scrolled ? 'text-green-800' : 'text-white'
          }`}
        >
          えんびゃれ
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors text-sm ${
                scrolled
                  ? 'text-gray-600 hover:text-green-700'
                  : 'text-green-100 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button (desktop) */}
        <a
          href="#contact"
          className={`hidden md:inline-block px-5 py-2 rounded-full text-sm font-bold transition-all ${
            scrolled
              ? 'bg-orange-500 hover:bg-orange-600 text-white'
              : 'bg-white/20 hover:bg-white/30 text-white border border-white/40'
          }`}
        >
          参加・お問い合わせ
        </a>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニューを開く"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-green-700 font-medium text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            参加・お問い合わせ
          </a>
        </nav>
      )}
    </header>
  )
}
