import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Prijzen = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: t("prijzen.standaard"),
      price: t("prijzen.standaard.price"),
      period: t("prijzen.standaard.period"),
      description: t("prijzen.standaard.desc"),
      features: [
        t("prijzen.standaard.f1"), t("prijzen.standaard.f2"), t("prijzen.standaard.f3"),
        t("prijzen.standaard.f4"), t("prijzen.standaard.f5"), t("prijzen.standaard.f6"),
      ],
      highlighted: false,
      cta: t("prijzen.standaard.cta"),
      param: "standaard",
    },
    {
      name: t("prijzen.premium"),
      price: t("prijzen.premium.price"),
      period: t("prijzen.premium.period"),
      description: t("prijzen.premium.desc"),
      badge: t("prijzen.premium.badge"),
      features: [
        t("prijzen.premium.f1"), t("prijzen.premium.f2"), t("prijzen.premium.f3"),
        t("prijzen.premium.f4"), t("prijzen.premium.f5"), t("prijzen.premium.f6"), t("prijzen.premium.f7"),
      ],
      highlighted: true,
      cta: t("prijzen.premium.cta"),
      param: "premium",
    },
  ];

  return (
    <main>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t("prijzen.label")}</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
              {t("prijzen.title1")}
              <span className="text-gradient">{t("prijzen.highlight")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t("prijzen.desc")}
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
                    <Link to={`/checkout?pakket=${pkg.param}`}>
                      {pkg.cta}
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
};

export default Prijzen;
