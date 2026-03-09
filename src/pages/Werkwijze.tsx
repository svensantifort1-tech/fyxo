import AnimatedSection from "@/components/AnimatedSection";
import { Code2, Layers, Rocket, Shield } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "1. Strategie & Ontwerp",
    description: "We beginnen met een kennismaking. Samen bespreken we jouw doelen, doelgroep en merkidentiteit. Daarna ontwerpen we een op maat gemaakt design.",
  },
  {
    icon: Code2,
    title: "2. Handmatige Ontwikkeling",
    description: "Geen WordPress, geen Wix, geen drag-and-drop. We schrijven elke regel code met de hand. Het resultaat: een website met een Google PageSpeed score van 90/100 of hoger died score van 90/100 of hoger died score van 90/100 of hoger die perfect werkt op elk apparaat.",
  },
  {
    icon: Rocket,
    title: "3. Optimalisatie & Lancering",
    description: "Voordat je site live gaat, optimaliseren we alles: afbeeGoogle PageSpeed score van 90/100 of hoger en laadGoogle PageSpeed score van 90/100 of hogerbij een PageSpeed score van 95+.",
  },
  {
    icon: Shield,
    title: "4. Onderhoud & Groei",
    description: "Na de lancering monitoren wde Google PageSpeed score boven de 90/100n we updates uit en zorgen we dat alles razendsnel blijft. Jij focust op je bedrijf, wij op je website.",
  },
];

const techPoints = [
  { label: "Schone, semantische HTML", detail: "Beter leesbaar voor Google's crawlers." },
  { label: "Geoptimaliseerde CSS & JavaScript", detail: "Geen ongebruikte code die je site vertraagt." },
  { label: "Nul onnodige plug-ins", detail: "WordPress-sites laden gemiddeld 20+ plug-ins. Wij: nul." },
  { label: "Server-side optimalisatie", detail: "Snelle hosting, caching en CDN inbegrepen." },
  { label: "Mobile-first design", detail: "60%+ van je bezoekers komt via mobiel. Daar bouwen we voor." },
  { label: "Conversie-gericht", detail: "Elke pagina is ontworpen om bezoekers om te zetten in klanten." },
];

const Werkwijze = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Werkwijze</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
            Technische superioriteit,{" "}
            <span className="text-gradient">zonder complexiteit</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Onze werkwijze draait om één ding: een website bouwen met een Google PageSpeed score van 90/100 of hoger. 
            Geen shortcuts, geen compromissen.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Tech advantages */}
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Waarom handgemaakte code wint
          </h2>
        </AnimatedSection>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techPoints.map((point, i) => (
            <AnimatedSection key={point.label} delay={i * 0.05}>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h4 className="font-heading font-semibold mb-2">{point.label}</h4>
                <p className="text-sm text-muted-foreground">{point.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Werkwijze;
