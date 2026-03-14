import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Code, Gauge, ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("index.stat1.value"), label: t("index.stat1.label"), suffix: t("index.stat1.suffix") },
    { value: t("index.stat2.value"), label: t("index.stat2.label"), suffix: "" },
    { value: t("index.stat3.value"), label: t("index.stat3.label"), suffix: "" },
  ];

  const features = [
    { icon: Code, title: t("index.feat1.title"), description: t("index.feat1.desc") },
    { icon: Zap, title: t("index.feat2.title"), description: t("index.feat2.desc") },
    { icon: Gauge, title: t("index.feat3.title"), description: t("index.feat3.desc") },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative px-6 pt-36 pb-28 md:px-12 md:pt-44 md:pb-32 lg:px-24 lg:pt-52 lg:pb-36 overflow-hidden">
        {/* Blurred lightning background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="lightning-blur">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <linearGradient id="lightning-grad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="hsl(200 80% 55%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M1050 30 L920 180 L980 200 L820 380 L890 400 L700 580 L780 600 L580 780 L620 720 L560 740 L680 540 L610 560 L800 340 L730 360 L940 160 L870 180 Z"
            fill="none"
            stroke="url(#lightning-grad)"
            strokeWidth="3"
            filter="url(#lightning-blur)"
            opacity="0.6"
          />
          <path
            d="M1000 60 L880 200 L930 215 L790 370 L850 385 L680 560 L740 575 L560 760"
            fill="none"
            stroke="url(#lightning-grad)"
            strokeWidth="1.5"
            filter="url(#lightning-blur)"
            opacity="0.35"
          />
        </svg>
        <div className="container-narrow relative">
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] max-w-4xl">
              {t("index.hero.title1")}
              <span className="text-gradient">{t("index.hero.highlight")}</span>
              {t("index.hero.title2")}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("index.hero.desc")}
            </p>
            <p className="mt-4 text-lg md:text-xl font-heading font-semibold text-foreground">
              {t("index.hero.price")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  {t("index.hero.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/werkwijze">{t("index.hero.cta2")}</Link>
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
                  <div className="text-sm text-muted-foreground mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-28 md:px-12 md:py-32 lg:px-24 lg:py-36 border-t border-border/50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t("index.why")}</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight max-w-3xl">
              {t("index.speed.title")}
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl leading-relaxed">
              {t("index.speed.desc")}
            </p>
          </AnimatedSection>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
      <section className="px-6 py-28 md:px-12 md:py-32 lg:px-24 lg:py-36 bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
              {t("index.cta.title")}
            </h2>
            <p className="mt-5 text-primary-foreground/70 text-lg max-w-xl mx-auto leading-relaxed">
              {t("index.cta.desc")}
            </p>
            <Button variant="hero" size="lg" className="mt-10" asChild>
              <Link to="/contact">
                {t("index.hero.cta")}
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
