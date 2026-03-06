import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { naam, email, bedrijfsnaam, bericht, bron, pakket, website, contact_voorkeur } = await req.json();

    // Validate required fields
    if (!naam || !email || !bericht) {
      return new Response(
        JSON.stringify({ error: "Naam, email en bericht zijn verplicht." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      naam,
      email,
      bedrijfsnaam: bedrijfsnaam || null,
      bericht,
      bron: bron || "contact",
      pakket: pakket || null,
      website: website || null,
      contact_voorkeur: contact_voorkeur || null,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Opslaan mislukt." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Supabase's built-in SMTP
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (RESEND_API_KEY) {
      const emailBody = `
Nieuw contactbericht via ${bron === "checkout" ? "checkout" : "contactpagina"}

Naam: ${naam}
E-mail: ${email}
Bedrijfsnaam: ${bedrijfsnaam || "Niet opgegeven"}
${pakket ? `Pakket: ${pakket}` : ""}
${website ? `Website: ${website}` : ""}
${contact_voorkeur ? `Contactvoorkeur: ${contact_voorkeur}` : ""}

Bericht:
${bericht}
      `.trim();

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Fyxo Website <onboarding@resend.dev>",
          to: ["info@fyxo.online"],
          subject: `Nieuw bericht van ${naam}${pakket ? ` — ${pakket}` : ""}`,
          text: emailBody,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error("Resend error:", errText);
        // Don't fail the request - submission is saved in DB
      }
    } else {
      console.log("RESEND_API_KEY not set, skipping email. Submission saved to database.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Er ging iets mis." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
