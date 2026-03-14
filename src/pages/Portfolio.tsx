import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";
import DeviceShowcase from "@/components/DeviceShowcase";

const Portfolio = () => {
  const { t } = useLanguage();

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
        </div>
      </section>

      <AnimatedSection delay={0.15}>
        <DeviceShowcase />
      </AnimatedSection>
    </main>
  );
};

export default Portfolio;
