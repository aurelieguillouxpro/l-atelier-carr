import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Tous les champs sont requis" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Email invalide" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Récupérer la clé API Resend depuis les variables d'environnement
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY non configurée");
      return new Response(
        JSON.stringify({ error: "Configuration email manquante" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Préparer le contenu de l'email
    const emailContent = `
Nouveau message depuis le formulaire de contact Carrément Abstrait

De : ${name}
Email : ${email}
Objet : ${subject}

Message :
${message}

---
Envoyé depuis carrementabstrait.com
    `.trim();

    // Envoyer l'email via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Site Web <contact@carrementabstrait.com>",
        to: ["aurelie.guilloux.pro@gmail.com"],
        reply_to: email,
        subject: `[Contact Site] ${subject}`,
        text: emailContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Erreur Resend:", errorData);
      throw new Error("Erreur lors de l'envoi de l'email");
    }

    const resendData = await resendResponse.json();
    console.log("Email envoyé avec succès:", resendData);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message envoyé avec succès"
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );

  } catch (error) {
    console.error("Erreur:", error);
    return new Response(
      JSON.stringify({
        error: "Une erreur est survenue lors de l'envoi du message",
        details: error instanceof Error ? error.message : "Erreur inconnue"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
