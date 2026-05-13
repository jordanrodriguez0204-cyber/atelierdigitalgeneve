import type { Metadata } from 'next';
import SectionLabel from '@/components/visual/SectionLabel';
import TrimMarks from '@/components/visual/TrimMarks';

export const metadata: Metadata = {
  title: 'Mentions légales & CGV',
  description:
    "Mentions légales et conditions générales de vente d'Atelier Digital Genève. Création de sites web pour les commerces genevois.",
  robots: { index: false, follow: false },
};

/**
 * /mentions-legales — refonte phase 6 DA "imprimé légal".
 *
 * Esprit imprimé administratif suisse : layout strict ~720px, articles
 * numérotés `ART. N` en serif italique bourgogne au-dessus de chaque titre,
 * hairlines comme séparateurs (jamais de borders épaisses), folio en pied.
 * Pas de marques d'atelier décoratives — l'identité passe par la rigueur
 * typographique, comme un vrai document officiel.
 *
 * Le contenu juridique est intégralement conservé.
 */

interface LegalArticleProps {
  num: number;
  title: string;
  children: React.ReactNode;
}

/**
 * Article de loi typographique — numéro en italique serif bourgogne, titre
 * en sans-serif, contenu en dessous. Trim-line entre articles pour le côté
 * "feuillet imprimé".
 */
function LegalArticle({ num, title, children }: LegalArticleProps) {
  return (
    <article className="py-7 first:pt-0">
      <header className="mb-4">
        <p
          className="text-[12px] italic text-[#7B1616]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Art. {num}
        </p>
        <h3 className="mt-1 text-[18px] font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
      </header>
      <div className="space-y-3 text-[14.5px] leading-[1.75] text-slate-700">
        {children}
      </div>
    </article>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white pt-16">
      {/* ── Hero éditorial ── */}
      <section className="relative overflow-hidden bg-[#0C0B09] px-4 py-20">
        <TrimMarks inset={20} size={16} color="text-white/20" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[260px] w-[500px] -translate-x-1/2 rounded-full bg-[#7B1616]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="folio mb-6 text-white/35">
            IMPRIMÉ OFFICIEL · GENÈVE 2026
          </p>

          <SectionLabel variant="dark" className="justify-center">
            Document légal
          </SectionLabel>

          <h1
            className="mt-6 text-[clamp(34px,5.5vw,56px)] font-bold tracking-[-0.025em] text-white"
            style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.05 }}
          >
            Mentions légales{' '}
            <span className="italic text-[#E8B4B4]" style={{ fontWeight: 500 }}>
              &amp; CGV
            </span>
            <span className="text-[#7B1616]">.</span>
          </h1>

          <p
            className="mt-5 text-[13px] italic text-white/55"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </section>

      {/* ── Corps du document — colonne ~720px ── */}
      <section className="grain bg-[#FAFAF8] py-20">
        <article className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8">
          {/* En-tête de dossier */}
          <header className="mb-12 flex items-baseline justify-between border-b border-[#0C0B09]/[0.08] pb-6">
            <p className="folio text-[12px]">
              DOSSIER N° 2026.05 · ADG/GE
            </p>
            <p
              className="text-[12px] italic text-slate-500"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Pages 1 / 2
            </p>
          </header>

          {/* ── PARTIE 1 — Mentions légales ── */}
          <SectionLabel number="01">Partie première</SectionLabel>
          <h2
            className="mt-4 text-2xl tracking-tight text-slate-900 md:text-3xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Mentions légales
          </h2>
          <span className="construction-line mt-3 block" />

          <div className="mt-8 divide-y divide-[#0C0B09]/[0.08]">
            <LegalArticle num={1} title="Éditeur du site">
              <dl className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[160px_1fr]">
                <dt className="font-medium text-slate-900">Raison sociale</dt>
                <dd>Atelier Digital Genève</dd>
                <dt className="font-medium text-slate-900">Responsable</dt>
                <dd>Jordan Rodriguez</dd>
                <dt className="font-medium text-slate-900">Adresse</dt>
                <dd>Genève, Suisse</dd>
                <dt className="font-medium text-slate-900">Email</dt>
                <dd>
                  <a
                    href="mailto:contact@atelierdigitalgeneve.ch"
                    className="text-[#7B1616] underline-offset-4 hover:underline"
                  >
                    contact@atelierdigitalgeneve.ch
                  </a>
                </dd>
                <dt className="font-medium text-slate-900">Site web</dt>
                <dd>https://atelierdigitalgeneve.ch</dd>
              </dl>
            </LegalArticle>

            <LegalArticle num={2} title="Hébergement">
              <dl className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[160px_1fr]">
                <dt className="font-medium text-slate-900">Hébergeur</dt>
                <dd>Vercel Inc.</dd>
                <dt className="font-medium text-slate-900">Adresse</dt>
                <dd>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</dd>
                <dt className="font-medium text-slate-900">Site</dt>
                <dd>https://vercel.com</dd>
              </dl>
              <p className="mt-3 text-[13px] italic text-slate-500">
                Les données sont répliquées sur des serveurs en Europe
                (Frankfurt) conformément à la politique de Vercel.
              </p>
            </LegalArticle>

            <LegalArticle num={3} title="Propriété intellectuelle">
              <p>
                L&apos;ensemble du contenu de ce site (textes, visuels,
                structure, code) est la propriété exclusive d&apos;Atelier
                Digital Genève, sauf mention contraire. Toute reproduction,
                même partielle, est interdite sans autorisation préalable
                écrite.
              </p>
              <p>
                Les sites de démonstration présentés dans le portfolio sont
                des créations fictives à titre d&apos;illustration. Toute
                ressemblance avec des commerces existants serait purement
                fortuite.
              </p>
            </LegalArticle>

            <LegalArticle num={4} title="Limitation de responsabilité">
              <p>
                Atelier Digital Genève s&apos;efforce d&apos;assurer
                l&apos;exactitude et la mise à jour des informations publiées
                sur ce site. Malgré tout le soin apporté, des erreurs peuvent
                survenir. Atelier Digital Genève ne saurait être tenu
                responsable d&apos;un usage fait du contenu de ce site ni des
                éventuels dommages directs ou indirects qui pourraient en
                résulter.
              </p>
            </LegalArticle>
          </div>

          {/* Trait de coupe entre parties */}
          <div className="my-14">
            <div className="trim-line w-full" />
          </div>

          {/* ── PARTIE 2 — CGV ── */}
          <SectionLabel number="02">Partie seconde</SectionLabel>
          <h2
            className="mt-4 text-2xl tracking-tight text-slate-900 md:text-3xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Conditions générales de vente
          </h2>
          <span className="construction-line mt-3 block" />

          <div className="mt-8 divide-y divide-[#0C0B09]/[0.08]">
            <LegalArticle num={5} title="Objet">
              <p>
                Les présentes conditions générales de vente (CGV) régissent
                les relations contractuelles entre Atelier Digital Genève
                (ci-après «&nbsp;le Prestataire&nbsp;») et tout client
                (ci-après «&nbsp;le Client&nbsp;») dans le cadre de la
                création de sites web et de services d&apos;hébergement
                associés.
              </p>
            </LegalArticle>

            <LegalArticle num={6} title="Forfaits et tarifs">
              <p>Les prestations sont proposées sous trois forfaits :</p>
              <ul className="space-y-2 pt-2">
                {[
                  { name: 'Starter',  desc: 'CHF 299 (création) + CHF 29/mois (hébergement) · site une page' },
                  { name: 'Standard', desc: "CHF 599 (création) + CHF 49/mois (hébergement) · jusqu'à 5 pages" },
                  { name: 'Pro',      desc: 'CHF 990 (création) + CHF 79/mois (hébergement) · pages illimitées' },
                ].map((f) => (
                  <li key={f.name} className="flex items-baseline gap-3">
                    <span
                      className="shrink-0 text-[14px] italic text-[#7B1616]"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                    >
                      {f.name}
                    </span>
                    <span className="text-[14px] text-slate-700">{f.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                Tous les prix sont en francs suisses (CHF), TVA non applicable
                (chiffre d&apos;affaires en dessous du seuil
                d&apos;assujettissement).
              </p>
            </LegalArticle>

            <LegalArticle num={7} title="Commande et devis">
              <p>
                Toute prestation fait l&apos;objet d&apos;un devis gratuit,
                envoyé par email sous 24h suivant le premier échange. Le devis
                est valable 30 jours. La commande est confirmée par le retour
                du devis signé (ou par email) accompagné du paiement
                d&apos;un acompte de 50%.
              </p>
            </LegalArticle>

            <LegalArticle num={8} title="Modalités de paiement">
              <p>Le paiement s&apos;effectue en deux fois :</p>
              <ul className="ml-1 space-y-1 pt-2">
                <li className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                  />
                  50% à la confirmation de commande (acompte)
                </li>
                <li className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                  />
                  50% à la livraison du site, avant mise en ligne
                </li>
              </ul>
              <p className="pt-2">
                Le paiement mensuel d&apos;hébergement est dû le 1er de chaque
                mois, par virement bancaire ou tout autre moyen convenu.
              </p>
            </LegalArticle>

            <LegalArticle num={9} title="Délais de livraison">
              <p>Les délais indicatifs sont :</p>
              <ul className="ml-1 space-y-1 pt-2">
                <li className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                  />
                  Forfait Starter : 5 jours ouvrables
                </li>
                <li className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                  />
                  Forfait Standard : 7 jours ouvrables
                </li>
                <li className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                  />
                  Forfait Pro : 14 jours ouvrables
                </li>
              </ul>
              <p className="pt-2">
                Ces délais courent à compter de la réception de l&apos;acompte
                et de l&apos;ensemble des éléments nécessaires (textes,
                photos, informations). Tout retard dans la fourniture de ces
                éléments par le Client entraîne un report proportionnel des
                délais.
              </p>
            </LegalArticle>

            <LegalArticle num={10} title="Révisions et modifications">
              <p>
                Chaque forfait inclut des révisions illimitées pendant la
                phase de création, jusqu&apos;à validation finale par le
                Client. Après mise en ligne, les modifications de contenu
                (textes, photos, horaires) sont incluses dans le forfait
                mensuel d&apos;hébergement. Les évolutions structurelles
                importantes font l&apos;objet d&apos;un devis complémentaire.
              </p>
            </LegalArticle>

            <LegalArticle num={11} title="Propriété du site">
              <p>
                À compter du paiement intégral de la prestation, le Client
                devient propriétaire de son site web. En cas de résiliation du
                contrat d&apos;hébergement mensuel, le Prestataire remet au
                Client l&apos;ensemble des fichiers sources de son site dans
                un délai de 15 jours.
              </p>
            </LegalArticle>

            <LegalArticle num={12} title="Résiliation de l'hébergement">
              <p>
                Le contrat d&apos;hébergement est à durée indéterminée. Il
                peut être résilié par l&apos;une ou l&apos;autre des parties
                avec un préavis d&apos;un mois, par email. En cas de
                non-paiement de deux mensualités consécutives, le Prestataire
                se réserve le droit de suspendre le site après mise en demeure
                restée sans réponse sous 15 jours.
              </p>
            </LegalArticle>

            <LegalArticle num={13} title="Responsabilité du Client">
              <p>
                Le Client est seul responsable du contenu qu&apos;il fournit
                (textes, images, logos). Il garantit disposer de tous les
                droits nécessaires sur ces éléments. Le Prestataire ne saurait
                être tenu responsable de tout contenu illicite ou portant
                atteinte à des droits tiers.
              </p>
            </LegalArticle>

            <LegalArticle num={14} title="Protection des données (LPD)">
              <p>
                Dans le cadre de la relation contractuelle, le Prestataire
                collecte les données personnelles strictement nécessaires
                (nom, email, téléphone). Ces données sont utilisées uniquement
                pour l&apos;exécution de la prestation et ne sont jamais
                transmises à des tiers.
              </p>
              <p>
                Conformément à la Loi fédérale sur la protection des données
                (LPD, révisée en vigueur depuis le 1er septembre 2023), le
                Client dispose d&apos;un droit d&apos;accès, de rectification
                et de suppression de ses données, exerceable par email à{' '}
                <a
                  href="mailto:contact@atelierdigitalgeneve.ch"
                  className="text-[#7B1616] underline-offset-4 hover:underline"
                >
                  contact@atelierdigitalgeneve.ch
                </a>.
              </p>
              <p>
                Les formulaires de contact du site utilisent Supabase
                (stockage en région Zurich) et Resend pour l&apos;envoi
                d&apos;emails transactionnels.
              </p>
            </LegalArticle>

            <LegalArticle num={15} title="Droit applicable et for juridique">
              <p>
                Les présentes CGV sont soumises au droit suisse. En cas de
                litige, les parties s&apos;efforceront de trouver une solution
                amiable. À défaut d&apos;accord, les tribunaux compétents du
                canton de Genève sont seuls compétents
                <span className="accent-square ml-1" />
              </p>
            </LegalArticle>
          </div>

          {/* Contact box en pied du document */}
          <div className="mt-14 rounded-xl border border-[#0C0B09]/[0.08] bg-white p-6">
            <p
              className="text-[13px] italic text-[#7B1616]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Réclamation
            </p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-slate-700">
              Pour toute question relative aux présentes mentions légales ou
              CGV, contactez-nous à{' '}
              <a
                href="mailto:contact@atelierdigitalgeneve.ch"
                className="font-medium text-[#7B1616] underline-offset-4 hover:underline"
              >
                contact@atelierdigitalgeneve.ch
              </a>.
            </p>
          </div>

          {/* Pied de document — folio final */}
          <footer className="mt-12 flex items-baseline justify-between border-t border-[#0C0B09]/[0.08] pt-6">
            <p className="folio text-[10px]">
              IMPRIMÉ À GENÈVE · MAI 2026
            </p>
            <p
              className="text-[10px] italic text-slate-400"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              ADG/GE — Édition {new Date().getFullYear()}
            </p>
          </footer>
        </article>
      </section>
    </div>
  );
}
