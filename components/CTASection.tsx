'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const trustItems = [
  { label: 'Devis gratuit',      sub: 'Sans engagement' },
  { label: 'Livraison 7 jours',  sub: 'Garanti' },
  { label: 'Réponse sous 24h',   sub: 'Toujours' },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0C0B09] grain">

      {/* Atmosphère — glow rouge très discret */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[700px] h-[400px] opacity-[0.18]"
          style={{
            background: 'radial-gradient(ellipse, rgba(201,55,44,0.6) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Ligne décorative subtile en haut */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28 md:py-36">
        <div className="max-w-4xl">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-[11px] font-semibold tracking-[0.20em] uppercase text-white/30 mb-7"
          >
            Prochaine étape
          </motion.p>

          {/* Headline éditoriale */}
          <div className="mb-10">
            {['Votre site web,', 'en ligne en 7 jours.'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h2
                  initial={{ y: '102%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.95, ease, delay: 0.1 + i * 0.10 }}
                  className="text-[clamp(36px,6vw,72px)] font-bold text-white leading-[1.05] tracking-[-0.03em]"
                >
                  {line}
                </motion.h2>
              </div>
            ))}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.32 }}
            className="text-[17px] text-white/45 leading-relaxed max-w-xl mb-12"
          >
            Premier échange gratuit — par téléphone ou en présentiel à Genève.
            Devis fixe, aucune surprise sur la facture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.42 }}
            className="flex flex-col sm:flex-row items-start gap-3 mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5
                         bg-white text-[#0C0B09]
                         text-[14px] font-semibold tracking-tight
                         px-7 py-3.5 rounded-full
                         hover:bg-[#F2F0EB] hover:-translate-y-0.5
                         transition-all duration-200
                         shadow-[0_2px_20px_rgba(255,255,255,0.08)]"
            >
              Demander un devis gratuit
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2
                         border border-white/15 text-white/65
                         hover:border-white/30 hover:text-white
                         text-[14px] font-medium
                         px-7 py-3.5 rounded-full
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              Voir les réalisations
            </Link>
          </motion.div>

          {/* Trust items — ligne épurée */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.07] pt-8"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full bg-[#C9372C]" />
                <span className="text-[13px] font-medium text-white/60">
                  {item.label}
                  <span className="text-white/30 ml-1.5">— {item.sub}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
