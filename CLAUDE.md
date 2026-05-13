# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Projet

**Atelier Digital Genève** — Site vitrine d'une agence web genevoise qui crée des sites pour les commerçants locaux.

- **Production** : [atelierdigitalgeneve.ch](https://atelierdigitalgeneve.ch)
- **Vercel project** : `jordanrodriguez0204-cybers-projects/atelierdigitalgeneve`
- **GitHub repo** : `jordanrodriguez0204-cyber/atelierdigitalgeneve` (remote: `perso`)
- **Supabase project** : `fyrhommgqtmhcgwkfqne` (région Zurich)
- **Email** : `contact@atelierdigitalgeneve.ch` (Infomaniak)
- **Email transactionnel** : Resend, domaine `mail.atelierdigitalgeneve.ch`

## Commandes

```bash
npm run dev      # Dev sur http://localhost:3001
npm run build    # Build de production (vérifie TypeScript)
npx vercel deploy --prod   # Déploiement manuel en production
git push perso main        # Push vers GitHub
```

> `npm run dev` utilise le port 3001 (défini dans package.json via `${PORT:-3001}`).

## Stack

- **Next.js 16.2.4** — App Router, TypeScript, Turbopack
- **Tailwind CSS v4** — `@import "tailwindcss"` dans globals.css. Pas de `tailwind.config.ts`. Tokens custom via `@theme { }`.
- **Supabase** (`@supabase/ssr`) — Client browser : `lib/supabase/client.ts`, client serveur : `lib/supabase/server.ts`
- **Resend** — Emails via `app/api/contact/route.ts`

## Architecture

### Pages
- `/` — Landing (Hero, ProblemSolution, ServicesGrid, Testimonials, CTA)
- `/services` — 3 forfaits Starter CHF 299 / Standard CHF 599 / Pro CHF 990 + FAQ
- `/realisations` — Page portfolio narrative : vrais projets clients (filtrables par secteur), sites de démonstration, stats, process. Source de vérité dans `lib/realisations.ts`
- `/realisations/[slug]` — Page détail / case study, générée pour les projets ayant un `caseStudy: {…}` dans `lib/realisations.ts`. Sinon `notFound()`
- `/a-propos` — Page honnête sur l'agence
- `/contact` — `ContactForm` component
- `/api/contact` — Route POST : sauvegarde Supabase + email Resend. Contient `export const dynamic = 'force-dynamic'` (obligatoire pour éviter l'erreur Resend au build)
- `/portfolio` — redirige 301 vers `/realisations` (legacy)

### Flux formulaire
`ContactForm.tsx` (client) → `POST /api/contact` → table `leads` Supabase + email Resend → `contact@atelierdigitalgeneve.ch`

### Variables d'environnement
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
RESEND_API_KEY
```

## Base de données Supabase

Table `leads` (RLS activé) : INSERT public, SELECT bloqué. Voir `supabase/schema.sql`.

## Sites de démonstration (projets séparés)

Chaque demo est un projet Next.js indépendant avec sa propre bannière `DemoBanner`.

| Site | Dossier local | URL | Forfait |
|------|--------------|-----|---------|
| Restaurant | `~/bistrot-du-lac` | `restaurant.atelierdigitalgeneve.ch` | Standard CHF 599 |
| Coiffeur | `~/coiffeur-demo` *(à créer)* | `coiffeur.atelierdigitalgeneve.ch` | Starter CHF 299 |
| Boutique | `~/boutique-demo` *(à créer)* | `boutique.atelierdigitalgeneve.ch` | Pro CHF 990 |

Pour ajouter une demo ou un projet client dans la page Réalisations : ajouter une entrée dans `realisations[]` (clients) ou `demos[]` (démos) dans `lib/realisations.ts`. Mockups à poser dans `public/realisations/{slug}-{desktop,mobile}.png`.

## DNS (Infomaniak)

Nameservers Infomaniak (`nsany1/2.infomaniak.com`). Records Vercel gérés manuellement en vue avancée :
- `@` → A `76.76.21.21`
- `www` → CNAME `cname.vercel-dns.com.`
- `restaurant` → CNAME `cname.vercel-dns.com.`

> Ne pas toucher les records `_domainkey NS` — ils gèrent le DKIM Infomaniak Mail.
