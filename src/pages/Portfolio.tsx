import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Veldhoven Elektra",
    category: "ZZP · Elektricien",
    result: "PageSpeed: 98 · +120% meer offerteaanvragen",
    color: "from-accent/20 to-accent/5",
  },
  {
    name: "Studio Bloom",
    category: "MKB · Bloemisterij",
    result: "PageSpeed: 100 · Online bestellingen +85%",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    name: "De Bouwvakker",
    category: "ZZP · Aannemer",
    result: "PageSpeed: 97 · #1 in lokale Google-resultaten",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    name: "FitZone Academy",
    category: "MKB · Sportschool",
    result: "PageSpeed: 99 · Ledengroei +60% in 3 maanden",
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    name: "Kapper Koen",
    category: "ZZP · Kapsalon",
    result: "PageSpeed: 100 · Online boekingen verdrievoudigd",
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    name: "TechFlow Solutions",
    category: "MKB · IT Services",
    result: "PageSpeed: 96 · 2x meer leads via website",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
];

const Portfolio = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
            Succesverhalen van{" "}
            <span className="text-gradient">onze klanten</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Van ZZP'er tot MKB-bedrijf — elk project is handgemaakt en geoptimaliseerd voor maximale performance.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 0.08}>
              <div className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="font-heading text-2xl font-bold text-foreground/80">{project.name.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-heading font-semibold">{project.name}</h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.category}</p>
                  <p className="text-sm font-medium text-accent">{project.result}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Portfolio;
