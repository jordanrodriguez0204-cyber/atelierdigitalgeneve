import type { Testimonial } from '@/lib/types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marco Ferretti',
    business: 'Le Bistrot du Parc',
    location: 'Genève',
    quote:
      'Depuis que j\'ai mon site, je reçois des réservations même la nuit. Mon restaurant est souvent complet le week-end maintenant.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophie Marchand',
    business: 'Salon Lumière',
    location: 'Carouge',
    quote:
      'Jordan a créé exactement ce que je voulais. Simple, beau, et mes clientes peuvent réserver directement depuis leur téléphone.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmed Benali',
    business: 'Épicerie des Nations',
    location: 'Genève',
    quote:
      'Je ne connaissais rien à internet. Maintenant j\'ai un site professionnel et de nouveaux clients chaque semaine. Je recommande à 100%.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note: ${rating}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    'bg-red-100 text-red-700',
    'bg-blue-100 text-blue-700',
    'bg-green-100 text-green-700',
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;

  return (
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${colors[colorIndex]}`}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Témoignages
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Ils me font confiance
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Des commerçants genevois qui ont franchi le pas et ne le regrettent pas.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-red-200 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <blockquote className="text-slate-700 leading-relaxed mt-4 mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <Avatar name={t.name} />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">
                    {t.business} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
