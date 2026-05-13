interface WatermarkProps {
  /** Lettre ou texte à afficher (court — 1 à 3 caractères max) */
  children: string;
  /** Position d'ancrage du watermark dans le parent — défaut : center */
  align?: 'center' | 'left' | 'right';
  /** Opacité du watermark (0 à 1) — défaut : 0.05 */
  opacity?: number;
  /** Taille en vh — défaut : 60 (occupe 60% de la hauteur du viewport) */
  size?: number;
  /** Décalage vertical en % (positif = descend) — défaut : 0 */
  offsetY?: number;
  /** Décalage horizontal en % (positif = droite) — défaut : 0 */
  offsetX?: number;
  /** Couleur — défaut : bourgogne brand */
  color?: string;
}

/**
 * Lettre / chiffre XL en filigrane derrière une section.
 *
 * Sert à donner du caractère éditorial aux heros et grands sections sans
 * mettre une image. Pensé pour afficher un "A", "D", "G" ou un numéro "01"
 * massif en arrière-plan, type couverture de revue.
 *
 * À placer en enfant direct d'un parent qui a `position: relative` et idéalement
 * `overflow: hidden` (le watermark peut déborder si offsetY/offsetX sont
 * extrêmes).
 *
 * Server Component, zéro JS.
 */
export default function Watermark({
  children,
  align = 'center',
  opacity = 0.05,
  size = 60,
  offsetY = 0,
  offsetX = 0,
  color = '#7B1616',
}: WatermarkProps) {
  const justify =
    align === 'left' ? 'justify-start'
    : align === 'right' ? 'justify-end'
    : 'justify-center';

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 flex items-center ${justify} select-none`}
      style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 700,
        fontSize: `${size}vh`,
        lineHeight: 0.85,
        color,
        opacity,
        transform: `translate(${offsetX}%, ${offsetY}%)`,
        letterSpacing: '-0.04em',
      }}
    >
      {children}
    </span>
  );
}
