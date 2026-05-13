interface SectionLabelProps {
  /** Numéro de section formaté — ex: "01", "02", "I", "Q.01" */
  number?: string;
  /** Texte du label (généralement la catégorie ou le kicker) */
  children: React.ReactNode;
  /** Couleur de fond — défaut : transparent (utilise les couleurs slate) */
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Kicker éditorial standardisé "Sect. NN — Texte".
 *
 * Pattern partagé par toutes les pages pour les titres de section.
 * Sur fond clair → texte slate. Sur fond sombre (hero ink, footer) → texte
 * blanc tamisé. La numérotation `Sect. 01` est en serif italique bourgogne,
 * en écho aux planches d'atelier.
 *
 * Usage :
 *   <SectionLabel number="01">Projets clients</SectionLabel>
 *   <h2>Des commerces déjà en ligne</h2>
 */
export default function SectionLabel({
  number,
  children,
  variant = 'light',
  className = '',
}: SectionLabelProps) {
  const labelColor = variant === 'dark' ? 'text-white/40' : 'text-slate-400';
  const ruleColor = variant === 'dark' ? 'bg-white/15' : 'bg-slate-200';

  return (
    <p className={`flex items-center gap-3 ${className}`}>
      {number && (
        <>
          <span
            className="text-[14px] font-medium italic text-[#7B1616]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Sect. {number}
          </span>
          <span className={`h-px w-6 ${ruleColor}`} aria-hidden="true" />
        </>
      )}
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${labelColor}`}
      >
        {children}
      </span>
    </p>
  );
}
