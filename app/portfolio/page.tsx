import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Notre portfolio est en construction. Nous cherchons nos premiers clients pilotes à Genève — restaurant, coiffeur, boutique, épicerie, artisan.',
};

const portfolioItems = [
  {
    id: 1,
    type: 'Restaurant',
    emoji: '🍽️',
    description:
      'Menu en ligne, galerie photos, formulaire de réservation, et référencement local pour attirer de nouveaux clients.',
    tags: ['Menu', 'Réservation', 'SEO local'],
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    demo: 'https://restaurant.atelierdigitalgeneve.ch',
    forfait: 'Standard — CHF 599',
  },
  {
    id: 2,
    type: 'Coiffeur',
    emoji: '✂️',
    description:
      "Présentation de vos services, galerie de réalisations, et prise de rendez-vous en ligne pour remplir votre agenda.",
    tags: ['Services', 'Galerie', 'Rendez-vous'],
    bg: 'bg-pink-50',
    border: 'border-pink-100',
    iconBg: 'bg-pink-100',
    demo: 'https://coiffeur.atelierdigitalgeneve.ch',
    forfait: 'Starter — CHF 299',
  },
  {
    id: 3,
    type: 'Boutique',
    emoji: '👗',
    description:
      'Vitrine élégante pour vos collections, carte interactive, horaires et contact pour donner envie de venir en boutique.',
    tags: ['Collections', 'Lookbook', 'Contact'],
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    iconBg: 'bg-purple-100',
  },
  {
    id: 4,
    type: 'Épicerie',
    emoji: '🛒',
    description:
      "Présentation de vos produits, informations pratiques, et formulaire de contact pour fidéliser votre clientèle de quartier.",
    tags: ['Produits', 'Horaires', 'Click & Collect'],
    bg: 'bg-green-50',
    border: 'border-green-100',
    iconBg: 'bg-green-100',
  },
  {
    id: 5,
    type: 'Artisan',
    emoji: '🔨',
    description:
      "Mise en valeur de votre savoir-faire, portfolio de réalisations, et devis en ligne pour développer votre activité.",
    tags: ['Réalisations', 'Devis', 'Expertise'],
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    iconBg: 'bg-slate-200',
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Nos réalisations
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Des exemples concrets de ce qu&apos;on peut créer pour votre commerce à Genève.
          </p>
        </div>
      </section>

      {/* Portfolio items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm italic mb-8">
            * Les sites marqués &quot;En ligne&quot; sont des exemples fictifs créés à titre de démonstration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`${item.bg} rounded-2xl border ${item.border} overflow-hidden flex flex-col`}
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center text-3xl`}>
                      {item.emoji}
                    </div>
                    {'demo' in item ? (
                      <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        En ligne
                      </span>
                    ) : (
                      <span className="inline-flex items-center bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                        À venir
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.type}</h3>
                  {'forfait' in item && (
                    <p className="text-xs font-semibold text-red-600 mb-2">{item.forfait}</p>
                  )}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/70 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full border border-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6 mt-auto flex flex-col gap-2">
                  {'demo' in item && (
                    <Link
                      href={item.demo!}
                      target="_blank"
                      className="block text-center bg-slate-900 hover:bg-slate-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
                    >
                      Voir le site →
                    </Link>
                  )}
                  <Link
                    href="/contact"
                    className="block text-center bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
                  >
                    Je veux le même
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
            Votre commerce sera le premier
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            Nos premiers clients bénéficient de tarifs préférentiels et d&apos;un suivi personnalisé. Soyez parmi les pionniers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-red-600/20"
          >
            Devenir client pilote
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
