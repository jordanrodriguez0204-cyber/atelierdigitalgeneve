import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales & CGV',
  description:
    'Mentions légales et conditions générales de vente d\'Atelier Digital Genève. Création de sites web pour les commerces genevois.',
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
      {title}
    </h2>
    <div className="space-y-3 text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function MentionsLegalesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Mentions légales & CGV
          </h1>
          <p className="text-slate-400">
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── PARTIE 1 : MENTIONS LÉGALES ── */}
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">1</span>
            Mentions légales
          </h2>

          <Section title="Éditeur du site">
            <p><strong>Raison sociale :</strong> Atelier Digital Genève</p>
            <p><strong>Responsable :</strong> Jordan Rodriguez</p>
            <p><strong>Adresse :</strong> Genève, Suisse</p>
            <p><strong>Email :</strong> contact@atelierdigitalgeneve.ch</p>
            <p><strong>Site web :</strong> https://atelierdigitalgeneve.ch</p>
          </Section>

          <Section title="Hébergement">
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><strong>Site :</strong> https://vercel.com</p>
            <p className="text-sm text-slate-400 mt-2">
              Les données sont répliquées sur des serveurs en Europe (Frankfurt) conformément à la politique de Vercel.
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, visuels, structure, code) est la propriété exclusive d&apos;Atelier Digital Genève, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
            </p>
            <p>
              Les sites de démonstration présentés dans le portfolio sont des créations fictives à titre d&apos;illustration. Tout ressemblance avec des commerces existants serait purement fortuite.
            </p>
          </Section>

          <Section title="Limitation de responsabilité">
            <p>
              Atelier Digital Genève s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations publiées sur ce site. Malgré tout le soin apporté, des erreurs peuvent survenir. Atelier Digital Genève ne saurait être tenu responsable d&apos;un usage fait du contenu de ce site ni des éventuels dommages directs ou indirects qui pourraient en résulter.
            </p>
          </Section>

          <div className="border-t border-slate-200 my-12" />

          {/* ── PARTIE 2 : CGV ── */}
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">2</span>
            Conditions générales de vente
          </h2>

          <Section title="Objet">
            <p>
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre Atelier Digital Genève (ci-après «&nbsp;le Prestataire&nbsp;») et tout client (ci-après «&nbsp;le Client&nbsp;») dans le cadre de la création de sites web et de services d&apos;hébergement associés.
            </p>
          </Section>

          <Section title="Forfaits et tarifs">
            <p>Les prestations sont proposées sous trois forfaits :</p>
            <ul className="list-none space-y-2 mt-2">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold shrink-0">Starter</span>
                <span>CHF 299 (création) + CHF 29/mois (hébergement) — site une page</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold shrink-0">Standard</span>
                <span>CHF 599 (création) + CHF 49/mois (hébergement) — jusqu&apos;à 5 pages</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold shrink-0">Pro</span>
                <span>CHF 990 (création) + CHF 79/mois (hébergement) — pages illimitées</span>
              </li>
            </ul>
            <p className="mt-3">
              Tous les prix sont en francs suisses (CHF), TVA non applicable (chiffre d&apos;affaires en dessous du seuil d&apos;assujettissement).
            </p>
          </Section>

          <Section title="Commande et devis">
            <p>
              Toute prestation fait l&apos;objet d&apos;un devis gratuit, envoyé par email sous 24h suivant le premier échange. Le devis est valable 30 jours. La commande est confirmée par le retour du devis signé (ou par email) accompagné du paiement d&apos;un acompte de 50%.
            </p>
          </Section>

          <Section title="Modalités de paiement">
            <p>
              Le paiement s&apos;effectue en deux fois :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>50% à la confirmation de commande (acompte)</li>
              <li>50% à la livraison du site, avant mise en ligne</li>
            </ul>
            <p className="mt-3">
              Le paiement mensuel d&apos;hébergement est dû le 1er de chaque mois, par virement bancaire ou tout autre moyen convenu.
            </p>
          </Section>

          <Section title="Délais de livraison">
            <p>Les délais indicatifs sont :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Forfait Starter : 5 jours ouvrables</li>
              <li>Forfait Standard : 7 jours ouvrables</li>
              <li>Forfait Pro : 14 jours ouvrables</li>
            </ul>
            <p className="mt-3">
              Ces délais courent à compter de la réception de l&apos;acompte et de l&apos;ensemble des éléments nécessaires (textes, photos, informations). Tout retard dans la fourniture de ces éléments par le Client entraîne un report proportionnel des délais.
            </p>
          </Section>

          <Section title="Révisions et modifications">
            <p>
              Chaque forfait inclut des révisions illimitées pendant la phase de création, jusqu&apos;à validation finale par le Client. Après mise en ligne, les modifications de contenu (textes, photos, horaires) sont incluses dans le forfait mensuel d&apos;hébergement. Les évolutions structurelles importantes font l&apos;objet d&apos;un devis complémentaire.
            </p>
          </Section>

          <Section title="Propriété du site">
            <p>
              À compter du paiement intégral de la prestation, le Client devient propriétaire de son site web. En cas de résiliation du contrat d&apos;hébergement mensuel, le Prestataire remet au Client l&apos;ensemble des fichiers sources de son site dans un délai de 15 jours.
            </p>
          </Section>

          <Section title="Résiliation de l'hébergement">
            <p>
              Le contrat d&apos;hébergement est à durée indéterminée. Il peut être résilié par l&apos;une ou l&apos;autre des parties avec un préavis d&apos;un mois, par email. En cas de non-paiement de deux mensualités consécutives, le Prestataire se réserve le droit de suspendre le site après mise en demeure restée sans réponse sous 15 jours.
            </p>
          </Section>

          <Section title="Responsabilité du Client">
            <p>
              Le Client est seul responsable du contenu qu&apos;il fournit (textes, images, logos). Il garantit disposer de tous les droits nécessaires sur ces éléments. Le Prestataire ne saurait être tenu responsable de tout contenu illicite ou portant atteinte à des droits tiers.
            </p>
          </Section>

          <Section title="Protection des données (LPD)">
            <p>
              Dans le cadre de la relation contractuelle, le Prestataire collecte les données personnelles strictement nécessaires (nom, email, téléphone). Ces données sont utilisées uniquement pour l&apos;exécution de la prestation et ne sont jamais transmises à des tiers.
            </p>
            <p>
              Conformément à la Loi fédérale sur la protection des données (LPD, révisée en vigueur depuis le 1er septembre 2023), le Client dispose d&apos;un droit d&apos;accès, de rectification et de suppression de ses données, exerceable par email à contact@atelierdigitalgeneve.ch.
            </p>
            <p>
              Les formulaires de contact du site utilisent Supabase (stockage en région Zurich) et Resend pour l&apos;envoi d&apos;emails transactionnels.
            </p>
          </Section>

          <Section title="Droit applicable et for juridique">
            <p>
              Les présentes CGV sont soumises au droit suisse. En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut d&apos;accord, les tribunaux compétents du canton de Genève sont seuls compétents.
            </p>
          </Section>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8">
            <p className="text-slate-500 text-sm leading-relaxed">
              Pour toute question relative aux présentes mentions légales ou CGV, contactez-nous à{' '}
              <a href="mailto:contact@atelierdigitalgeneve.ch" className="text-red-600 hover:underline">
                contact@atelierdigitalgeneve.ch
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
