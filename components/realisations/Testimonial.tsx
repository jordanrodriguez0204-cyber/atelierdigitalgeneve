import type { Testimonial as TestimonialType } from '@/lib/realisations';

interface TestimonialProps {
  testimonial: TestimonialType;
}

/**
 * Carte témoignage — citation + nom + commerce + photo optionnelle.
 *
 * Server Component. La section parente est responsable de cacher la grille
 * complète tant qu'il n'y a pas au moins 2 témoignages (cf. /realisations).
 */
export default function Testimonial({ testimonial }: TestimonialProps) {
  const { citation, auteur, commerce, photo } = testimonial;

  return (
    <figure className="flex h-full flex-col rounded-[20px] bg-white p-7 ring-1 ring-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.07)]">
      {/* Guillemets décoratifs */}
      <svg
        aria-hidden="true"
        className="mb-4 h-6 w-6 text-red-500/80"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7.17 4C4.31 4 2 6.31 2 9.17V20h7V11H4.83c0-1.84 1.5-3.33 3.34-3.33V4zM18.17 4c-2.86 0-5.17 2.31-5.17 5.17V20h7V11h-4.17c0-1.84 1.5-3.33 3.34-3.33V4z" />
      </svg>

      <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-700">
        <p>{citation}</p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={`Photo de ${auteur}`}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[13px] font-semibold text-slate-500"
          >
            {auteur
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('')
              .toUpperCase()}
          </div>
        )}
        <div className="leading-tight">
          <p className="text-[13.5px] font-semibold text-slate-900">{auteur}</p>
          <p className="text-[12px] text-slate-500">{commerce}</p>
        </div>
      </figcaption>
    </figure>
  );
}
