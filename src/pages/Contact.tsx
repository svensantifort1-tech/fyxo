import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Send, ChevronDown, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const faqs = [
  {
    q: "Hoe lang duurt het om een website te bouwen?",
    a: "Gemiddeld 1–2 weken, afhankelijk van de complexiteit en jouw feedback.",
  },
  {
    q: "Kan ik mijn bestaande website laten verbeteren?",
    a: "Absoluut. We kunnen je huidige site analyseren en een plan maken om de snelheid en kwaliteit drastisch te verbeteren.",
  },
  {
    q: "Wat als ik later wijzigingen wil?",
    a: "Met het Premium-pakket zijn kleine wijzigingen inbegrepen. Bij het Standaard-pakket kun je zelf wijzigingen doorvoeren of ons inhuren.",
  },
  {
    q: "Waarom is handgemaakte code beter dan WordPress?",
    a: "WordPress laadt tientallen plug-ins en ongebruikte code. Handgemaakte code bevat alleen wat nodig is, wat resulteert in laadtijden die tot 10x sneller zijn.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    email: "",
    bedrijfsnaam: "",
    bericht: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          naam: form.naam,
          email: form.email,
          bedrijfsnaam: form.bedrijfsnaam,
          bericht: form.bericht,
          bron: "contact",
        },
      });

      if (error) throw error;

      toast.success("Bericht verzonden! We nemen binnen 24 uur contact met je op.");
      setForm({ naam: "", email: "", bedrijfsnaam: "", bericht: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Er ging iets mis. Probeer het opnieuw of mail ons direct.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
              Laten we{" "}
              <span className="text-gradient">kennismaken</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Vertel ons over je project en we nemen binnen 24 uur contact op voor een vrijblijvend gesprek.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Naam</label>
                    <Input name="naam" value={form.naam} onChange={handleChange} placeholder="Je naam" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">E-mail</label>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="naam@bedrijf.nl" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Bedrijfsnaam</label>
                  <Input name="bedrijfsnaam" value={form.bedrijfsnaam} onChange={handleChange} placeholder="Je bedrijf" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Bericht</label>
                  <Textarea name="bericht" value={form.bericht} onChange={handleChange} placeholder="Vertel ons over je project..." rows={5} required />
                </div>
                <Button variant="hero" size="lg" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      Verstuur bericht
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-4">Contactgegevens</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, text: "info@fyxo.online" },
                      { icon: MapPin, text: "Nederland" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3 text-muted-foreground">
                        <Icon className="w-4 h-4 text-accent" />
                        <span className="text-sm">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-4">Veelgestelde vragen</h3>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border border-border rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-4 text-left text-sm font-medium hover:bg-secondary/50 transition-colors"
                        >
                          {faq.q}
                          <ChevronDown
                            className={`w-4 h-4 text-muted-foreground shrink-0 ml-2 transition-transform ${
                              openFaq === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openFaq === i && (
                          <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
