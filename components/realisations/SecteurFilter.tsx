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
 * Barre de filtres pour la grille de réalisations.
 *
 * Style "onglets d'index" éditorial : pas de pills modernes, mais des
 * libellés alignés sur une ligne de base avec hairline, et un soulignement
 * épais bourgogne pour l'onglet actif. Le compteur est en label-serif
 * italique pour le côté annotation manuscrite.
 *
 * Pattern accessibilité `role="tablist"`. Navigation clavier via tab natif.
 */
export default function SecteurFilter({
  options,
  selected,
  onSelect,
  counts,
}: SecteurFilterProps) {
  return (
    <div className="relative">
      {/* Trait de coupe de base — passe sous tous les onglets */}
      <div className="hairline-b absolute inset-x-0 bottom-0 border-[#0C0B09]/[0.08]" />

      <div
        role="tablist"
        aria-label="Filtrer par secteur"
        className="relative flex flex-wrap items-end gap-x-8 gap-y-2"
      >
        {options.map((opt, idx) => {
          const isActive = opt === selected;
          const count = counts?.[opt];
          const num = String(idx + 1).padStart(2, '0');
          return (
            <button
              key={opt}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="realisations-grid"
              onClick={() => onSelect(opt)}
              className={`group relative -mb-px flex items-baseline gap-2 pb-3 pt-1 text-[13px] tracking-tight transition-colors duration-200 ${
                isActive
                  ? 'text-[#0C0B09]'
                  : 'text-slate-500 hover:text-[#0C0B09]'
              }`}
            >
              {/* Numéro d'onglet en label-serif italique */}
              <span
                className={`text-[11px] italic transition-opacity duration-200 ${
                  isActive ? 'text-[#7B1616]' : 'text-slate-300 group-hover:text-slate-400'
                }`}
                style={{ fontFamily: 'var(--font-serif)' }}
                aria-hidden="true"
              >
                {num}
              </span>

              {/* Libellé */}
              <span className="font-medium">{opt}</span>

              {/* Compteur */}
              {typeof count === 'number' && count > 0 && (
                <span
                  className={`text-[10.5px] tabular-nums ${
                    isActive ? 'text-[#7B1616]/70' : 'text-slate-300'
                  }`}
                >
                  ({count})
                </span>
              )}

              {/* Soulignement actif — 2px bourgogne, par-dessus la hairline */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-[2px] bg-[#7B1616] transition-transform duration-200 ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
