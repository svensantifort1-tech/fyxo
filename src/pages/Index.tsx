import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Zap, Code, Gauge, ArrowRight } from "lucide-react";

const stats = [
  { value: "100", label: "PageSpeed Score", suffix: "/100" },
  { value: "<1s", label: "Laadtijd", suffix: "" },
  { value: "0", label: "Onnodige plug-ins", suffix: "" },
];

const features = [
  {
    icon: Code,
    title: "Handgeschreven Code",
    description: "Geen templates, geen page builders. Elke regel code wordt met de hand geschreven voor jouw bedrijf.",
  },
  {
    icon: Zap,
    title: "Razendsnelle Laadtijden",
    description: "Schone code betekent bliksemsnelle websites. Beter voor je bezoekers én je Google-ranking.",
  },
  {
    icon: Gauge,
    title: "Maximale PageSpeed",
    description: "Waar WordPress-templates scoren rond de 40-60, scoren onze sites consistent 95-100.",
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 lg:pt-48">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8">
              <Zap className="w-3.5 h-3.5 text-accent" />
              Handgemaakte websites · 100/100 PageSpeed
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] max-w-4xl">
              Websites die{" "}
              <span className="text-gradient">razendsnel</span>{" "}
              laden. Zonder compromis.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Fyxo bouwt handgemaakte websites met schone code. Geen zware templates,
              geen overbodige plug-ins. Alleen pure performance die je concurrentie
              verslaat in Google.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start jouw project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/werkwijze">Hoe werkt het?</Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.4}>
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-heading font-bold">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Speed comparison */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Waarom Fyxo?</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight max-w-3xl">
              Snelheid is geen luxe. Het is de standaard.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Elke seconde vertraging kost je bezoekers en omzet. Onze handgemaakte code 
              laadt tot 10x sneller dan een gemiddelde WordPress-site.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
              Klaar om je concurrentie voorbij te racen?
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Vraag vandaag nog een vrijblijvend gesprek aan en ontdek wat een handgemaakte website voor jouw bedrijf kan doen.
            </p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/contact">
                Neem contact op
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
