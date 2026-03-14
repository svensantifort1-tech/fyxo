import AnimatedSection from "@/components/AnimatedSection";
import DeviceShowcase from "@/components/DeviceShowcase";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowDown } from "lucide-react";

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t("portfolio.label")}
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1]">
                {t("portfolio.showcase.title").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-accent">{t("portfolio.showcase.title").split(" ").slice(-1)}</span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {t("portfolio.showcase.desc")}
              </p>

              <div className="mt-10 flex items-center justify-center">
                <a
                  href="#showcase"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors animate-bounce"
                >
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Device showcase */}
      <section id="showcase" className="pb-16 md:pb-24">
        <AnimatedSection delay={0.15}>
          <DeviceShowcase />
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Portfolio;
