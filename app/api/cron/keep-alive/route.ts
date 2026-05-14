import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

/**
 * Route GET /api/cron/keep-alive — empêche Supabase free tier de mettre
 * la base en pause après 7 jours sans activité.
 *
 * Déclenchée par Vercel Cron (voir vercel.json) deux fois par semaine.
 * Effectue une requête minimale (COUNT head-only sur la table `leads`)
 * — coût mémoire/CPU quasi nul côté Supabase, mais ça suffit à compter
 * comme activité.
 *
 * Sécurité : Vercel passe automatiquement un header
 * `Authorization: Bearer <CRON_SECRET>` aux routes cron, on vérifie qu'il
 * matche la variable d'environnement avant d'exécuter quoi que ce soit.
 * Évite que des bots externes pingent la route et fassent grimper notre
 * compteur de requêtes inutilement.
 */
export async function GET(request: Request) {
  // Vérification d'authentification Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Requête minimaliste : on récupère uniquement le compte, pas les lignes.
    // `head: true` + `count: 'exact'` = équivalent SQL de `SELECT COUNT(*)`.
    const { count, error } = await supabase
      .from('leads')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('[keep-alive] Supabase query failed:', error);
      return Response.json(
        { status: 'error', message: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      status: 'alive',
      timestamp: new Date().toISOString(),
      leads_count: count ?? 0,
    });
  } catch (e) {
    console.error('[keep-alive] Route crashed:', e);
    return Response.json({ status: 'error' }, { status: 500 });
  }
}
