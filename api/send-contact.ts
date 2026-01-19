import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    // Length validation
    if (name.length > 100 || email.length > 255 || subject.length > 200 || message.length > 5000) {
      return res.status(400).json({ error: 'Un ou plusieurs champs dépassent la longueur autorisée' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY non configurée');
      return res.status(500).json({ error: 'Configuration email manquante' });
    }

    const emailContent = `
Nouveau message depuis le formulaire de contact Carrément Abstrait

De : ${name.trim()}
Email : ${email.trim()}
Objet : ${subject.trim()}

Message :
${message.trim()}

---
Envoyé depuis carrementabstrait.com
    `.trim();

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Site Web <contact@carrementabstrait.com>',
        to: ['aurelie.guilloux.pro@gmail.com'],
        reply_to: email.trim(),
        subject: `[Contact Site] ${subject.trim()}`,
        text: emailContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error('Erreur Resend:', errorData);
      throw new Error("Erreur lors de l'envoi de l'email");
    }

    return res.status(200).json({ success: true, message: 'Message envoyé avec succès' });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: "Une erreur est survenue lors de l'envoi du message" });
  }
}
