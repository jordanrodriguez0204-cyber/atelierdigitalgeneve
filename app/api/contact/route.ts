import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { nom, email, telephone, nom_commerce, commerce_type, message } = body;

    if (!nom || !email) {
      return Response.json({ error: 'Nom et email requis' }, { status: 400 });
    }

    // Save to Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error: dbError } = await supabase.from('leads').insert([
      { nom, email, telephone: telephone || null, nom_commerce: nom_commerce || null, commerce_type: commerce_type || null, message: message || null },
    ]);

    if (dbError) throw dbError;

    // Send email notification
    await resend.emails.send({
      from: 'Atelier Digital Genève <noreply@mail.atelierdigitalgeneve.ch>',
      to: 'contact@atelierdigitalgeneve.ch',
      subject: `Nouvelle demande de ${nom}${nom_commerce ? ` · ${nom_commerce}` : ''}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ''}
        ${nom_commerce ? `<p><strong>Commerce :</strong> ${nom_commerce}</p>` : ''}
        ${commerce_type ? `<p><strong>Type :</strong> ${commerce_type}</p>` : ''}
        ${message ? `<p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p style="color:#888;font-size:12px">Reçu via atelierdigitalgeneve.ch</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
