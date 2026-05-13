interface MaskingTapeProps {
  /** Largeur en pixels — défaut : 120 */
  width?: number;
  /** Hauteur en pixels — défaut : 28 */
  height?: number;
  /** Angle de rotation en degrés — défaut : -3 */
  rotate?: number;
  /** Texte optionnel sur le ruban (typo manuscrite) */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Bande de masking tape (ruban d'atelier translucide).
 *
 * Détail "wow" à utiliser avec parcimonie — une fois par page max, sinon
 * ça s'use. Idéal pour "tenir en place" une annotation ou une légende
 * importante.
 *
 * À placer en enfant d'un parent `position: relative` et positionnée via
 * `className` (ex. `absolute -top-3 left-8`).
 *
 * Server Component.
 */
export default function MaskingTape({
  width = 120,
  height = 28,
  rotate = -3,
  children,
  className = '',
}: MaskingTapeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center px-3 text-[11px] tracking-wide ${className}`}
      style={{
        width,
        height,
        background:
          'linear-gradient(180deg, rgba(255, 244, 196, 0.55) 0%, rgba(247, 230, 168, 0.55) 100%)',
        boxShadow:
          '0 1px 0 rgba(0, 0, 0, 0.03), inset 0 0 0 0.5px rgba(180, 150, 60, 0.18)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        transform: `rotate(${rotate}deg)`,
        color: '#5C4B0E',
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
      }}
    >
      {children}
    </span>
  );
}
