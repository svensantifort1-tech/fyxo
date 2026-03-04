import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Check,
  Paintbrush,
  Gauge,
  Server,
  ChevronDown,
  ArrowLeft,
  Clock,
  MessageCircle,
  Users,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const packages = {
  standaard: {
    name: "Standaard",
    price: "€300 eenmalig",
    description: "Volledige eigendom van je website",
    features: [
      { icon: Paintbrush, label: "Handgemaakt design" },
      { icon: Gauge, label: "Google PageSpeed 90+ score" },
    ],
  },
  premium: {
    name: "Premium",
    price: "€200 eenmalig + €50/maand",
    description: "Volledig ontzorgd met hosting & onderhoud",
    features: [
      { icon: Paintbrush, label: "Handgemaakt design" },
      { icon: Gauge, label: "Google PageSpeed 90+ score" },
      { icon: Server, label: "Hosting & onderhoud inbegrepen" },
    ],
  },
};

const contactOptions = [
  { value: "bellen", label: "Bellen", icon: Phone },
  { value: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { value: "email", label: "E-mail", icon: Mail },
];

const faqs = [
  {
    q: "Hoe snel is mijn website klaar?",
    a: "Gemiddeld leveren wij jouw website binnen 5–10 werkdagen op, afhankelijk van de complexiteit en jouw feedback.",
  },
  {
    q: "Kan ik later nog van pakket wisselen?",
    a: "Ja, je kunt altijd upgraden naar het Premium pakket. Neem contact op en wij regelen de overstap.",
  },
  {
    q: "Wanneer ontvang ik de factuur?",
    a: "Pas na ons kennismakingsgesprek sturen we de factuur. Je betaalt dus nooit voordat we jouw wensen hebben besproken.",
  },
];

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pakketParam = searchParams.get("pakket");
  const pkg = pakketParam === "standaard" ? packages.standaard : packages.premium;

  const [form, setForm] = useState({
    naam: "",
    bedrijfsnaam: "",
    email: "",
    website: "",
    doel: "",
    contact: "bellen",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: send to backend
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/prijzen")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar pakketten
          </button>
          <span className="font-heading font-bold text-lg tracking-tight">
            Fyxo
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Package confirmation */}
        <AnimatedSection>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4" />
              Je hebt gekozen voor: {pkg.name}
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Klaar voor een website met een{" "}
              <span className="text-gradient">90+ PageSpeed score?</span>
            </h1>
          </div>
        </AnimatedSection>

        {/* Personal approach section */}
        <AnimatedSection delay={0.1}>
          <div className="mt-14 rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-semibold">
                  Onze persoonlijke aanpak
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Omdat wij elke website met de hand coderen, willen we eerst jouw
                  visie begrijpen. Geen standaard templates, maar een site die
                  precies doet wat jij nodig hebt. Na ons gesprek sturen we de
                  factuur en gaan we direct aan de slag.
                </p>
              </div>
            </div>

            {/* Package summary */}
            <div className="mt-6 p-4 rounded-xl bg-muted/50 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Pakket {pkg.name}</span>
                <span className="font-heading font-semibold">{pkg.price}</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                {pkg.features.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <f.icon className="w-3.5 h-3.5 text-accent" />
                    {f.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Request form */}
        <AnimatedSection delay={0.15}>
          <div className="mt-12">
            <h2 className="text-2xl font-heading font-bold tracking-tight mb-2">
              Vertel ons over jouw project
            </h2>
            <p className="text-muted-foreground mb-8">
              Vul onderstaand formulier in en wij nemen binnen 24 uur contact met
              je op.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="naam">Naam *</Label>
                  <Input
                    id="naam"
                    name="naam"
                    value={form.naam}
                    onChange={handleChange}
                    required
                    placeholder="Jan de Vries"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="bedrijfsnaam">Bedrijfsnaam *</Label>
                  <Input
                    id="bedrijfsnaam"
                    name="bedrijfsnaam"
                    value={form.bedrijfsnaam}
                    onChange={handleChange}
                    required
                    placeholder="Jouw Bedrijf B.V."
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jan@bedrijf.nl"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="website">
                    Huidige website{" "}
                    <span className="text-muted-foreground font-normal">
                      (optioneel)
                    </span>
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="www.jouwsite.nl"
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="doel">
                  Wat is het belangrijkste doel van je nieuwe site? *
                </Label>
                <Textarea
                  id="doel"
                  name="doel"
                  value={form.doel}
                  onChange={handleChange}
                  required
                  placeholder="Bijv. meer klanten aantrekken, professioneler overkomen, online boekingen mogelijk maken..."
                  className="mt-1.5 min-h-[100px]"
                />
              </div>

              {/* Contact preference */}
              <div>
                <Label>Voorkeur voor contact</Label>
                <div className="mt-2 flex flex-wrap gap-3">
                  {contactOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, contact: opt.value })
                      }
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        form.contact === opt.value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border bg-card text-muted-foreground hover:border-foreground/20"
                      }`}
                    >
                      <opt.icon className="w-4 h-4" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-base mt-4"
              >
                Vraag gratis adviesgesprek aan
              </Button>
            </form>
          </div>
        </AnimatedSection>

        {/* Social proof / trust */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-heading font-semibold">
                  Binnen 24 uur een reactie
                </p>
                <p className="text-xs text-muted-foreground">
                  Geen tussenpersonen, direct contact met de developers
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Micro FAQ */}
        <AnimatedSection delay={0.25}>
          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-lg font-heading font-semibold text-center mb-6">
              Veelgestelde vragen
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left rounded-xl border border-border p-4 transition-colors hover:bg-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFaq === i && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Checkout;
