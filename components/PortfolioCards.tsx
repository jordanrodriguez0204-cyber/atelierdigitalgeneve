'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const items = [
  {
    id: 1,
    type: 'Coiffeur',
    emoji: '✂️',
    forfait: 'Starter',
    price: 'CHF 299',
    image: '/card-coiffeur.jpg',
    demo: 'https://coiffeur.atelierdigitalgeneve.ch',
    bullets: [
      'Site une page, tout l\'essentiel',
      'Galerie de réalisations',
      'Prise de rendez-vous en ligne',
    ],
    popular: false,
    accentColor: 'from-pink-500/20',
  },
  {
    id: 2,
    type: 'Restaurant',
    emoji: '🍽️',
    forfait: 'Standard',
    price: 'CHF 599',
    image: '/card-restaurant.jpg',
    demo: 'https://restaurant.atelierdigitalgeneve.ch',
    bullets: [
      '5 pages optimisées Google',
      'Menu dédié + galerie photos',
      'Formulaire de réservation',
    ],
    popular: true,
    accentColor: 'from-amber-500/20',
  },
  {
    id: 3,
    type: 'Boutique',
    emoji: '👗',
    forfait: 'Pro',
    price: 'CHF 990',
    image: '/card-boutique.jpg',
    demo: 'https://boutique.atelierdigitalgeneve.ch',
    bullets: [
      'Pages illimitées + lookbook',
      'Collections filtrables par saison',
      'Réservation & catalogue avancés',
    ],
    popular: false,
    accentColor: 'from-violet-500/20',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function PortfolioCards() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
          className="relative bg-white rounded-3xl overflow-hidden flex flex-col
                     shadow-[0_2px_24px_rgba(0,0,0,0.06)]
                     hover:shadow-[0_24px_64px_rgba(0,0,0,0.13)]
                     transition-shadow duration-500 group"
        >
          {/* Popular badge */}
          {item.popular && (
            <div className="absolute top-0 inset-x-0 z-20 flex justify-center -translate-y-0">
              <span className="bg-red-600 text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-b-xl shadow-md shadow-red-600/30">
                ⭐ Le plus populaire
              </span>
            </div>
          )}

          {/* Image zone */}
          <div className="relative h-52 overflow-hidden shrink-0">
            <motion.img
              src={item.image}
              alt={item.type}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />

            {/* En ligne badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-green-700 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                En ligne
              </span>
            </div>

            {/* Forfait + prix */}
            <div className="absolute bottom-4 left-5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                {item.forfait}
              </span>
              <p className="text-xl font-bold text-slate-900 leading-none">{item.price}</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pt-3 pb-6 flex flex-col flex-1">
            {/* Type + emoji */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:bg-slate-200 transition-colors">
                {item.emoji}
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">{item.type}</h3>
            </div>

            {/* Bullet points */}
            <ul className="space-y-2.5 mb-6 flex-1">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-px bg-slate-100 mb-5" />

            {/* CTAs */}
            <div className="space-y-2">
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-red-600
                           text-white font-semibold text-sm py-3 rounded-2xl
                           transition-all duration-300 group/btn"
              >
                Voir le site
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full text-slate-400 hover:text-red-600
                           text-sm font-medium py-2 transition-colors duration-200"
              >
                Je veux ce style →
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
