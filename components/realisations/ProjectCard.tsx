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
 * Card d'un projet dans la grille /realisations.
 *
 * Refonte phase 2 — traitement "book de portfolio" :
 * - Mockup encadré comme une vraie photo (trait fin sous l'image)
 * - Légende small caps tracée sous le mockup : SECT. RESTAURATION · STANDARD · MAI 2026
 * - Titre du commerce en Fraunces serif
 * - Forfait toujours présent mais en label-serif italique discret, jamais
 *   mis en avant (parti pris : on ne vend pas un prix, on montre du travail)
 *
 * Server Component, aucune interaction (hover = pure CSS).
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
    dateMiseEnLigne,
  } = realisation;

  const displayName = getDisplayName(realisation);
  const hasCaseStudy = Boolean(caseStudy);
  const isConfidential = statut === 'confidentiel' || anonymise;

  // Formatage "MAI 2026" depuis "2026-05"
  const dateLabel = formatDateLabel(dateMiseEnLigne);

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden transition-shadow duration-500 ${
        isDemo
          ? 'rounded-[18px] bg-[#FAFAF8]/60 ring-1 ring-slate-200/70 hover:ring-slate-300'
          : 'rounded-[18px] bg-white ring-1 ring-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.12)] hover:ring-black/[0.09]'
      }`}
    >
      {/* ── Mockup — encadrement type book photo ── */}
      <div className="relative">
        <ProjectMockup mockup={mockup} alt={`Aperçu du site ${displayName}`} />

        {/* Badge "En ligne" / "Démo" en haut à droite */}
        <div className="pointer-events-none absolute right-3.5 top-3.5 z-10">
          {isDemo ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-md">
              Démo
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              En ligne
            </span>
          )}
        </div>
      </div>

      {/* Trait fin sous l'image — encadrement type photo de livre */}
      <div className="hairline-b border-[#0C0B09]/[0.08]" />

      {/* ── Légende small caps sous le mockup ── */}
      <div className="px-5 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Sect. {secteur}
          {dateLabel && (
            <>
              <span className="mx-2 text-slate-300">·</span>
              {dateLabel}
            </>
          )}
        </p>
      </div>

      {/* ── Contenu ── */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
        <h3
          className="text-[20px] leading-tight tracking-tight text-slate-900"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
        >
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
              className="group/btn flex w-full items-center justify-between rounded-xl bg-[#0C0B09] px-4 py-[11px] text-[13px] font-medium tracking-tight text-white transition-colors duration-300 hover:bg-[#7B1616]"
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

        {/* Forfait — label-serif italique discret en pied de carte */}
        <p
          className="mt-3 text-right text-[11px] italic text-slate-400"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Forfait {forfait}
        </p>
      </div>
    </article>
  );
}

/** Convertit "2026-05" en "MAI 2026" (français abrégé) */
function formatDateLabel(yearMonth: string): string | null {
  const match = /^(\d{4})-(\d{2})$/.exec(yearMonth);
  if (!match) return null;
  const year = match[1];
  const monthIdx = parseInt(match[2], 10) - 1;
  const months = [
    'JANV.', 'FÉVR.', 'MARS', 'AVR.', 'MAI', 'JUIN',
    'JUIL.', 'AOÛT', 'SEPT.', 'OCT.', 'NOV.', 'DÉC.',
  ];
  if (monthIdx < 0 || monthIdx > 11) return null;
  return `${months[monthIdx]} ${year}`;
}
