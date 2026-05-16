const photos = [
  { src: '/images/activity_a80.jpg', alt: '集落での清掃・地域作業' },
  { src: '/images/activity_a60.jpg', alt: '森の中をみんなで歩く' },
  { src: '/images/activity_a10.jpg', alt: '只見川での釣り体験' },
  { src: '/images/activity_a50.jpg', alt: '地域の方と一緒に食事' },
  { src: '/images/activity_a30.jpg', alt: '森林ハイキング' },
  { src: '/images/activity_b1.jpg', alt: '集落の道路清掃ボランティア' },
  { src: '/images/activity_a100.jpg', alt: '只見町の集落の風景' },
  { src: '/images/activity_c1.jpg', alt: '只見町観光スポット探索' },
  { src: '/images/activity_b20.jpg', alt: '農地周辺の散策' },
]

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-green-600 font-bold tracking-widest text-xs uppercase">Gallery</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-gray-900">活動の様子</h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            只見の自然の中で、学生が汗を流しています。
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 sm:col-span-1 row-span-2' : ''}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-gray-400 text-sm">
          最新の写真は
          <a href="https://instagram.com/tadami_okoshi" target="_blank" rel="noopener noreferrer"
            className="text-pink-500 font-bold hover:underline mx-1">Instagram</a>
          でも発信中！
        </p>

      </div>
    </section>
  )
}
