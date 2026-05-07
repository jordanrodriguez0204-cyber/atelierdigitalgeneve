import Link from 'next/link';

const stats = [
  { value: '3', label: 'Sites livrés à Genève' },
  { value: '7j', label: 'Délai de livraison' },
  { value: '100%', label: 'Satisfaction client' },
];

const techBadges = [
  { label: 'Next.js' },
  { label: 'Google-ready' },
  { label: 'Mobile-first' },
  { label: 'Hébergement Suisse' },
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
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
            <span>Disponible — 2 créneaux restants ce mois</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
            Votre commerce mérite d&apos;être{' '}
            <span className="relative inline-block">
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
          <p className="text-xl md:text-2xl text-slate-500 leading-[1.7] mb-10 max-w-2xl">
            Je crée des sites web modernes pour les commerces de Genève.{' '}
            <strong className="text-slate-700 font-semibold">Rapide, professionnel,</strong> et fait pour attirer de nouveaux clients.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5"
            >
              Demander un devis gratuit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              Voir les réalisations
            </Link>
          </div>

          {/* Social proof line */}
          <p className="text-sm text-slate-400 mb-10">
            <span className="text-slate-600 font-medium">Restaurant, coiffeur, boutique</span> — des commerces genevois déjà en ligne avec nous.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
