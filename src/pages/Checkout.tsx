import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Shield,
  Eye,
  Headphones,
  Check,
  Paintbrush,
  Gauge,
  Server,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";

const packages = {
  standaard: {
    name: "Standaard",
    oneTime: 300,
    monthly: null,
    features: [
      { icon: Paintbrush, label: "Handgemaakt design" },
      { icon: Gauge, label: "Google PageSpeed Optimalisatie" },
    ],
  },
  premium: {
    name: "Premium",
    oneTime: 200,
    monthly: 50,
    features: [
      { icon: Paintbrush, label: "Handgemaakt design" },
      { icon: Gauge, label: "Google PageSpeed Optimalisatie" },
      { icon: Server, label: "Hosting inbegrepen" },
    ],
  },
};

const trustBadges = [
  { icon: Shield, label: "Veilig betalen via iDEAL" },
  { icon: Eye, label: "Geen verborgen kosten" },
  { icon: Headphones, label: "Persoonlijke support" },
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
    q: "Wat als ik niet tevreden ben?",
    a: "Wij werken nauw met je samen tot je 100% tevreden bent. Pas na jouw goedkeuring wordt de site opgeleverd.",
  },
];

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pakketParam = searchParams.get("pakket");
  const pkg =
    pakketParam === "standaard" ? packages.standaard : packages.premium;

  const [form, setForm] = useState({
    bedrijfsnaam: "",
    kvk: "",
    email: "",
    naam: "",
    adres: "",
    postcode: "",
    plaats: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: integrate payment
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
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

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <AnimatedSection>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-center">
            Bevestig je bestelling
          </h1>
          <p className="text-muted-foreground text-center mt-3 max-w-lg mx-auto">
            Je bent bijna klaar. Controleer je gegevens en rond je bestelling
            af.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form – left side */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Bedrijfsgegevens */}
                <div>
                  <h2 className="text-lg font-heading font-semibold mb-4">
                    Bedrijfsgegevens
                  </h2>
                  <div className="space-y-4">
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
                    <div>
                      <Label htmlFor="kvk">
                        KVK-nummer{" "}
                        <span className="text-muted-foreground font-normal">
                          (optioneel)
                        </span>
                      </Label>
                      <Input
                        id="kvk"
                        name="kvk"
                        value={form.kvk}
                        onChange={handleChange}
                        placeholder="12345678"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="naam">Volledige naam *</Label>
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
                  </div>
                </div>

                {/* Factuuradres */}
                <div>
                  <h2 className="text-lg font-heading font-semibold mb-4">
                    Factuuradres
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="adres">Straat + huisnummer *</Label>
                      <Input
                        id="adres"
                        name="adres"
                        value={form.adres}
                        onChange={handleChange}
                        required
                        placeholder="Keizersgracht 100"
                        className="mt-1.5"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="postcode">Postcode *</Label>
                        <Input
                          id="postcode"
                          name="postcode"
                          value={form.postcode}
                          onChange={handleChange}
                          required
                          placeholder="1015 AA"
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="plaats">Plaats *</Label>
                        <Input
                          id="plaats"
                          name="plaats"
                          value={form.plaats}
                          onChange={handleChange}
                          required
                          placeholder="Amsterdam"
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full text-base"
                >
                  Start mijn project
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Door te bestellen ga je akkoord met onze algemene voorwaarden.
                </p>
              </form>
            </AnimatedSection>
          </div>

          {/* Order summary – right side */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-6 sticky top-8">
                <h2 className="text-lg font-heading font-semibold mb-5">
                  Overzicht
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      Pakket {pkg.name}
                    </span>
                    <span className="font-heading font-bold">
                      €{pkg.oneTime}
                    </span>
                  </div>

                  {pkg.monthly && (
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Maandelijks vanaf volgende maand</span>
                      <span className="font-medium text-foreground">
                        €{pkg.monthly}/mnd
                      </span>
                    </div>
                  )}

                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <span className="font-heading font-semibold">
                      Vandaag te betalen
                    </span>
                    <span className="text-xl font-heading font-bold">
                      €{pkg.oneTime}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li
                      key={f.label}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>{f.label}</span>
                    </li>
                  ))}
                </ul>

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-border space-y-3">
                  {trustBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2.5 text-xs text-muted-foreground"
                    >
                      <badge.icon className="w-4 h-4 shrink-0" />
                      <span>{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Micro FAQ */}
        <AnimatedSection delay={0.3}>
          <div className="mt-20 max-w-2xl mx-auto">
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
