import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import PortfolioCards from '@/components/PortfolioCards';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Découvrez nos réalisations web pour les commerces genevois : restaurant, coiffeur, boutique. Sites modernes, mobiles et optimisés Google. Devis gratuit.',
};

const stats = [
  { value: '4', label: 'Sites livrés', sub: 'à Genève' },
  { value: '7j', label: 'Délai moyen', sub: 'de livraison' },
  { value: '100%', label: 'Satisfaction', sub: 'garantie' },
];

const particuliers = [
  {
    name: 'Cocina de Chanyz',
    type: 'Pâtisserie & Cuisine maison',
    emoji: '🎂',
    href: 'https://cocina-de-chanyz.vercel.app',
    bullets: [
      'Formulaire de devis avec option livraison',
      'Galerie de gâteaux filtrée par catégorie',
      'Section spécialités péruviennes',
      'Envoi de devis par email (Resend)',
      'WhatsApp flottant',
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-16 bg-white">

      {/* ── Hero ── */}
      <section className="bg-slate-900 py-20 text-center px-4 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
            Des sites qui{' '}
            <span className="text-red-500">convertissent</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Chaque réalisation est conçue pour attirer des clients,
            pas juste pour être belle.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            {stats.map((s) => (
              <div key={s.label} className="py-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">{s.label}</div>
                <div className="text-xs text-slate-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
              Exemples de réalisations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Trois commerces, trois budgets
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              Cliquez sur chaque site pour le visiter en direct.
            </p>
          </div>

          <PortfolioCards />
        </div>
      </section>

      {/* ── Particuliers & Associations ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
              Au-delà des forfaits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Particuliers &amp; Associations
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              Des projets sur mesure pour celles et ceux qui ne rentrent pas
              dans une grille de tarifs standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {particuliers.map((p) => (
              <div
                key={p.name}
                className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white
                           shadow-[0_2px_24px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.06]
                           hover:shadow-[0_24px_64px_rgba(0,0,0,0.13)] hover:ring-black/[0.09]
                           transition-shadow duration-500"
              >
                {/* ── Image zone — placeholder élégant ── */}
                <div className="relative h-[280px] overflow-hidden">

                  {/* Gradient placeholder */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 35%, #fbcfe8 70%, #f9a8d4 100%)',
                    }}
                  />

                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.18) 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Centered emoji + name */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-6xl mb-3 drop-shadow-sm">{p.emoji}</span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-900/55 mb-1.5">
                      Projet sur mesure
                    </p>
                    <p className="text-[20px] font-bold tracking-tight text-rose-950/85">
                      {p.name}
                    </p>
                  </div>

                  {/* Soft scrim only at top + bottom for badge legibility */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 25%, transparent 80%, rgba(0,0,0,0.10) 100%)',
                    }}
                  />

                  {/* Top-right: En ligne badge */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-white bg-black/35 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      En ligne
                    </span>
                  </div>

                  {/* Top-left: Sur mesure tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white bg-black/35 backdrop-blur-md border border-white/15 px-2.5 py-[4.5px] rounded-full">
                      Sur mesure
                    </span>
                  </div>

                  {/* External link pill bottom-right */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visiter le site ${p.name}`}
                      className="flex items-center justify-center w-9 h-9 rounded-xl
                                 bg-white/85 backdrop-blur-md border border-white/40
                                 text-rose-900/70 hover:bg-white hover:text-rose-900
                                 transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* ── Content zone ── */}
                <div className="flex flex-col flex-1 px-5 pt-5 pb-5">

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight leading-tight">
                        {p.type}
                      </h3>
                      <p className="text-slate-400 text-[11.5px] font-medium mt-[3px]">
                        Tarif établi sur devis
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 mb-4" />

                  <ul className="flex-1 space-y-[10px] mb-5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-[10px] text-[13px] text-slate-600 leading-snug">
                        <span className="mt-[5px] shrink-0 w-3 flex items-center">
                          <span className="block w-2.5 h-[1.5px] bg-slate-300 rounded-full" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="h-px bg-slate-100 mb-4" />

                  <div className="space-y-1.5">
                    <a
                      href={p.href}
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

                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full
                                 text-slate-400 hover:text-slate-600
                                 text-[11.5px] font-medium tracking-wide
                                 py-2 transition-colors duration-200"
                    >
                      Demander un projet sur mesure&nbsp;→
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              De l&apos;idée au site en 4 étapes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Échange gratuit', desc: '20 min par téléphone pour comprendre votre projet.' },
              { n: '02', title: 'Devis sous 24h', desc: 'Devis fixe + première maquette. Aucune surprise.' },
              { n: '03', title: 'Création', desc: 'Je construis votre site. Vous validez chaque étape.' },
              { n: '04', title: 'Mise en ligne', desc: 'Votre site est live. Je soumets tout à Google.' },
            ].map((step) => (
              <div key={step.n} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 group hover:border-red-100 hover:bg-red-50/30 transition-all duration-300">
                <div className="text-4xl font-bold text-slate-100 group-hover:text-red-100 transition-colors leading-none mb-4 select-none">
                  {step.n}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Prochaine étape</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Votre commerce, le prochain en ligne
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Devis gratuit · Livraison en 7 jours · Satisfaction garantie
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700
                         text-white font-bold text-lg px-8 py-4 rounded-2xl
                         transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5"
            >
              Demander un devis gratuit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50
                         text-slate-700 font-semibold text-lg px-8 py-4 rounded-2xl
                         border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
