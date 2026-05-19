import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionLabel from '@/components/visual/SectionLabel';
import TrimMarks from '@/components/visual/TrimMarks';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Atelier Digital Genève. Je crée des sites web pour les commerces locaux de Genève. Freelance basé à Genève, disponible 7j/7, devis gratuit.',
};

/**
 * /a-propos · refonte phase 5 DA "la lettre signée".
 *
 * Layout 1 colonne ~640px centrée avec marges très généreuses, drop-cap
 * bourgogne sur la première lettre, signature en bas, mission en pull-quote.
 */
export default function AProposPage() {
  return (
    <div className="bg-white pt-16">
      {/* ── Hero éditorial ── */}
      <section className="relative overflow-hidden bg-[#0C0B09] px-4 py-24">
        <TrimMarks inset={20} size={16} color="text-white/20" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#7B1616]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="folio mb-6 text-white/35">
            LETTRE OUVERTE · GENÈVE 2026
          </p>

          <SectionLabel variant="dark" className="justify-center">
            À propos
          </SectionLabel>

          <h1
            className="mt-6 text-[clamp(40px,7vw,72px)] font-bold tracking-[-0.025em] text-white"
            style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.02 }}
          >
            Un développeur web{' '}
            <span className="italic text-[#E8B4B4]" style={{ fontWeight: 500 }}>
              genevois
            </span>
            <span className="text-[#7B1616]">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            Pas une grande agence froide. Un interlocuteur unique, qui prend le
            temps de comprendre votre quartier avant de toucher au code.
          </p>

          <span
            className="construction-line mx-auto mt-8 block"
            style={{ filter: 'brightness(1.4)' }}
          />
        </div>
      </section>

      {/* ── La lettre · colonne ~640px très aérée ── */}
      <section className="grain bg-[#FAFAF8] py-24">
        <article className="mx-auto max-w-[640px] px-4 sm:px-6">
          {/* En-tête de lettre · date + lieu */}
          <header className="mb-12 flex items-baseline justify-between border-b border-[#0C0B09]/[0.08] pb-6">
            <p className="folio text-[12px]">
              Genève, mai 2026
            </p>
            <p
              className="text-[12px] italic text-slate-500"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Lettre n° 01
            </p>
          </header>

          {/* Premier paragraphe · drop-cap bourgogne */}
          <p
            className="drop-cap text-[18px] leading-[1.85] text-slate-700"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Atelier Digital Genève est un studio web indépendant à taille
            humaine. Je m&apos;appelle Jordan Rodriguez, je crée des sites pour
            les commerces de Genève · restaurants, boutiques, salons · avec
            un parti pris simple : un site doit ramener des clients, pas juste
            être beau.
          </p>

          {/* Histoire · Nouman */}
          <h2
            className="mt-14 text-2xl tracking-tight text-slate-900 md:text-3xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Tout a commencé avec un ami photographe
            <span className="text-[#7B1616]">.</span>
          </h2>
          <span className="construction-line mt-3 block" />

          <div className="mt-7 space-y-5 text-[17px] leading-[1.85] text-slate-700">
            <p>
              Nouman est mon ami d&apos;enfance. Passionné de photographie
              depuis l&apos;adolescence, il avait accumulé des centaines de
              clichés magnifiques · portraits, paysages genevois, événements.
              Ses photos dormaient dans un disque dur.
            </p>

            {/* Pull quote */}
            <blockquote
              className="relative my-10 border-l-2 border-[#7B1616] pl-6 italic text-[#0C0B09]"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-3 select-none text-[40px] leading-none text-[#7B1616]/40"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                &ldquo;
              </span>
              <p className="text-[20px] leading-snug">
                Tu crois que je pourrais vivre de ça un jour ?
              </p>
              <footer className="mt-2 text-[12px] not-italic font-normal text-slate-500">
                · Nouman, un soir, en 2024
              </footer>
            </blockquote>

            <p>
              Il n&apos;avait aucune présence en ligne, aucun moyen pour les
              clients de le trouver ou de voir son travail. Je lui ai créé son
              premier site. Un espace épuré pour exposer ses photos, une page
              contact pour recevoir des demandes, un référencement local pour
              apparaître sur Google quand quelqu&apos;un cherche un
              photographe à Genève. Trois semaines après la mise en ligne, il
              décrochait sa première commande professionnelle.
            </p>
            <p>
              Cet exemple m&apos;a convaincu d&apos;une chose : le frein pour
              les indépendants et les petits commerces n&apos;est pas le
              talent. C&apos;est la visibilité. Avoir les compétences ne suffit
              pas si personne ne peut vous trouver<span className="accent-square ml-1" />
            </p>
          </div>

          {/* Mission */}
          <h2
            className="mt-14 text-2xl tracking-tight text-slate-900 md:text-3xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Ce qui me guide
            <span className="text-[#7B1616]">.</span>
          </h2>
          <span className="construction-line mt-3 block" />

          <div className="mt-7 space-y-7 text-[17px] leading-[1.85] text-slate-700">
            <div>
              <p
                className="text-[13px] italic text-[#7B1616]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                01 · Proximité
              </p>
              <p className="mt-1">
                Je suis votre voisin. Je me déplace, je vous rencontre, je
                comprends votre commerce avant d&apos;écrire la première ligne
                de code.
              </p>
            </div>
            <div>
              <p
                className="text-[13px] italic text-[#7B1616]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                02 · Honnêteté
              </p>
              <p className="mt-1">
                Je vous dis ce que je peux faire et ce que je ne peux pas
                faire. Pas de promesses en l&apos;air, pas de surprises sur la
                facture.
              </p>
            </div>
            <div>
              <p
                className="text-[13px] italic text-[#7B1616]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                03 · Efficacité
              </p>
              <p className="mt-1">
                Des sites clairs, rapides, et efficaces. Votre site est livré
                en 7 jours, pas en 3 mois.
              </p>
            </div>
          </div>

          {/* Signature */}
          <div className="mt-16 border-t border-[#0C0B09]/[0.08] pt-10">
            <p
              className="text-[28px] italic text-[#7B1616]"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              Jordan
            </p>
            <p className="mt-2 text-[13px] text-slate-500">
              Jordan Rodriguez · Atelier Digital Genève
            </p>
          </div>

          {/* P.S. */}
          <div className="mt-12 rounded-xl border border-[#0C0B09]/[0.08] bg-white p-6">
            <p
              className="text-[13px] italic text-[#7B1616]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              P.S.
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
              Si vous lisez ces lignes, c&apos;est que quelque chose vous a
              fait cliquer. On peut en parler quand vous voulez ·{' '}
              <Link
                href="/contact"
                className="font-medium text-[#7B1616] underline-offset-4 hover:underline"
              >
                un échange de 20 minutes
              </Link>
              , gratuit, sans engagement.
            </p>
          </div>

          {/* Folio en pied de lettre */}
          <p className="folio mt-10 text-center text-[10px]">
            PL. 01 · LETTRE OUVERTE · ADG/GE 2026
          </p>
        </article>
      </section>

      {/* ── CTA final ── */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <SectionLabel className="justify-center">
            Prochaine étape
          </SectionLabel>
          <h2
            className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Travaillons ensemble
            <span className="text-[#7B1616]">.</span>
          </h2>
          <p className="mb-8 mt-5 text-lg text-slate-500">
            Un premier échange par téléphone, gratuit et sans engagement. Je
            vous réponds sous 24h.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#7B1616] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#7B1616]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5C1010]"
          >
            Prendre contact
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
