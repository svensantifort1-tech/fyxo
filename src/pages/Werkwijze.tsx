import AnimatedSection from "@/components/AnimatedSection";
import { Users, Paintbrush, RefreshCw, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Werkwijze = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Users, title: t("werkwijze.step1.title"), description: t("werkwijze.step1.desc") },
    { icon: Paintbrush, title: t("werkwijze.step2.title"), description: t("werkwijze.step2.desc") },
    { icon: RefreshCw, title: t("werkwijze.step3.title"), description: t("werkwijze.step3.desc") },
    { icon: Rocket, title: t("werkwijze.step4.title"), description: t("werkwijze.step4.desc") },
  ];

  const techPoints = [
    { label: t("werkwijze.tech1.label"), detail: t("werkwijze.tech1.detail") },
    { label: t("werkwijze.tech2.label"), detail: t("werkwijze.tech2.detail") },
    { label: t("werkwijze.tech3.label"), detail: t("werkwijze.tech3.detail") },
    { label: t("werkwijze.tech4.label"), detail: t("werkwijze.tech4.detail") },
    { label: t("werkwijze.tech5.label"), detail: t("werkwijze.tech5.detail") },
    { label: t("werkwijze.tech6.label"), detail: t("werkwijze.tech6.detail") },
  ];

  return (
    <main>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t("werkwijze.label")}</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
              {t("werkwijze.title1")}
              <span className="text-gradient">{t("werkwijze.highlight")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t("werkwijze.desc")}
            </p>
          </AnimatedSection>

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

      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              {t("werkwijze.tech.title")}
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
};

export default Werkwijze;
