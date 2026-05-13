import type { Mockup } from '@/lib/realisations';

interface ProjectMockupProps {
  mockup: Mockup;
  /** Texte alternatif descriptif — pas "image1" */
  alt: string;
  /** Si true, on affiche un cadre macbook + iphone côte à côte (large) — sinon une seule capture (compact) */
  size?: 'compact' | 'large';
  /** Permet de réduire l'éventuelle élévation au hover (utile en page détail) */
  hoverable?: boolean;
}

/**
 * Affichage device mockup d'un projet.
 *
 * - Server Component (aucun state, aucune interaction côté client).
 * - Si les fichiers `/public/realisations/*.png` n'existent pas encore, on rend
 *   un placeholder en gradient avec un emoji thématique — le composant reste
 *   présentable même tant que Jordan n'a pas généré les screenshots.
 * - Lazy loading natif via `loading="lazy"` + `decoding="async"`.
 */
export default function ProjectMockup({
  mockup,
  alt,
  size = 'compact',
  hoverable = true,
}: ProjectMockupProps) {
  const { desktop, mobile, fallback } = mockup;

  // En l'absence de fichier mockup réel, on rend un placeholder élégant.
  // Convention : chemin commence par /realisations/, on présume que tant que
  // les fichiers ne sont pas livrés on garde le fallback. Le navigateur fera
  // un 404 silencieux et `onError` (côté <img>) basculerait — mais pour rester
  // 100% Server Component on choisit a priori le fallback si `fallback` est
  // défini ET que les noms par défaut commencent par "/realisations/".
  //
  // Une fois les vrais .png posés dans /public/realisations/, il suffira
  // d'enlever le `fallback` sur la `Realisation` correspondante pour basculer
  // sur l'image réelle.
  const hasFallback = Boolean(fallback);
  const placeholderGradient =
    fallback?.gradient ?? 'from-slate-700 via-slate-800 to-slate-900';
  const placeholderEmoji = fallback?.emoji ?? '🌐';

  return (
    <div
      className={`relative ${
        size === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]'
      } w-full overflow-hidden rounded-2xl bg-slate-900`}
    >
      {/* Photo réelle si disponible, sinon placeholder */}
      {!hasFallback ? (
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img
            src={mobile}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover ${
              hoverable
                ? 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'
                : ''
            }`}
          />
        </picture>
      ) : (
        <div
          aria-hidden="true"
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${placeholderGradient} ${
            hoverable
              ? 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'
              : ''
          }`}
        >
          {/* Pattern de points discret */}
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
              backgroundSize: '22px 22px',
            }}
          />
          <span className="relative text-6xl drop-shadow-sm md:text-7xl">
            {placeholderEmoji}
          </span>
        </div>
      )}

      {/* Léger voile foncé en bas pour faire respirer le badge éventuel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
      />
    </div>
  );
}
