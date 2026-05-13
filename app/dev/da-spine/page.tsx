import type { Metadata } from 'next';
import TrimMarks from '@/components/visual/TrimMarks';
import Watermark from '@/components/visual/Watermark';
import SectionLabel from '@/components/visual/SectionLabel';
import MaskingTape from '@/components/visual/MaskingTape';

export const metadata: Metadata = {
  title: 'DA Spine · Démo',
  description: 'Démo interne des utilities et composants DA partagés.',
  robots: { index: false, follow: false },
};

/**
 * Page de démo interne — pas indexée (robots noindex).
 *
 * Sert à visualiser toutes les briques du squelette DA en un seul endroit
 * avant de les appliquer aux vraies pages. Ce fichier n'est PAS référencé
 * depuis la nav. Accessible uniquement via /dev/da-spine.
 *
 * À supprimer une fois la phase 2 commencée si Jordan veut nettoyer.
 */
export default function DaSpinePage() {
  return (
    <div className="bg-[#FAFAF8] pt-20 pb-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 space-y-20">
        {/* ── En-tête de la page démo ── */}
        <header>
          <p className="folio mb-3">DOC. 2026.05.13 · Démo DA — Phase 1</p>
          <h1
            className="text-5xl tracking-tight text-[#0C0B09]"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Squelette commun
          </h1>
          <p className="mt-4 max-w-xl text-slate-600">
            Les briques partagées par toutes les pages : grain papier, typo
            serif, croix de repérage, watermark, lettrine, ruban de masking.
            Une fois validées ici, on les distribue dans les vraies pages.
          </p>
          <span className="construction-line mt-6 block" />
        </header>

        {/* ── 1. Typographie ── */}
        <section className="grain rounded-2xl bg-white p-10 ring-1 ring-black/[0.06]">
          <SectionLabel number="01">Typographie</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Sans-serif Plus Jakarta + serif Fraunces
          </h2>
          <span className="construction-line mt-4 block" />

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="label text-slate-400">Sans-serif (Plus Jakarta)</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                Atelier Digital Genève
              </p>
              <p className="text-slate-600">
                Body texte — Inter, ce que tu lis maintenant. Le système
                principal reste sans-serif pour la lisibilité.
              </p>
            </div>
            <div>
              <p className="label text-slate-400">Serif (Fraunces)</p>
              <p
                className="mt-2 text-2xl"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Atelier Digital Genève
              </p>
              <p
                className="text-slate-600"
                style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
              >
                Pour les moments lents : drop-caps, watermarks, kickers,
                grands chiffres 01 / 02 / 03.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="label-serif">Variante : label-serif (.label-serif)</p>
            <p className="mt-1 text-slate-500 text-sm">
              Utilisée pour les « Sect. 01 » et toutes les marques d&apos;atelier
              en italique bourgogne.
            </p>
          </div>
        </section>

        {/* ── 2. Drop-cap ── */}
        <section className="grain rounded-2xl bg-white p-10 ring-1 ring-black/[0.06]">
          <SectionLabel number="02">Drop-cap</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Lettrine bourgogne pour les pages éditoriales
          </h2>
          <span className="construction-line mt-4 block" />

          <p className="drop-cap mt-8 text-[17px] leading-[1.85] text-slate-700">
            Atelier Digital Genève est un studio web indépendant à taille
            humaine, fondé en 2025 par Jordan Rodriguez. Nous concevons des
            sites pour les commerces de Genève — restaurants, boutiques,
            salons — avec un parti pris simple : un site doit ramener des
            clients, pas juste être beau. Sur cette page, la première lettre
            est traitée en serif bourgogne sur ~3 lignes, comme dans un
            magazine. À utiliser surtout sur la page À propos.
          </p>
        </section>

        {/* ── 3. Trim marks + Watermark ── */}
        <section className="relative grain-strong rounded-2xl bg-[#F5F1EA] p-12 ring-1 ring-black/[0.06] overflow-hidden min-h-[420px]">
          <TrimMarks inset={20} color="text-[#CDBEAF]" />
          <Watermark size={50} opacity={0.07} offsetX={-15} offsetY={5}>
            A
          </Watermark>

          <div className="relative">
            <SectionLabel number="03">Trim marks + Watermark</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Composé pour les heros et grandes sections
            </h2>
            <span className="construction-line mt-4 block" />
            <p className="mt-6 max-w-md text-slate-600">
              Les croix de repérage sont aux 4 coins de cette section ; le
              watermark « A » est en arrière-plan opacité 7%, légèrement décalé
              à gauche. Le grain papier renforcé (.grain-strong) donne le
              côté débossé.
            </p>
          </div>
        </section>

        {/* ── 4. Masking tape + Accent square + Folio ── */}
        <section className="relative grain rounded-2xl bg-white p-10 ring-1 ring-black/[0.06]">
          <MaskingTape className="absolute -top-3 left-12" rotate={-4}>
            note d&apos;atelier
          </MaskingTape>

          <SectionLabel number="04">Détails atelier</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Accent square, masking tape, folio
          </h2>
          <span className="construction-line mt-4 block" />

          <div className="mt-8 space-y-4">
            <p className="text-slate-600">
              Petit carré bourgogne en fin de phrase pour marquer la clôture
              d&apos;un bloc <span className="accent-square ml-1" />
            </p>
            <p className="text-slate-600">
              Masking tape en haut de cette card : ruban beige translucide
              avec annotation manuscrite, légère rotation. À utiliser une
              fois par page max.
            </p>
            <p className="folio mt-10 block border-t border-slate-100 pt-4">
              PL. 04 · DOC. 2026.05.13 · ADG/GE
            </p>
          </div>
        </section>

        {/* ── 5. Numéros XL en watermark + trim-line ── */}
        <section className="relative rounded-2xl bg-[#0C0B09] p-12 overflow-hidden">
          <TrimMarks inset={20} color="text-white/15" />
          <Watermark size={70} opacity={0.06} color="#F5F1EA" offsetX={20}>
            01
          </Watermark>

          <div className="relative">
            <SectionLabel number="05" variant="dark">
              Chiffres XL filigrane (fond sombre)
            </SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
              Section sombre avec chiffre serif géant
            </h2>
            <span className="construction-line mt-4 block" style={{ filter: 'brightness(1.4)' }} />
            <p className="mt-6 max-w-md text-white/60">
              Pour les blocs Process / case study qui doivent respirer le
              « rapport de mission ». Le chiffre 01 est en Fraunces 70vh à 6%
              d&apos;opacité crème.
            </p>
          </div>
        </section>

        {/* ── 6. Trait de coupe ── */}
        <div>
          <p className="label text-slate-400 mb-3">06 · Trait de coupe (.trim-line)</p>
          <div className="trim-line w-full" />
          <p className="mt-3 text-slate-500 text-sm">
            Pointillé fin à l&apos;ancienne, pour séparer subtilement deux
            sections sans poser une bordure pleine. Utile en haut et en bas
            des sections « fiches ».
          </p>
        </div>
      </div>
    </div>
  );
}
