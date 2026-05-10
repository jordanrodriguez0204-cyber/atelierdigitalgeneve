'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const items = [
  {
    id: 1,
    category: 'commerce' as const,
    type: 'Coiffeur',
    forfait: 'Starter',
    price: 'CHF 299',
    monthly: '29',
    image: '/card-coiffeur.jpg',
    demo: 'https://coiffeur.atelierdigitalgeneve.ch',
    bullets: [
      "Site une page, tout l'essentiel",
      'Galerie de réalisations',
      'Prise de rendez-vous en ligne',
    ],
    popular: false,
    isDemo: true,
  },
  {
    id: 2,
    category: 'commerce' as const,
    type: 'Restaurant',
    forfait: 'Standard',
    price: 'CHF 599',
    monthly: '49',
    image: '/card-restaurant.jpg',
    demo: 'https://restaurant.atelierdigitalgeneve.ch',
    bullets: [
      '5 pages optimisées Google',
      'Menu dédié + galerie photos',
      'Formulaire de réservation',
    ],
    popular: true,
    isDemo: true,
  },
  {
    id: 3,
    category: 'commerce' as const,
    type: 'Boutique',
    forfait: 'Pro',
    price: 'CHF 990',
    monthly: '79',
    image: '/card-boutique.jpg',
    demo: 'https://boutique.atelierdigitalgeneve.ch',
    bullets: [
      'Pages illimitées + lookbook',
      'Collections filtrables par saison',
      'Réservation & catalogue avancés',
    ],
    popular: false,
    isDemo: true,
  },
  {
    id: 4,
    category: 'particulier' as const,
    type: 'Pâtisserie & Cuisine maison',
    forfait: 'Sur mesure',
    price: 'Sur mesure',
    monthly: '',
    image: '/card-cocina.jpg',
    demo: 'https://cocina-de-chanyz.vercel.app',
    bullets: [
      'Formulaire de devis avec option livraison',
      'Galerie de gâteaux filtrée par catégorie',
      'Section spécialités péruviennes',
      'Envoi de devis par email (Resend)',
      'WhatsApp flottant',
    ],
    popular: false,
    isDemo: false,
    name: 'Cocina de Chanyz',
  },
];

// Cards rendered in the main commerce grid (only the standard forfaits)
const commerceItems = items.filter((i) => i.category === 'commerce');

// Exported so the portfolio page can render the Particuliers section
// from the same source of truth.
export const particulierItems = items.filter((i) => i.category === 'particulier');

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function PortfolioCards() {
  const hasDemo = commerceItems.some((i) => i.isDemo);
  return (
    <>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {commerceItems.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
          className={`group relative flex flex-col overflow-hidden rounded-[20px] bg-white
            transition-shadow duration-500
            ${item.popular
              ? 'shadow-[0_12px_52px_rgba(0,0,0,0.14)] hover:shadow-[0_32px_72px_rgba(0,0,0,0.20)]'
              : 'shadow-[0_2px_24px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.06] hover:shadow-[0_24px_64px_rgba(0,0,0,0.13)] hover:ring-black/[0.09]'
            }`}
        >

          {/* ── Image zone ── */}
          <div className="relative h-[280px] overflow-hidden">

            {/* Photo */}
            <img
              src={item.image}
              alt={`Exemple site ${item.type}`}
              className="absolute inset-0 w-full h-full object-cover
                         transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                         group-hover:scale-[1.04]"
            />

            {/* Intelligent scrim — dark only where text sits, image stays visible above */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.38) 35%, rgba(0,0,0,0.08) 60%, transparent 85%)',
              }}
            />

            {/* Top-left: Popular badge — frosted, no emoji */}
            {item.popular && (
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white/85 bg-white/10 backdrop-blur-md border border-white/12 px-2.5 py-[4.5px] rounded-full">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Populaire
                </span>
              </div>
            )}

            {/* Top-right: badge En ligne / Démo */}
            <div className="absolute top-3.5 right-3.5 z-10">
              {item.isDemo ? (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-white/75 bg-black/18 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full">
                  Démo *
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-white/88 bg-black/18 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  En ligne
                </span>
              )}
            </div>

            {/* Bottom overlay — price + forfait + external link */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-16 z-10">
              <div className="flex items-end justify-between gap-3">

                {/* Price block */}
                <div>
                  <p className="text-white/48 text-[10px] font-semibold uppercase tracking-[0.20em] mb-1 leading-none">
                    Forfait {item.forfait}
                  </p>
                  <p className="text-white text-[30px] font-bold tracking-tight leading-none">
                    {item.price}
                  </p>
                </div>

                {/* External link — frosted pill */}
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visiter le site ${item.type}`}
                  className="flex items-center justify-center w-9 h-9 shrink-0 rounded-xl
                             bg-white/10 backdrop-blur-md border border-white/14
                             text-white/58 hover:bg-white/22 hover:text-white
                             transition-all duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Content zone ── */}
          <div className="flex flex-col flex-1 px-5 pt-5 pb-5">

            {/* Header — type + monthly */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight leading-tight">
                  {item.type}
                </h3>
                <p className="text-slate-400 text-[11.5px] font-medium mt-[3px]">
                  + CHF {item.monthly} /mois hébergement
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="h-px bg-slate-100 mb-4" />

            {/* Feature list — editorial minimal bullets */}
            <ul className="flex-1 space-y-[10px] mb-5">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start gap-[10px] text-[13px] text-slate-600 leading-snug">
                  {/* Ultra minimal dash */}
                  <span className="mt-[5px] shrink-0 w-3 flex items-center">
                    <span className="block w-2.5 h-[1.5px] bg-slate-300 rounded-full" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Separator */}
            <div className="h-px bg-slate-100 mb-4" />

            {/* CTAs */}
            <div className="space-y-1.5">

              {/* Primary CTA */}
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-between w-full
                           bg-slate-900 hover:bg-red-600
                           text-white text-[13px] font-medium tracking-tight
                           py-[11px] px-4 rounded-xl
                           transition-colors duration-300"
              >
                <span>Voir le site</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Secondary link */}
              <Link
                href="/contact"
                className="flex items-center justify-center w-full
                           text-slate-400 hover:text-slate-600
                           text-[11.5px] font-medium tracking-wide
                           py-2 transition-colors duration-200"
              >
                Je veux ce forfait&nbsp;→
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
    {hasDemo && (
      <p className="text-center text-slate-400 text-xs mt-8">
        * Sites de démonstration fictifs créés à titre d&apos;illustration.
      </p>
    )}
    </>
  );
}
