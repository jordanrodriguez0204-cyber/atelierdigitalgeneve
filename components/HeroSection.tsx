'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: '3', label: 'Sites livrés à Genève' },
  { value: '7j', label: 'Délai de livraison' },
  { value: '100%', label: 'Satisfaction client' },
];

const techBadges = ['Next.js', 'Google-ready', 'Mobile-first', 'Hébergement Suisse'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f8f8f8]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/4" />
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-20" viewBox="0 0 400 600" fill="none" preserveAspectRatio="xMinYMin slice">
          <g stroke="#E2E8F0" strokeWidth="1">
            {Array.from({ length: 8 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 80} x2="400" y2={i * 80} />)}
            {Array.from({ length: 6 }).map((_, i) => <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="600" />)}
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl" variants={container} initial="hidden" animate="visible">

          {/* Badge disponibilité */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
              <span>Disponible — 2 créneaux restants ce mois</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Votre commerce mérite d&apos;être{' '}
            <span className="relative inline-block">
              <span className="text-red-600">trouvé</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                <path d="M2 6C40 2 80 1 100 2C120 3 160 5 198 6" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>{' '}
            sur internet
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={item} className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
            Je crée des sites web modernes pour les commerces de Genève.{' '}
            <strong className="text-slate-700 font-semibold">Rapide, professionnel,</strong> fait pour attirer de nouveaux clients.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5"
            >
              Demander un devis gratuit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-lg px-8 py-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              Voir les réalisations
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.p variants={item} className="text-sm text-slate-400 mb-10">
            <span className="text-slate-600 font-medium">Restaurant, coiffeur, boutique</span> — des commerces genevois déjà en ligne.
          </motion.p>

          {/* Stats */}
          <motion.div variants={item} className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-slate-100">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-0.5">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Tech badges */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </span>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
