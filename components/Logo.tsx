interface LogoProps {
  className?: string;
  size?: number;
  light?: boolean; /* true = rendu sur fond sombre */
}

export default function Logo({ className = '', size = 36, light = false }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Atelier Digital Genève"
    >
      {/* Fond */}
      <rect width="36" height="36" rx="8" fill={light ? 'rgba(255,255,255,0.10)' : '#0C0B09'} />

      {/* Accent rouge — barre verticale fine */}
      <rect x="5" y="5" width="3" height="26" rx="1.5" fill="#C9372C" />

      {/* Monogramme "A" — tracé géométrique */}
      {/* Jambe gauche */}
      <path
        d="M13 27 L18.5 10 L24 27"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Barre horizontale */}
      <line
        x1="14.8"
        y1="21"
        x2="22.2"
        y2="21"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
