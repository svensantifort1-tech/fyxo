import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, Star, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Standaard",
    price: "€300",
    period: "eenmalig",
    description: "Volledige eigendom van je website. Jij beheert alles zelf.",
    features: [
      "Handgemaakte website",
      "Responsive design",
      "SEO-geoptimaliseerd",
      "PageSpeed 95+",
      "Broncode volledig van jou",
      "Eenmalige oplevering",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "€200",
    period: "eenmalig + €50/maand",
    description: "Volledig ontzorgd. Wij regelen hosting, updates en onderhoud zodat jouw site altijd razendsnel blijft.",
    badge: "Meest gekozen",
    features: [
      "Alles uit Standaard",
      "Premium hosting inbegrepen",
      "Maandelijks onderhoud & updates",
      "Snelheidsmonitoring",
      "Prioriteit support",
      "SSL-certificaat inbegrepen",
      "Dagelijkse backups",
    ],
    highlighted: true,
  },
];

const Prijzen = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Prijzen</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
            Transparante prijzen.{" "}
            <span className="text-gradient">Geen verrassingen.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Kies het pakket dat bij jou past. Beide pakketten leveren een razendsnelle, 
            handgemaakte website op.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl border p-8 h-full flex flex-col transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-accent bg-accent/[0.03] shadow-[var(--card-shadow-hover)]"
                    : "border-border bg-card hover:shadow-[var(--card-shadow)]"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    <Star className="w-3 h-3" />
                    {pkg.badge}
                  </div>
                )}

                <h3 className="text-2xl font-heading font-bold">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-heading font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm">{pkg.period}</span>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{pkg.description}</p>

                <ul className="mt-8 space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.highlighted ? "hero" : "heroOutline"}
                  size="lg"
                  className="mt-8 w-full"
                  asChild
                >
                  <Link to="/contact">
                    Kies {pkg.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Prijzen;
