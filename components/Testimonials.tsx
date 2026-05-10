'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const guarantees = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Livré en 7 jours',
    description:
      "Votre site est en ligne en une semaine. Pas de mois d'attente, pas de projets qui traînent. Je m'engage sur un délai précis.",
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Satisfaction garantie',
    description:
      "Je travaille jusqu'à ce que vous soyez 100% satisfait. Des révisions illimitées pendant la phase de création, sans surcoût.",
    color: 'text-slate-700',
    bg: 'bg-slate-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Un interlocuteur unique',
    description:
      "Pas de chef de projet, pas d'intermédiaire. Vous avez mon numéro direct et je réponds sous 24h — toujours.",
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
];

const demos = [
  {
    emoji: '🍽️',
    type: 'Restaurant',
    name: 'Bistrot du Lac',
    forfait: 'Standard — CHF 599',
    href: 'https://restaurant.atelierdigitalgeneve.ch',
  },
  {
    emoji: '✂️',
    type: 'Coiffeur',
    name: 'Studio Nuance',
    forfait: 'Starter — CHF 299',
    href: 'https://coiffeur.atelierdigitalgeneve.ch',
  },
  {
    emoji: '👗',
    type: 'Boutique',
    name: 'Elara',
    forfait: 'Pro — CHF 990',
    href: 'https://boutique.atelierdigitalgeneve.ch',
  },
  {
    emoji: '🎂',
    type: 'Pâtisserie',
    name: 'Cocina de Chanyz',
    forfait: 'Sur mesure',
    href: 'https://cocina-de-chanyz.vercel.app',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Guarantees ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
            Mes engagements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Ce que je vous garantis
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Des engagements clairs, tenus à chaque projet.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {guarantees.map((g) => (
            <motion.div
              key={g.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_2px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] transition-shadow duration-500"
            >
              <div className={`w-12 h-12 ${g.bg} ${g.color} rounded-2xl flex items-center justify-center mb-5`}>
                {g.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{g.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{g.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Live demos ── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
            Sites en ligne
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Découvrez les réalisations
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Cliquez sur chaque site pour le visiter en direct.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {demos.map((d) => (
            <motion.a
              key={d.name}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_2px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] hover:border-red-100 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-red-50 transition-colors duration-300">
                {d.emoji}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                  {d.type}
                </p>
                <p className="font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-200 tracking-tight">
                  {d.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{d.forfait}</p>
              </div>
              <svg
                className="w-5 h-5 text-slate-200 group-hover:text-red-400 ml-auto shrink-0 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors text-sm"
          >
            Voir tous les détails du portfolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
