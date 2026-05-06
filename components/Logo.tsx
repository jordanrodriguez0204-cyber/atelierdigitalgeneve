interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Atelier Digital Genève"
    >
      {/* Background square with rounded corners */}
      <rect width="40" height="40" rx="8" fill="#0F172A" />
      {/* Red accent bar */}
      <rect x="4" y="4" width="6" height="32" rx="2" fill="#DC2626" />
      {/* A letter */}
      <text
        x="14"
        y="27"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="18"
        fontWeight="800"
        fill="#FFFFFF"
        letterSpacing="-0.5"
      >
        ADG
      </text>
    </svg>
  );
}
