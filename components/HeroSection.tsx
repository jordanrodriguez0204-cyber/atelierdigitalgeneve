import Link from 'next/link';

const stats = [
  { value: '30+', label: 'Commerces accompagnés' },
  { value: '100%', label: 'Satisfaits' },
  { value: '7 jours', label: 'Mise en ligne' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-slate-50" />
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-30"
          viewBox="0 0 400 600"
          fill="none"
          preserveAspectRatio="xMinYMin slice"
        >
          <g stroke="#E2E8F0" strokeWidth="1">
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 80} x2="400" y2={i * 80} />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="600" />
            ))}
          </g>
          <rect x="40" y="40" width="60" height="60" rx="8" fill="#DC2626" opacity="0.06" />
          <rect x="280" y="200" width="80" height="80" rx="12" fill="#DC2626" opacity="0.04" />
          <rect x="160" y="400" width="50" height="50" rx="6" fill="#0F172A" opacity="0.04" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <span>🏆</span>
            <span>#1 agence web locale à Genève</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            Votre commerce mérite d&apos;être{' '}
            <span className="relative">
              <span className="text-red-600">trouvé</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6C40 2 80 1 100 2C120 3 160 5 198 6"
                  stroke="#DC2626"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>{' '}
            sur internet
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
            Je crée des sites web modernes pour les commerces de Genève.{' '}
            <strong className="text-slate-700 font-semibold">Rapide, professionnel,</strong> et fait pour attirer de nouveaux clients.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5"
            >
              Voir mes réalisations
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              Demander un devis gratuit
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
