'use client';

import { motion } from 'framer-motion';

const problems = [
  'Vos concurrents captent vos clients potentiels',
  "Aucune réservation en dehors des heures d'ouverture",
  'Pas de vitrine pour vos produits et services',
];

const solutions = [
  'Nouveaux clients 24h/24, 7j/7',
  'Réservations en ligne automatiques',
  'Site visible sur Google Genève',
];

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Pourquoi agir maintenant</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Chaque jour sans site, c&apos;est un client perdu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Le problème
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Sans site web, vous êtes invisible
              </h3>
              <p className="text-slate-500 leading-relaxed mb-7">
                Aujourd&apos;hui, vos clients cherchent sur Google avant de pousser votre porte.
              </p>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/10 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl" aria-hidden="true" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                La solution
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                Votre présence en ligne de A à Z
              </h3>
              <p className="text-slate-400 leading-relaxed mb-7">
                Je m&apos;occupe de tout : design, textes, mise en ligne. Vous vous concentrez sur votre commerce.
              </p>
              <ul className="space-y-3">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
