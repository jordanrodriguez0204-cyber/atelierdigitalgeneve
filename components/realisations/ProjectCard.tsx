import Link from 'next/link';
import type { Realisation } from '@/lib/realisations';
import { getDisplayName } from '@/lib/realisations';
import ProjectMockup from './ProjectMockup';

interface ProjectCardProps {
  realisation: Realisation;
  /** Vrai pour les sites de démonstration ADG */
  isDemo?: boolean;
}

/**
 * Card individuelle d'un projet sur la grille /realisations.
 *
 * Server Component : aucune interaction (hover = pure CSS).
 * Le composant accepte n'importe quelle `Realisation` ; le booléen `isDemo`
 * sert uniquement à différencier visuellement les démos des vrais clients.
 */
export default function ProjectCard({ realisation, isDemo = false }: ProjectCardProps) {
  const {
    secteur,
    forfait,
    urlLive,
    resultat,
    mockup,
    statut,
    slug,
    caseStudy,
    anonymise,
  } = realisation;

  const displayName = getDisplayName(realisation);
  const hasCaseStudy = Boolean(caseStudy);
  const isConfidential = statut === 'confidentiel' || anonymise;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] transition-shadow duration-500 ${
        isDemo
          ? 'bg-slate-50 ring-1 ring-slate-200/70 hover:ring-slate-300 hover:shadow-[0_18px_48px_rgba(0,0,0,0.08)]'
          : 'bg-white ring-1 ring-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.13)] hover:ring-black/[0.09]'
      }`}
    >
      {/* ── Mockup ── */}
      <div className="relative">
        <ProjectMockup mockup={mockup} alt={`Aperçu du site ${displayName}`} />

        {/* Badges en surcouche */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-2 p-3.5">
          {/* Secteur (gauche) */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-md">
            {secteur}
          </span>

          {/* Statut (droite) */}
          {isDemo ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-md">
              Site de démonstration
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              En ligne
            </span>
          )}
        </div>
      </div>

      {/* ── Contenu ── */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
        <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-slate-900">
          {displayName}
        </h3>

        <p className="mt-2 line-clamp-2 text-[14px] leading-snug text-slate-600">
          {resultat}
        </p>

        {/* Séparateur fin */}
        <div className="my-4 h-px bg-slate-100" />

        {/* CTAs */}
        <div className="mt-auto space-y-1.5">
          {urlLive && !isConfidential && (
            <a
              href={urlLive}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le site live de ${displayName} (s'ouvre dans un nouvel onglet)`}
              className="group/btn flex w-full items-center justify-between rounded-xl bg-slate-900 px-4 py-[11px] text-[13px] font-medium tracking-tight text-white transition-colors duration-300 hover:bg-red-600"
            >
              <span>Voir le site live</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          )}

          {hasCaseStudy && (
            <Link
              href={`/realisations/${slug}`}
              className="flex w-full items-center justify-center py-2 text-[11.5px] font-medium tracking-wide text-slate-500 transition-colors duration-200 hover:text-slate-700"
            >
              Lire la case study&nbsp;→
            </Link>
          )}
        </div>

        {/* Forfait — petit, en bas, jamais mis en avant */}
        <p className="mt-3 text-right text-[10.5px] uppercase tracking-[0.16em] text-slate-300">
          Forfait {forfait}
        </p>
      </div>
    </article>
  );
}
