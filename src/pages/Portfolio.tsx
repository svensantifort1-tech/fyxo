import AnimatedSection from "@/components/AnimatedSection";
import { Scissors, Wrench, Briefcase, Dumbbell, Coffee, Camera } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    { nameKey: "portfolio.p1.name", catKey: "portfolio.p1.cat", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop", icon: Scissors },
    { nameKey: "portfolio.p2.name", catKey: "portfolio.p2.cat", image: "https://images.unsplash.com/photo-1581092921461-eab10380ed62?w=600&h=400&fit=crop", icon: Wrench },
    { nameKey: "portfolio.p3.name", catKey: "portfolio.p3.cat", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", icon: Briefcase },
    { nameKey: "portfolio.p4.name", catKey: "portfolio.p4.cat", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop", icon: Dumbbell },
    { nameKey: "portfolio.p5.name", catKey: "portfolio.p5.cat", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop", icon: Coffee },
    { nameKey: "portfolio.p6.name", catKey: "portfolio.p6.cat", image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop", icon: Camera },
  ];

  return (
    <main>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t("portfolio.label")}</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
              {t("portfolio.title1")}
              <span className="text-gradient">{t("portfolio.highlight")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t("portfolio.desc")}
            </p>
          </AnimatedSection>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => {
              const Icon = project.icon;
              const name = t(project.nameKey);
              return (
                <AnimatedSection key={project.nameKey} delay={i * 0.08}>
                  <div className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <div className="absolute inset-2 rounded-lg overflow-hidden border border-border/50 shadow-sm">
                        <img src={project.image} alt={name} className="w-full h-full transition-transform duration-500 group-hover:scale-105 object-cover" loading="lazy" />
                      </div>
                      <div className="absolute bottom-1 right-3 w-16 h-20 rounded-md overflow-hidden border-2 border-border/60 shadow-md bg-background">
                        <img src={project.image} alt={`${name} tablet`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="absolute bottom-1 right-1 w-8 h-14 rounded-sm overflow-hidden border-2 border-border/60 shadow-md bg-background">
                        <img src={project.image} alt={`${name} mobile`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-accent" />
                        <h3 className="text-lg font-heading font-semibold">{name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{t(project.catKey)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
