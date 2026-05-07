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
  { value: '3', label: 'Sites livrés', sub: 'à Genève' },
  { value: '7j', label: 'Délai moyen', sub: 'de livraison' },
  { value: '100%', label: 'Satisfaction', sub: 'garantie' },
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

          <p className="text-center text-slate-400 text-xs mt-8">
            * Sites de démonstration fictifs créés à titre d&apos;illustration.
          </p>
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
