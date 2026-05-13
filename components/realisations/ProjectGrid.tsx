'use client';

import { useMemo, useState } from 'react';
import type { Realisation } from '@/lib/realisations';
import { SECTEURS } from '@/lib/realisations';
import ProjectCard from './ProjectCard';
import SecteurFilter, { type SecteurOption } from './SecteurFilter';

interface ProjectGridProps {
  realisations: Realisation[];
  /** Si true, on rend les cards dans le style "démo" et on désactive le filtre */
  isDemo?: boolean;
  /** Désactive complètement la barre de filtres (utile pour la section démos) */
  hideFilter?: boolean;
}

/**
 * Grille responsive 1/2/3 colonnes avec filtre par secteur.
 *
 * - Le filtre est client-side : pas de routing, pas de scroll jump.
 * - L'état "sélectionné" est conservé dans `useState`.
 * - L'animation à l'apparition utilise `animate-in fade-in` (Tailwind) — un
 *   pur CSS, donc le contenu reste lisible sans JS.
 */
export default function ProjectGrid({
  realisations,
  isDemo = false,
  hideFilter = false,
}: ProjectGridProps) {
  const [selected, setSelected] = useState<SecteurOption>('Tous');

  const options: SecteurOption[] = useMemo(() => {
    // On ne propose que les secteurs effectivement représentés dans la liste,
    // pour éviter une pill "Services" qui ne filtre rien.
    const present = new Set(realisations.map((r) => r.secteur));
    const filtered = SECTEURS.filter((s) => present.has(s));
    return ['Tous', ...filtered];
  }, [realisations]);

  const counts = useMemo(() => {
    const map: Record<SecteurOption, number> = { Tous: realisations.length } as Record<
      SecteurOption,
      number
    >;
    for (const s of SECTEURS) {
      map[s] = realisations.filter((r) => r.secteur === s).length;
    }
    return map;
  }, [realisations]);

  const visible = useMemo(() => {
    if (selected === 'Tous') return realisations;
    return realisations.filter((r) => r.secteur === selected);
  }, [realisations, selected]);

  return (
    <div className="space-y-8">
      {!hideFilter && options.length > 1 && (
        <SecteurFilter
          options={options}
          selected={selected}
          onSelect={setSelected}
          counts={counts}
        />
      )}

      <div
        id="realisations-grid"
        role="tabpanel"
        aria-live="polite"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        {visible.map((r) => (
          <ProjectCard key={r.slug} realisation={r} isDemo={isDemo} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="rounded-2xl border border-dashed border-slate-200 bg-white/40 py-10 text-center text-sm text-slate-500">
          Aucun projet dans ce secteur pour l&apos;instant.
        </p>
      )}
    </div>
  );
}
