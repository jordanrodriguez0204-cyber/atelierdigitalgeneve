interface TrimMarksProps {
  /** Distance entre la croix et le bord du parent (en pixels) */
  inset?: number;
  /** Taille de chaque croix en pixels */
  size?: number;
  /** Classe Tailwind pour la couleur (text-…) — défaut : text-stone-300 */
  color?: string;
  /** Coins à afficher — défaut : les 4 */
  corners?: Array<'tl' | 'tr' | 'bl' | 'br'>;
}

/**
 * Croix de repérage aux coins d'une section (motif "atelier" / imprimerie).
 *
 * À placer en enfant direct d'un parent qui a `position: relative`.
 * Les croix sont décoratives (`aria-hidden`) et ne consomment aucun click.
 *
 * Usage :
 *   <section className="relative">
 *     <TrimMarks />
 *     {/* … contenu … *\/}
 *   </section>
 */
export default function TrimMarks({
  inset = 16,
  size = 14,
  color = 'text-stone-300',
  corners = ['tl', 'tr', 'bl', 'br'],
}: TrimMarksProps) {
  const positions: Record<NonNullable<TrimMarksProps['corners']>[number], React.CSSProperties> = {
    tl: { top: inset, left: inset },
    tr: { top: inset, right: inset },
    bl: { bottom: inset, left: inset },
    br: { bottom: inset, right: inset },
  };

  return (
    <>
      {corners.map((c) => (
        <svg
          key={c}
          aria-hidden="true"
          width={size}
          height={size}
          viewBox="0 0 14 14"
          fill="none"
          className={`pointer-events-none absolute ${color}`}
          style={positions[c]}
        >
          <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      ))}
    </>
  );
}
