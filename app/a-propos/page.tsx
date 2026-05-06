import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Jordan Rodriguez — développeur web basé à Genève. Je crée des sites web pour les petits commerces locaux. Découvrez mon parcours et mes valeurs.',
};

const values = [
  {
    title: 'Proximité',
    description:
      'Je suis basé à Genève, comme vous. Je connais les quartiers, les commerces, les enjeux locaux. Pas une agence distante — votre voisin numérique.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Qualité',
    description:
      'Chaque site est conçu avec soin, optimisé pour mobile, rapide à charger, et visible sur Google. Je ne livre rien dont je ne suis pas fier moi-même.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Simplicité',
    description:
      'Pas de jargon technique, pas de surprises dans la facture. Je vous explique tout clairement, je vous livre rapidement, et vous n\'avez rien d\'autre à gérer.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const skills = [
  'Next.js & React',
  'Design UI/UX',
  'SEO local Genève',
  'Responsive mobile',
  'Performance web',
  'Google My Business',
];

export default function AProposPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                À propos
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Bonjour, je suis Jordan 👋
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed mb-8">
                Développeur web basé à Genève. Depuis plusieurs années, j&apos;aide les petits commerces à se démarquer grâce à une présence en ligne soignée.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/10 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Avatar placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 opacity-20"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <span className="text-8xl relative z-10" role="img" aria-label="Jordan">
                  👨‍💻
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Mon histoire</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Je m&apos;appelle Jordan, développeur web basé à Genève. Depuis plusieurs années, j&apos;aide les petits commerces à se démarquer grâce à une présence en ligne soignée.
              </p>
              <p>
                Tout a commencé quand j&apos;ai réalisé que beaucoup de mes commerçants de quartier préférés — le boucher du coin, la petite libraire, le café du bout de la rue — étaient invisibles sur internet. Alors que leurs concurrents captaient des clients en ligne, eux perdaient des opportunités chaque jour.
              </p>
              <p>
                J&apos;ai décidé de mettre mes compétences techniques au service de ces commerces qui font la vie de Genève. L&apos;idée est simple : créer des sites web professionnels, accessibles, et qui donnent vraiment des résultats — sans que le commerçant n&apos;ait à se soucier de la technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Mes valeurs</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Ce qui guide mon travail au quotidien avec chaque client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-7 border border-slate-200">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-extrabold mb-6">Pourquoi moi plutôt qu&apos;une agence ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Je connais Genève',
                  text: 'Ses quartiers, ses commerces, ses habitudes. Je sais comment référencer votre site pour les Genevois.',
                },
                {
                  title: 'Tarifs justes',
                  text: 'Pas de structure d\'agence à financer. Mes tarifs reflètent le travail réel, pas les frais généraux.',
                },
                {
                  title: 'Un seul interlocuteur',
                  text: 'C\'est moi qui crée votre site, moi qui vous répond, moi qui gère les modifications. Pas de service client impersonnel.',
                },
                {
                  title: 'Résultats garantis',
                  text: 'Je ne suis satisfait que quand vous l\'êtes. Modifications incluses jusqu\'à ce que votre site soit parfait.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{item.title}</p>
                    <p className="text-red-100 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            Un premier échange par téléphone ou vidéo, gratuit et sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-red-600/20"
          >
            Prendre contact
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
