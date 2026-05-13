'use client';

import type { Secteur } from '@/lib/realisations';

export type SecteurOption = 'Tous' | Secteur;

interface SecteurFilterProps {
  options: SecteurOption[];
  selected: SecteurOption;
  onSelect: (option: SecteurOption) => void;
  /** Compteur affiché en suffixe quand non-zéro — optionnel */
  counts?: Record<SecteurOption, number>;
}

/**
 * Barre de filtres "pills" pour la grille de réalisations.
 *
 * - Pattern `role="tablist"` pour l'accessibilité (annonce un groupe d'onglets,
 *   navigable au clavier avec flèches gauche/droite par défaut grâce au focus
 *   séquentiel des boutons).
 * - Filtre client-side : pas de routing. Le parent gère l'état.
 */
export default function SecteurFilter({
  options,
  selected,
  onSelect,
  counts,
}: SecteurFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filtrer par secteur"
      className="flex flex-wrap items-center gap-2"
    >
      {options.map((opt) => {
        const isActive = opt === selected;
        const count = counts?.[opt];
        return (
          <button
            key={opt}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="realisations-grid"
            onClick={() => onSelect(opt)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[12.5px] font-medium tracking-tight transition-all duration-200 ${
              isActive
                ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            {opt}
            {typeof count === 'number' && count > 0 && (
              <span
                className={`text-[10.5px] tabular-nums ${
                  isActive ? 'text-white/60' : 'text-slate-400'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
