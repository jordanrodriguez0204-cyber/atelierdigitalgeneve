import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Atelier Digital Genève — je crée des sites web pour les commerces locaux de Genève. Freelance basé à Genève, disponible 7j/7, devis gratuit.',
};

const values = [
  {
    emoji: '🤝',
    title: 'Proximité',
    description:
      "Je suis votre voisin. Je me déplace, je vous rencontre, je comprends votre commerce avant d'écrire la première ligne de code.",
  },
  {
    emoji: '✅',
    title: 'Honnêteté',
    description:
      "Je vous dis ce que je peux faire et ce que je ne peux pas faire. Pas de promesses en l'air, pas de surprises sur la facture.",
  },
  {
    emoji: '🎯',
    title: 'Efficacité',
    description:
      'Des sites clairs, rapides, et efficaces. Votre site est livré en 7 jours — pas en 3 mois.',
  },
];

export default function AProposPage() {
  return (
    <div className="pt-16 bg-white">

      {/* ── Hero ── */}
      <section className="bg-slate-900 py-20 px-4 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                À propos
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                Un développeur web genevois,<br className="hidden sm:block" /> à votre service
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
                Je crée des sites web pour les commerces de Genève. Pas une grande agence froide — un interlocuteur unique, disponible, qui comprend votre quartier et vos clients.
              </p>
            </div>

            {/* Geneva illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72">
                <svg viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                  <circle cx="144" cy="144" r="144" fill="#0F172A" />
                  <circle cx="144" cy="144" r="144" fill="url(#bgGrad)" />
                  <circle cx="48" cy="40" r="1.2" fill="white" opacity="0.7" />
                  <circle cx="90" cy="25" r="0.9" fill="white" opacity="0.5" />
                  <circle cx="130" cy="35" r="1.4" fill="white" opacity="0.8" />
                  <circle cx="175" cy="20" r="1" fill="white" opacity="0.6" />
                  <circle cx="215" cy="38" r="1.2" fill="white" opacity="0.7" />
                  <circle cx="248" cy="55" r="0.8" fill="white" opacity="0.5" />
                  <circle cx="60" cy="70" r="0.9" fill="white" opacity="0.4" />
                  <circle cx="240" cy="80" r="1" fill="white" opacity="0.6" />
                  <circle cx="200" cy="60" r="0.7" fill="white" opacity="0.5" />
                  <circle cx="100" cy="55" r="0.8" fill="white" opacity="0.4" />
                  <ellipse cx="144" cy="195" rx="115" ry="28" fill="#1E3A5F" opacity="0.9" />
                  <ellipse cx="144" cy="195" rx="115" ry="28" fill="url(#lakeGrad)" />
                  <line x1="80" y1="192" x2="110" y2="192" stroke="white" strokeWidth="0.6" opacity="0.15" />
                  <line x1="150" y1="196" x2="195" y2="196" stroke="white" strokeWidth="0.6" opacity="0.1" />
                  <line x1="115" y1="200" x2="145" y2="200" stroke="white" strokeWidth="0.5" opacity="0.1" />
                  <rect x="32" y="148" width="18" height="42" rx="2" fill="#1E293B" />
                  <rect x="34" y="144" width="14" height="8" rx="1" fill="#1E293B" />
                  <rect x="53" y="155" width="14" height="35" rx="2" fill="#162032" />
                  <rect x="70" y="145" width="20" height="45" rx="2" fill="#1E293B" />
                  <rect x="73" y="138" width="14" height="10" rx="1" fill="#1E293B" />
                  <rect x="36" y="152" width="4" height="3" rx="0.5" fill="#F59E0B" opacity="0.6" />
                  <rect x="43" y="152" width="4" height="3" rx="0.5" fill="#F59E0B" opacity="0.3" />
                  <rect x="36" y="160" width="4" height="3" rx="0.5" fill="#F59E0B" opacity="0.5" />
                  <rect x="43" y="160" width="4" height="3" rx="0.5" fill="#F59E0B" opacity="0.7" />
                  <rect x="55" y="160" width="4" height="3" rx="0.5" fill="#F59E0B" opacity="0.4" />
                  <rect x="55" y="168" width="4" height="3" rx="0.5" fill="#F59E0B" opacity="0.6" />
                  <rect x="73" y="150" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.5" />
                  <rect x="81" y="150" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.3" />
                  <rect x="73" y="160" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.7" />
                  <rect x="81" y="160" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.4" />
                  <rect x="96" y="130" width="26" height="60" rx="1" fill="#253347" />
                  <rect x="94" y="110" width="8" height="24" rx="1" fill="#1E293B" />
                  <polygon points="98,98 94,110 102,110" fill="#DC2626" opacity="0.8" />
                  <rect x="116" y="114" width="8" height="20" rx="1" fill="#1E293B" />
                  <polygon points="120,103 116,114 124,114" fill="#DC2626" opacity="0.8" />
                  <circle cx="109" cy="145" r="5" fill="none" stroke="#475569" strokeWidth="1" />
                  <circle cx="109" cy="145" r="2" fill="#DC2626" opacity="0.4" />
                  <rect x="128" y="120" width="22" height="70" rx="2" fill="#1E293B" />
                  <rect x="131" y="115" width="16" height="8" rx="1" fill="#253347" />
                  <rect x="134" y="112" width="10" height="5" fill="#DC2626" opacity="0.7" />
                  <rect x="155" y="138" width="24" height="52" rx="2" fill="#162032" />
                  <rect x="158" y="132" width="18" height="8" rx="1" fill="#1E293B" />
                  <rect x="183" y="148" width="16" height="42" rx="2" fill="#1E293B" />
                  <rect x="202" y="140" width="22" height="50" rx="2" fill="#162032" />
                  <rect x="204" y="133" width="18" height="10" rx="1" fill="#1E293B" />
                  <rect x="228" y="152" width="18" height="38" rx="2" fill="#1E293B" />
                  <rect x="249" y="155" width="14" height="35" rx="2" fill="#162032" />
                  <rect x="131" y="125" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.6" />
                  <rect x="140" y="125" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.4" />
                  <rect x="131" y="136" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.7" />
                  <rect x="140" y="136" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.3" />
                  <rect x="157" y="144" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.5" />
                  <rect x="166" y="144" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.6" />
                  <rect x="157" y="154" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.3" />
                  <rect x="166" y="154" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.7" />
                  <rect x="185" y="153" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.4" />
                  <rect x="185" y="162" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.6" />
                  <rect x="204" y="145" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.5" />
                  <rect x="213" y="145" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.3" />
                  <rect x="204" y="155" width="5" height="4" rx="0.5" fill="#F59E0B" opacity="0.7" />
                  <rect x="230" y="158" width="4" height="3" rx="0.5" fill="#F59E0B" opacity="0.5" />
                  <rect x="237" y="158" width="4" height="3" rx="0.5" fill="#F59E0B" opacity="0.3" />
                  <line x1="144" y1="167" x2="144" y2="90" stroke="url(#jetGrad)" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="144" cy="90" rx="4" ry="6" fill="white" opacity="0.15" />
                  <ellipse cx="144" cy="88" rx="2.5" ry="4" fill="white" opacity="0.2" />
                  <circle cx="141" cy="94" r="1" fill="white" opacity="0.2" />
                  <circle cx="147" cy="92" r="0.8" fill="white" opacity="0.15" />
                  <circle cx="139" cy="100" r="1.2" fill="white" opacity="0.1" />
                  <circle cx="149" cy="98" r="1" fill="white" opacity="0.12" />
                  <line x1="144" y1="195" x2="144" y2="220" stroke="white" strokeWidth="1" opacity="0.08" />
                  <rect x="222" y="28" width="14" height="14" rx="2" fill="#DC2626" opacity="0.6" />
                  <rect x="225" y="31" width="8" height="2.5" rx="0.5" fill="white" opacity="0.9" />
                  <rect x="227.75" y="29" width="2.5" height="8" rx="0.5" fill="white" opacity="0.9" />
                  <rect x="29" y="186" width="230" height="12" rx="2" fill="#1E293B" opacity="0.6" />
                  <circle cx="144" cy="144" r="142" stroke="white" strokeWidth="0.5" opacity="0.06" />
                  <circle cx="144" cy="144" r="138" stroke="#DC2626" strokeWidth="0.5" opacity="0.15" />
                  <defs>
                    <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="1" />
                    </radialGradient>
                    <linearGradient id="lakeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="jetGrad" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.6" />
                      <stop offset="60%" stopColor="white" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-slate-500 text-xs font-medium tracking-widest uppercase">
                    Genève, Suisse
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Mon parcours</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">Tout a commencé avec un ami photographe</h2>
          </FadeIn>

          {/* Story card avec citation */}
          <FadeIn delay={0.05}>
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 mb-8 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-6 right-8 text-[80px] font-serif text-slate-200 leading-none select-none" aria-hidden="true">&ldquo;</div>
              <div className="relative space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  Nouman est mon ami d&apos;enfance. Passionné de photographie depuis l&apos;adolescence, il avait accumulé des centaines de clichés magnifiques — des portraits, des paysages genevois, des événements. Ses photos dormaient dans un disque dur.
                </p>
                <p>
                  Un jour, il m&apos;a demandé : <span className="text-slate-900 font-medium italic">&ldquo;Tu crois que je pourrais vivre de ça un jour ?&rdquo;</span> Il n&apos;avait aucune présence en ligne, aucun moyen pour les clients de le trouver ou de voir son travail.
                </p>
                <p>
                  Je lui ai créé son premier site. Un espace épuré pour exposer ses photos, une page contact pour recevoir des demandes, un référencement local pour apparaître sur Google quand quelqu&apos;un cherche un photographe à Genève. Trois semaines après la mise en ligne, il décrochait sa première commande professionnelle.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
            <FadeIn delay={0.1}>
              <p>
                Cet exemple m&apos;a convaincu d&apos;une chose : le frein pour les indépendants et les petits commerces n&apos;est pas le talent — c&apos;est la visibilité. Avoir les compétences ne suffit pas si personne ne peut vous trouver.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p>
                Depuis, j&apos;ai appliqué la même logique à des dizaines de commerces genevois. Un seul interlocuteur, joignable directement, qui prend le temps de comprendre votre métier avant de toucher au moindre code.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-8 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/30 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Ma mission</h2>
                <p className="text-red-100 text-xl leading-relaxed max-w-2xl mx-auto">
                  Chaque commerce local mérite d&apos;être trouvé sur internet. Pas besoin d&apos;un budget énorme. Pas besoin de comprendre la technologie. Vous vous occupez de votre métier — je m&apos;occupe de votre présence en ligne.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Ce qui me guide</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Mes engagements</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Ce qui guide mon travail avec chaque client.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_2px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-2xl mb-5">
                    {value.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why me ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/10 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Mes différences</p>
                <h2 className="text-3xl font-bold mb-8 tracking-tight">Pourquoi travailler avec moi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 leading-relaxed">
                  {[
                    'Un seul interlocuteur du début à la fin',
                    'Site livré en 7 jours, garanti',
                    'Tarifs fixes, sans surprises',
                    'Disponible par téléphone, 7j/7',
                    'Basé à Genève, je connais votre marché',
                    'Satisfaction garantie ou je retravaille',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#f8f8f8] text-center px-4">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Prochaine étape</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Travaillons ensemble
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Un premier échange par téléphone, gratuit et sans engagement. Je vous réponds sous 24h.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-600/20"
            >
              Prendre contact
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
