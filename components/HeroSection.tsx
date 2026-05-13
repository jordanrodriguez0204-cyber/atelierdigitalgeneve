'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/* ── Animation variants ── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* Reveal ligne par ligne — le span monte depuis sous un masque invisible */
const lineReveal = {
  hidden: { y: '105%' },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 1.0, ease, delay: 0.15 + i * 0.10 },
  }),
};

/* Fade simple pour les éléments secondaires */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease, delay: 0.52 + i * 0.09 },
  }),
};

const stats = [
  { value: '3',    label: 'Sites livrés à Genève' },
  { value: '7j',   label: 'Délai garanti' },
  { value: '100%', label: 'Satisfaction client' },
];

/* Lignes du titre principal */
const headlineLines = ["Votre commerce", "mérite d'être", "trouvé."];

export default function HeroSection() {
  return (
    <section className="relative min-h-[93vh] flex flex-col justify-between overflow-hidden bg-[#FAFAF8]">

      {/* ── Atmosphère — glow très subtil en haut à droite ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[640px] h-[640px] opacity-[0.22] translate-x-1/3 -translate-y-1/4"
          style={{
            background: 'radial-gradient(circle, rgba(201,55,44,0.18) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Grain très subtil */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '240px 240px',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* ── Contenu principal ── */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full flex-1 flex flex-col justify-center pt-32 pb-16">
        <div className="max-w-4xl">

          {/* Badge disponibilité */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 border border-[#0C0B09]/[0.10] text-[#4A453F] text-[11px] font-semibold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponible · 2 créneaux ce mois
            </span>
          </motion.div>

          {/* ── Headline — reveal ligne par ligne ── */}
          <h1 className="text-[clamp(52px,9vw,108px)] font-bold text-[#0C0B09] mb-8">
            {headlineLines.map((line, i) => (
              <span key={i} className="clip-line" style={{ display: 'block', lineHeight: 1.02 }}>
                <motion.span
                  className="block"
                  custom={i}
                  variants={lineReveal}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Dernier mot "trouvé." en accent */}
                  {i === 2 ? (
                    <span className="text-[#7B1616]">trouvé.</span>
                  ) : line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Sous-titre */}
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[18px] md:text-[20px] text-[#8C837A] leading-relaxed max-w-xl mb-10"
          >
            Je crée des sites web pour les commerces de Genève.{' '}
            <span className="text-[#4A453F] font-medium">Rapide, professionnel,</span>{' '}
            fait pour attirer de nouveaux clients.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            {/* Primaire — dark editorial */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-[#0C0B09] hover:bg-[#1C1B18]
                         text-white text-[14px] font-semibold tracking-tight
                         px-7 py-3.5 rounded-full
                         transition-all duration-300
                         shadow-[0_1px_2px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.10)]
                         hover:shadow-[0_2px_4px_rgba(0,0,0,0.14),0_8px_28px_rgba(0,0,0,0.16)]
                         hover:-translate-y-0.5"
            >
              Demander un devis gratuit
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Secondaire — ghost */}
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#4A453F]
                         hover:text-[#0C0B09] transition-colors duration-200 px-2 py-3.5 group"
            >
              Voir les réalisations
              <svg
                className="w-3.5 h-3.5 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Stats — bande editoriale en bas ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.9 }}
        className="relative border-t border-[#0C0B09]/[0.07]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-stretch divide-x divide-[#0C0B09]/[0.07]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 py-5 px-4 sm:px-8 first:pl-0">
                <div className="text-[22px] sm:text-[26px] font-bold text-[#0C0B09] tracking-tight leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium text-[#8C837A] tracking-[0.08em] uppercase leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
            {/* Mention sociale */}
            <div className="hidden lg:flex flex-1 items-center py-5 px-8">
              <p className="text-[12px] text-[#8C837A] leading-snug max-w-[180px]">
                Restaurant, coiffeur, boutique.{' '}
                <span className="text-[#4A453F] font-medium">Des commerces genevois déjà en ligne.</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
