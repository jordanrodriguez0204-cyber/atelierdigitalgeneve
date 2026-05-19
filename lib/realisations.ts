/**
 * Source de vérité des projets affichés sur /realisations
 *
 * - `realisations` : vrais projets clients (avec ou sans anonymisation)
 * - `demos`        : sites de démonstration ADG (restaurant / coiffeur / boutique)
 * - `testimonials` : citations clients · vide tant qu'il n'y a pas au moins 2
 *   témoignages réels (la section /realisations#temoignages est masquée sinon)
 *
 * Les mockups référencés ici sont attendus dans /public/realisations/.
 * Tant qu'ils n'existent pas, le composant <ProjectMockup /> bascule
 * automatiquement sur un placeholder en gradient.
 */

export type Forfait = 'Starter' | 'Standard' | 'Pro';

export type Secteur =
  | 'Restauration'
  | 'Beauté & Bien-être'
  | 'Commerce'
  | 'Services';

export type Statut = 'client' | 'cadeau' | 'confidentiel' | 'demo';

export interface CaseStudy {
  probleme: string;
  solution: string;
  resultat: string;
  temoignage?: {
    citation: string;
    auteur: string;
    role: string;
  };
}

export interface Mockup {
  desktop: string;
  mobile: string;
  /** Fallback visuel si les fichiers ne sont pas (encore) dans /public */
  fallback?: {
    emoji: string;
    /** Classes Tailwind `from-x via-y to-z` */
    gradient: string;
  };
}

export interface Realisation {
  slug: string;
  nom: string;
  anonymise?: boolean;
  secteur: Secteur;
  forfait: Forfait;
  statut: Statut;
  urlLive?: string;
  /** Une phrase, ~80 caractères max */
  resultat: string;
  mockup: Mockup;
  /** Texte sous le mockup sur la page détail */
  description?: string;
  caseStudy?: CaseStudy;
  /** Format YYYY-MM */
  dateMiseEnLigne: string;
}

export interface Testimonial {
  citation: string;
  auteur: string;
  commerce: string;
  /** Optionnel · chemin /public ou URL */
  photo?: string;
  /** slug du projet auquel le témoignage est rattaché */
  realisationSlug?: string;
}

/* ────────────────────────────────────────────────────────────
   RÉALISATIONS · vrais projets clients
   ──────────────────────────────────────────────────────────── */

export const realisations: Realisation[] = [
  {
    slug: 'cocina-de-chanyz',
    nom: 'Cocina de Chanyz',
    secteur: 'Restauration',
    forfait: 'Starter',
    statut: 'client',
    urlLive: 'https://cocina-de-chanyz.vercel.app',
    resultat: 'Pâtisserie en ligne avec devis et galerie filtrable',
    mockup: {
      desktop: '/realisations/cocina-de-chanyz-desktop.png',
      mobile: '/realisations/cocina-de-chanyz-mobile.png',
    },
    description:
      "Site vitrine pour une pâtisserie genevoise spécialisée dans la cuisine péruvienne. Devis en ligne, galerie filtrée par catégorie, envoi automatique d'email via Resend.",
    dateMiseEnLigne: '2026-05',
  },
  {
    slug: 'les-amis-asia-dinner',
    nom: 'Les Amis Asia Dinner',
    secteur: 'Restauration',
    forfait: 'Standard',
    statut: 'cadeau',
    urlLive: 'https://les-amis-asia-dinner-website.vercel.app',
    resultat: 'Restaurant asiatique avec menu détaillé et réservation en ligne',
    mockup: {
      desktop: '/realisations/les-amis-desktop.png',
      mobile: '/realisations/les-amis-mobile.png',
    },
    description:
      'Site complet pour un restaurant asiatique à Genève. 5 pages optimisées Google, menu structuré avec photos, formulaire de réservation de table.',
    dateMiseEnLigne: '2026-05',
  },
];

/* ────────────────────────────────────────────────────────────
   DEMOS · sites de démonstration ADG
   ──────────────────────────────────────────────────────────── */

export const demos: Realisation[] = [
  {
    slug: 'demo-restaurant',
    nom: 'Bistrot du Lac',
    secteur: 'Restauration',
    forfait: 'Standard',
    statut: 'demo',
    urlLive: 'https://restaurant.atelierdigitalgeneve.ch',
    resultat: 'Exemple de site Standard pour un restaurant',
    mockup: {
      desktop: '/realisations/demo-restaurant-desktop.png',
      mobile: '/realisations/demo-restaurant-mobile.png',
      fallback: {
        emoji: '🍽️',
        gradient: 'from-slate-700 via-slate-800 to-slate-900',
      },
    },
    dateMiseEnLigne: '2026-04',
  },
  {
    slug: 'demo-coiffeur',
    nom: 'Salon Émeraude',
    secteur: 'Beauté & Bien-être',
    forfait: 'Starter',
    statut: 'demo',
    urlLive: 'https://coiffeur.atelierdigitalgeneve.ch',
    resultat: 'Exemple de site Starter pour un coiffeur',
    mockup: {
      desktop: '/realisations/demo-coiffeur-desktop.png',
      mobile: '/realisations/demo-coiffeur-mobile.png',
      fallback: {
        emoji: '✂️',
        gradient: 'from-emerald-700 via-emerald-800 to-slate-900',
      },
    },
    dateMiseEnLigne: '2026-04',
  },
  {
    slug: 'demo-boutique',
    nom: 'Atelier Maison',
    secteur: 'Commerce',
    forfait: 'Pro',
    statut: 'demo',
    urlLive: 'https://boutique.atelierdigitalgeneve.ch',
    resultat: 'Exemple de site Pro pour une boutique',
    mockup: {
      desktop: '/realisations/demo-boutique-desktop.png',
      mobile: '/realisations/demo-boutique-mobile.png',
      fallback: {
        emoji: '🛍️',
        gradient: 'from-amber-700 via-orange-800 to-rose-900',
      },
    },
    dateMiseEnLigne: '2026-04',
  },
];

/* ────────────────────────────────────────────────────────────
   TÉMOIGNAGES · masqués tant que length < 2
   ──────────────────────────────────────────────────────────── */

export const testimonials: Testimonial[] = [];

/* ────────────────────────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────────────────────────── */

export const SECTEURS: Secteur[] = [
  'Restauration',
  'Beauté & Bien-être',
  'Commerce',
  'Services',
];

/** Retourne tous les projets (réalisations + démos) sous forme de map indexée par slug */
export function getAllProjectsBySlug(): Record<string, Realisation> {
  const all = [...realisations, ...demos];
  return Object.fromEntries(all.map((p) => [p.slug, p]));
}

/** Récupère un projet par son slug, ou undefined */
export function getProjectBySlug(slug: string): Realisation | undefined {
  return getAllProjectsBySlug()[slug];
}

/** Slugs des projets qui ont un caseStudy (pour generateStaticParams) */
export function getCaseStudySlugs(): string[] {
  return [...realisations, ...demos]
    .filter((p) => p.caseStudy)
    .map((p) => p.slug);
}

/** Affichage du nom (anonymisé si demandé) */
export function getDisplayName(p: Realisation): string {
  return p.anonymise ? `${p.secteur} · Projet confidentiel` : p.nom;
}
