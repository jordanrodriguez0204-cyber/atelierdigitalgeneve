import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    type: 'Restaurant',
    emoji: '🍽️',
    description: 'Menu en ligne, galerie photos, formulaire de réservation pour attirer de nouveaux clients.',
    tags: ['Menu', 'Réservation', 'SEO local'],
    bg: 'from-amber-800 to-amber-900',
  },
  {
    id: 2,
    type: 'Coiffeur',
    emoji: '✂️',
    description: 'Présentation des services, galerie de réalisations et prise de rendez-vous en ligne.',
    tags: ['Services', 'Galerie', 'Rendez-vous'],
    bg: 'from-pink-800 to-pink-900',
  },
  {
    id: 3,
    type: 'Boutique',
    emoji: '👗',
    description: 'Vitrine élégante pour vos collections pour donner envie de venir en boutique.',
    tags: ['Collections', 'Lookbook', 'Contact'],
    bg: 'from-purple-800 to-purple-900',
  },
  {
    id: 4,
    type: 'Épicerie',
    emoji: '🛒',
    description: 'Présentation de vos produits et informations pratiques pour votre clientèle de quartier.',
    tags: ['Produits', 'Horaires', 'Click & Collect'],
    bg: 'from-green-800 to-green-900',
  },
  {
    id: 5,
    type: 'Artisan',
    emoji: '🔨',
    description: "Mise en valeur de votre savoir-faire et portfolio de réalisations pour développer votre activité.",
    tags: ['Réalisations', 'Devis', 'Expertise'],
    bg: 'from-slate-700 to-slate-900',
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Nos prochaines réalisations
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Notre portfolio est en construction. Nous cherchons nos premiers clients pilotes à Genève.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-200 group flex flex-col"
            >
              {/* Colored header */}
              <div className={`h-36 bg-gradient-to-br ${item.bg} flex items-center justify-center relative overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-10"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #DC2626 0, #DC2626 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <span className="text-5xl relative z-10" role="img" aria-label={item.type}>
                  {item.emoji}
                </span>
                {/* Badge "À venir" */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    À venir
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-slate-900 mb-0.5">{item.type}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-semibold group/link"
                >
                  Je suis intéressé
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Voir tout le portfolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
