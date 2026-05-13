interface LogoProps {
  className?: string;
  /** Hauteur en pixels du mark (la largeur s'ajuste au ratio 2.5:1) */
  size?: number;
  /** true = rendu sur fond sombre (footer) ; false = fond clair (navbar) */
  light?: boolean;
}

/**
 * Monogramme ADG pour navbar / petits formats.
 *
 * Mêmes chemins SVG que le logo papier complet (`/public/logo.svg`), juste
 * sans les croix de repérage, le carré accent ni le wordmark. La géométrie
 * est figée à scale 0.122 du monogramme original (1200×700) — donc le rendu
 * navbar est une miniature fidèle du logo de marque.
 *
 * Aspect ratio 2.5:1 (hérité du monogramme A+D+G ligaturé). À size=32, le
 * mark rend 80×32 dans le DOM. Pas de container — le mark "s'imprime"
 * directement sur la couleur de la navbar/footer.
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
      {/*
        Le wrapper applique : padding 2px puis scale 0.122 puis recentrage de
        l'origine sur (400, 190) pour que les coordonnées internes soient
        identiques au logo papier — chaque path ci-dessous est celui de
        /public/logo.svg, recopié à l'identique. Une seule source de vérité
        pour la géométrie de la marque.
      */}
      <g transform="translate(2 2) scale(0.122)" fill={fill}>
        <g transform="translate(-400 -190)">
          {/* A — jambe inclinée (parallélogramme) */}
          <path d="M400 420 L470 190 L510 190 L440 420 Z" />
          {/* Traverse étendue — ligature implicite vers D. Épaisseur boostée
              (20 au lieu de 8) pour rester visible à l'échelle navbar. */}
          <rect x="450" y="307" width="75" height="20" />
          {/* D */}
          <path
            d="M525 190 H590 C680 190 730 235 730 305 C730 375 680 420 590 420 H525 V190 Z M565 220 V390 H588 C650 390 688 355 688 305 C688 255 650 220 588 220 H565 Z"
            fillRule="evenodd"
          />
          {/* G — décalé de 85 pour toucher le D, exactement comme dans le
              logo papier */}
          <g transform="translate(85 0)">
            <path d="M885 250 C860 225 830 212 795 212 C735 212 690 250 690 305 C690 360 735 398 795 398 C825 398 850 390 870 375 V335 H810 V305 H915 V420 H885 V395 C860 415 830 425 790 425 C705 425 645 370 645 305 C645 240 705 185 790 185 C840 185 880 200 910 230 L885 250 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
