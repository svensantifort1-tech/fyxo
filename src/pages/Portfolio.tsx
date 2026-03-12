import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import realEstateSite from "@/assets/portfolio/real-estate-site.jpg";
import restaurantSite from "@/assets/portfolio/restaurant-site.jpg";
import fitnessSite from "@/assets/portfolio/fitness-site.jpg";
import photographySite from "@/assets/portfolio/photography-site.jpg";
import barbershopSite from "@/assets/portfolio/barbershop-site.jpg";
import accountingSite from "@/assets/portfolio/accounting-site.jpg";

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    { nameKey: "portfolio.p1.name", catKey: "portfolio.p1.cat", image: realEstateSite },
    { nameKey: "portfolio.p2.name", catKey: "portfolio.p2.cat", image: restaurantSite },
    { nameKey: "portfolio.p3.name", catKey: "portfolio.p3.cat", image: fitnessSite },
    { nameKey: "portfolio.p4.name", catKey: "portfolio.p4.cat", image: photographySite },
    { nameKey: "portfolio.p5.name", catKey: "portfolio.p5.cat", image: barbershopSite },
    { nameKey: "portfolio.p6.name", catKey: "portfolio.p6.cat", image: accountingSite },
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
              const name = t(project.nameKey);
              return (
                <AnimatedSection key={project.nameKey} delay={i * 0.08}>
                  <button
                    onClick={() => setSelectedProject(i)}
                    className="group w-full text-left rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-heading font-semibold">{name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{t(project.catKey)}</p>
                    </div>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden">
          {selectedProject !== null && (
            <div>
              <div className="max-h-[80vh] overflow-y-auto">
                <img
                  src={projects[selectedProject].image}
                  alt={t(projects[selectedProject].nameKey)}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="text-xl font-heading font-semibold">{t(projects[selectedProject].nameKey)}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t(projects[selectedProject].catKey)}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Portfolio;
