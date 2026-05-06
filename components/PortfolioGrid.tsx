import Link from 'next/link';
import type { PortfolioItem } from '@/lib/types';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: 'Chez Marcel',
    type: 'Restaurant genevois',
    description: 'Une carte en ligne appétissante qui attire les gourmands genevois et simplifie les réservations.',
    tags: ['Restaurant', 'Réservation', 'Menu'],
    emoji: '🍽️',
  },
  {
    id: 2,
    name: 'Salon Lumière',
    type: 'Coiffure',
    description: 'Réservation en ligne simplifiée pour ne plus jamais rater un rendez-vous.',
    tags: ['Coiffure', 'Réservation', 'Galerie'],
    emoji: '✂️',
  },
  {
    id: 3,
    name: 'La Boutique du Lac',
    type: 'Mode',
    description: 'Une vitrine élégante pour vos collections qui donne envie de venir en boutique.',
    tags: ['Mode', 'Boutique', 'Collections'],
    emoji: '👗',
  },
  {
    id: 4,
    name: 'Épicerie des Nations',
    type: 'Épicerie fine',
    description: 'Faites découvrir vos produits du monde entier à une clientèle internationale.',
    tags: ['Épicerie', 'Produits', 'Carte interactive'],
    emoji: '🛒',
  },
  {
    id: 5,
    name: 'Atelier Horloger Meyrin',
    type: 'Artisan',
    description: 'L\'excellence suisse en ligne — un site digne de la tradition horlogère genevoise.',
    tags: ['Horlogerie', 'Artisan', 'Réparations'],
    emoji: '⌚',
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
            Quelques réalisations récentes
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Chaque commerce est unique. Voici comment j&apos;ai aidé des commerces genevois à se démarquer.
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
              <div className="h-36 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
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
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-slate-900 mb-0.5">{item.name}</h3>
                  <p className="text-red-600 text-sm font-medium">{item.type}</p>
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

                {/* Demo link */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-semibold group/link"
                >
                  Voir la démo
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
