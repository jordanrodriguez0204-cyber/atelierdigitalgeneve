import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectMockup from '@/components/realisations/ProjectMockup';
import CaseStudySection from '@/components/realisations/CaseStudySection';
import {
  getCaseStudySlugs,
  getProjectBySlug,
  getDisplayName,
} from '@/lib/realisations';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

/**
 * Pré-génération des routes : seuls les projets ayant une `caseStudy` ont
 * leur page détail.
 */
export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    return { title: 'Réalisation introuvable' };
  }

  const displayName = getDisplayName(project);
  const title = `${displayName} — Étude de cas`;
  const description = project.description ?? project.resultat;

  return {
    title,
    description,
    openGraph: {
      title: `${displayName} · Atelier Digital Genève`,
      description,
      type: 'article',
    },
    alternates: {
      canonical: `https://atelierdigitalgeneve.ch/realisations/${slug}`,
    },
  };
}

export default async function RealisationDetailPage({ params }: RouteParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const displayName = getDisplayName(project);
  const isConfidential = project.statut === 'confidentiel' || project.anonymise;

  // Schema.org — CreativeWork
  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: displayName,
    about: project.secteur,
    creator: {
      '@type': 'Organization',
      name: 'Atelier Digital Genève',
      url: 'https://atelierdigitalgeneve.ch',
    },
    url: `https://atelierdigitalgeneve.ch/realisations/${project.slug}`,
    ...(project.urlLive && !isConfidential ? { sameAs: [project.urlLive] } : {}),
    dateCreated: project.dateMiseEnLigne,
    description: project.description ?? project.resultat,
  };

  return (
    <div className="bg-white pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-900 px-4 py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            {project.secteur}
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            {displayName}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {project.resultat}
          </p>
        </div>
      </section>

      {/* ── Mockup grand format ── */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ProjectMockup
            mockup={project.mockup}
            alt={`Aperçu détaillé du site ${displayName}`}
            size="large"
            hoverable={false}
          />
          {project.description && (
            <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600">
              {project.description}
            </p>
          )}
        </div>
      </section>

      {/* ── Le projet en bref ── */}
      <section className="border-y border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            <div>
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Forfait
              </p>
              <p className="text-[15px] font-semibold text-slate-900">
                {project.forfait}
              </p>
            </div>
            <div>
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Secteur
              </p>
              <p className="text-[15px] font-semibold text-slate-900">
                {project.secteur}
              </p>
            </div>
            <div>
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Mise en ligne
              </p>
              <p className="text-[15px] font-semibold text-slate-900">
                {project.dateMiseEnLigne}
              </p>
            </div>
            <div>
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Statut
              </p>
              <p className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-slate-900">
                {project.statut === 'demo' ? (
                  'Démo'
                ) : (
                  <>
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    En ligne
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case study ── */}
      <CaseStudySection caseStudy={project.caseStudy!} />

      {/* ── CTA vers le site live ── */}
      {project.urlLive && !isConfidential && (
        <section className="bg-white pb-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <a
              href={project.urlLive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-600"
            >
              Voir le site live
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>
      )}

      {/* ── Footer CTA "Vous voulez un site comme celui-ci ?" ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Et vous ?
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Vous voulez un site comme celui-ci ?
          </h2>
          <p className="mb-8 text-lg text-slate-500">
            20 minutes au téléphone pour comprendre votre projet, puis un devis
            sous 24h.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-red-600/30"
            >
              Demander un devis gratuit
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Voir les autres réalisations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
