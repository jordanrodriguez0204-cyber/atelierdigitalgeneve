import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Découvrez mes réalisations — sites web créés pour des commerces genevois. Restaurant, coiffure, boutique, épicerie, artisan.',
};

const portfolioItems = [
  {
    id: 1,
    name: 'Chez Marcel',
    type: 'Restaurant genevois',
    location: 'Genève, Plainpalais',
    description:
      'Une carte en ligne appétissante qui attire les gourmands genevois et simplifie les réservations. Marco voulait un site qui reflète l\'ambiance chaleureuse de son bistrot tout en permettant les réservations en ligne.',
    tags: ['Restaurant', 'Réservation', 'Menu', 'SEO local'],
    emoji: '🍽️',
    forfait: 'Commerce',
    result: '+40% de réservations en ligne',
    color: 'from-amber-800 to-amber-900',
  },
  {
    id: 2,
    name: 'Salon Lumière',
    type: 'Coiffure & Beauté',
    location: 'Carouge',
    description:
      'Réservation en ligne simplifiée pour ne plus jamais rater un rendez-vous. Sophie avait besoin d\'un site élégant permettant à ses clientes de prendre rendez-vous 24h/24 depuis leur smartphone.',
    tags: ['Coiffure', 'Réservation', 'Galerie', 'Mobile'],
    emoji: '✂️',
    forfait: 'Commerce',
    result: 'Carnet de RDV complet 3 semaines à l\'avance',
    color: 'from-pink-800 to-pink-900',
  },
  {
    id: 3,
    name: 'La Boutique du Lac',
    type: 'Mode & Accessoires',
    location: 'Genève, Rive droite',
    description:
      'Une vitrine élégante pour vos collections qui donne envie de venir en boutique. Le site met en valeur les nouvelles collections et permet aux clientes de découvrir les pièces avant leur visite.',
    tags: ['Mode', 'Boutique', 'Collections', 'Lookbook'],
    emoji: '👗',
    forfait: 'Premium',
    result: 'Trafic en boutique +25%',
    color: 'from-purple-800 to-purple-900',
  },
  {
    id: 4,
    name: 'Épicerie des Nations',
    type: 'Épicerie fine & Produits du monde',
    location: 'Genève, Nations',
    description:
      'Faites découvrir vos produits du monde entier à une clientèle internationale. Ahmed souhaitait présenter son incroyable sélection de produits et faciliter les commandes click & collect.',
    tags: ['Épicerie', 'Produits', 'Click & Collect', 'Multilingue'],
    emoji: '🛒',
    forfait: 'Commerce',
    result: 'Nouveaux clients chaque semaine',
    color: 'from-green-800 to-green-900',
  },
  {
    id: 5,
    name: 'Atelier Horloger Meyrin',
    type: 'Horlogerie artisanale',
    location: 'Meyrin, Genève',
    description:
      'L\'excellence suisse en ligne — un site digne de la tradition horlogère genevoise. Un design sobre et élégant qui reflète le savoir-faire artisanal et inspire confiance aux clients.',
    tags: ['Horlogerie', 'Artisan', 'Réparations', 'Luxe'],
    emoji: '⌚',
    forfait: 'Premium',
    result: 'Demandes de réparation +60%',
    color: 'from-slate-700 to-slate-900',
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Réalisations
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Portfolio</h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Des sites web créés pour des commerces genevois qui ont fait confiance à Atelier Digital.
          </p>
        </div>
      </section>

      {/* Portfolio items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Visual */}
                <div
                  className={`rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br ${item.color} flex items-center justify-center relative ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    aria-hidden="true"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, #DC2626 0, #DC2626 1px, transparent 0, transparent 50%)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <span className="text-7xl" role="img" aria-label={item.type}>
                      {item.emoji}
                    </span>
                    <p className="text-white/80 text-sm font-medium mt-3">{item.name}</p>
                  </div>

                  {/* Forfait badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Forfait {item.forfait}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="text-red-600 text-sm font-semibold mb-2">{item.type}</div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{item.name}</h2>
                  <p className="text-slate-500 text-sm mb-4 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-5">{item.description}</p>

                  {/* Result */}
                  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-2 rounded-xl mb-5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {item.result}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold border-2 border-red-600 hover:border-red-700 px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Voir la démo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Votre projet */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Votre commerce sera le prochain
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            Rejoignez les commerces genevois qui ont déjà fait confiance à Atelier Digital.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-red-600/20"
          >
            Démarrer mon projet
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
