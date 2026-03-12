import AnimatedSection from "@/components/AnimatedSection";
import { Users, Paintbrush, RefreshCw, Rocket } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "1. Kennismaking",
    description: "We starten met een vrijblijvend gesprek. Wat zijn jouw wensen? Wie zijn je klanten? We brengen alles in kaart en leggen de tarieven helder uit. Geen kleine lettertjes.",
  },
  {
    icon: Paintbrush,
    title: "2. Eerste ontwerp",
    description: "Op basis van ons gesprek gaan we aan de slag met het design van jouw website. Je ontvangt een eerste versie die je in alle rust kunt bekijken.",
  },
  {
    icon: RefreshCw,
    title: "3. Correctieronde",
    description: "Niet helemaal tevreden? Geen probleem. Je krijgt ruimte voor aanpassingen binnen de afgesproken uren. Samen maken we het perfect.",
  },
  {
    icon: Rocket,
    title: "4. Oplevering",
    description: "Je website gaat live! Wij zetten alles klaar op jouw eigen hosting of regelen dit via ons. Jij hoeft je nergens zorgen over te maken.",
  },
];

const techPoints = [
  { label: "Schone, leesbare code", detail: "Beter vindbaar in Google doordat zoekmachines je site makkelijker kunnen lezen." },
  { label: "Geen onnodige rommel", detail: "Geen ongebruikte code die je site vertraagt. Alleen wat echt nodig is." },
  { label: "Geen dure plug-ins nodig", detail: "WordPress-sites draaien op 20+ plug-ins. Wij bouwen alles in, zonder extra kosten." },
  { label: "Snelle hosting inbegrepen", detail: "Je site draait op snelle servers met caching. Altijd snel, overal." },
  { label: "Werkt perfect op mobiel", detail: "Meer dan 60% van je bezoekers komt via de telefoon. Daar houden we rekening mee." },
  { label: "Gericht op meer klanten", detail: "Elke pagina is zo gebouwd dat bezoekers sneller contact opnemen of kopen." },
];

const Werkwijze = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Werkwijze</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
            Simpel, persoonlijk{" "}
            <span className="text-gradient">en zonder gedoe</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Een website laten maken hoeft niet ingewikkeld te zijn. 
            Wij houden het simpel: jij vertelt wat je nodig hebt, wij bouwen het.
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
            Waarom een op maat gemaakte website wint
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
