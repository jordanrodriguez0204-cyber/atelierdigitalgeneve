interface LogoProps {
  className?: string;
  /** Hauteur en pixels du mark (la largeur s'ajuste au ratio 2.5:1) */
  size?: number;
  /** true = rendu sur fond sombre (footer) ; false = fond clair (navbar) */
  light?: boolean;
}

/**
 * Mark ADG pour navbar · version Fraunces native.
 *
 * Ne dessine plus les lettres en paths Bézier hand-made (qui trahissaient
 * leur origine "rapide"). À la place, utilise directement la police Fraunces
 * via un élément SVG `<text>`. Les lettres sont rendues par les vrais
 * glyphes de Fraunces · qualité typographique professionnelle garantie.
 *
 * Aspect ratio 2.5:1 (cohérent avec le format paysage du logo papier).
 * À size=32, le mark rend 80×32 dans le DOM.
 *
 * Note : le rendu correct dépend de Fraunces chargée sur la page (via
 * `next/font/google` dans `app/layout.tsx`). Sur le site, c'est garanti.
 * En export PDF standalone, fallback chain vers Iowan Old Style → Cambria
 * → Georgia → serif système.
 */
export default function Logo({ className = '', size = 32, light = false }: LogoProps) {
  // Bourgogne sur fond clair, crème sur fond sombre.
  const fill = light ? '#F5F1EA' : '#7B1616';
  const width = Math.round(size * 2.5);

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 80 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Atelier Digital Genève"
      role="img"
    >
      {/* ADG en Fraunces · letterforms professionnelles, scalable à toute taille */}
      <text
        x="40"
        y="26"
        textAnchor="middle"
        fontSize="28"
        fontWeight="600"
        letterSpacing="-0.8"
        fill={fill}
        style={{
          fontFamily:
            "var(--font-fraunces), 'Iowan Old Style', Cambria, Georgia, serif",
        }}
      >
        ADG
      </text>

      {/* Petit carré accent en bas à droite · écho discret aux marques de
          repérage du logo papier. Préservé pour la signature de marque. */}
      <rect x="73" y="27.5" width="2.5" height="2.5" fill={fill} />
    </svg>
  );
}
