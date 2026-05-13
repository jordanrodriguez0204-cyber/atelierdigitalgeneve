import type { CaseStudy } from '@/lib/realisations';

interface CaseStudySectionProps {
  caseStudy: CaseStudy;
}

const blocks: Array<{
  key: keyof Pick<CaseStudy, 'probleme' | 'solution' | 'resultat'>;
  label: string;
  index: string;
}> = [
  { key: 'probleme', label: 'Le problème', index: '01' },
  { key: 'solution', label: 'La solution', index: '02' },
  { key: 'resultat', label: 'Le résultat', index: '03' },
];

/**
 * Bloc "Problème / Solution / Résultat" pour les pages détail.
 *
 * Server Component. Format éditorial proche du process bloc du portfolio
 * (cards numérotées). Pour les case studies riches en métriques, Jordan peut
 * inclure des chiffres directement dans `resultat` — le composant ne fait pas
 * de mise en valeur supplémentaire pour ne pas s'éloigner du style du reste
 * du site.
 */
export default function CaseStudySection({ caseStudy }: CaseStudySectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Étude de cas
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comment on est arrivés là
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.key}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-colors duration-300 hover:border-red-100 hover:bg-red-50/30"
            >
              <div className="mb-4 select-none text-4xl font-bold leading-none text-slate-200">
                {b.index}
              </div>
              <h3 className="mb-2 font-bold text-slate-900">{b.label}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {caseStudy[b.key]}
              </p>
            </div>
          ))}
        </div>

        {caseStudy.temoignage && (
          <blockquote className="mx-auto mt-12 max-w-3xl rounded-2xl bg-white p-8 ring-1 ring-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.07)]">
            <svg
              aria-hidden="true"
              className="mb-4 h-6 w-6 text-red-500/80"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.17 4C4.31 4 2 6.31 2 9.17V20h7V11H4.83c0-1.84 1.5-3.33 3.34-3.33V4zM18.17 4c-2.86 0-5.17 2.31-5.17 5.17V20h7V11h-4.17c0-1.84 1.5-3.33 3.34-3.33V4z" />
            </svg>
            <p className="text-[16px] leading-relaxed text-slate-700">
              {caseStudy.temoignage.citation}
            </p>
            <footer className="mt-5 border-t border-slate-100 pt-4 text-sm">
              <p className="font-semibold text-slate-900">
                {caseStudy.temoignage.auteur}
              </p>
              <p className="text-slate-500">{caseStudy.temoignage.role}</p>
            </footer>
          </blockquote>
        )}
      </div>
    </section>
  );
}
