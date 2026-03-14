import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

import nexusDesktop from "@/assets/portfolio/device-desktop.png";
import nexusTablet from "@/assets/portfolio/device-tablet.png";
import nexusPhone from "@/assets/portfolio/device-phone.png";

import restaurantDesktop from "@/assets/portfolio/restaurant-desktop.png";
import restaurantTablet from "@/assets/portfolio/restaurant-tablet.png";
import restaurantPhone from "@/assets/portfolio/restaurant-phone.png";

import explorerDesktop from "@/assets/portfolio/explorer-desktop.png";
import explorerTablet from "@/assets/portfolio/explorer-tablet.png";
import explorerPhone from "@/assets/portfolio/explorer-phone.png";

const projects = [
  {
    name: "NEXUS",
    category: "Marketing Agency",
    desktop: nexusDesktop,
    tablet: nexusTablet,
    phone: nexusPhone,
  },
  {
    name: "AURUM",
    category: "Fine Dining Restaurant",
    desktop: restaurantDesktop,
    tablet: restaurantTablet,
    phone: restaurantPhone,
  },
  {
    name: "Wanderlust",
    category: "Travel & Explore",
    desktop: explorerDesktop,
    tablet: explorerTablet,
    phone: explorerPhone,
  },
];

const DeviceShowcase = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const prev = () => setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section className="section-padding overflow-hidden relative bg-background">
      <div className="container-narrow text-center relative z-10">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          {t("portfolio.label")}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
          {t("portfolio.showcase.title")}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("portfolio.showcase.desc")}
        </p>

        {/* Device group */}
        <div className="relative mt-14 mx-auto max-w-5xl flex items-end justify-center" style={{ minHeight: "clamp(280px, 45vw, 520px)" }}>
          {/* MacBook (desktop) */}
          <div className="relative z-10 w-[65%] max-w-[620px]">
            <div className="bg-[hsl(var(--foreground)/0.9)] rounded-t-xl p-[3px] md:p-[5px]">
              <div className="rounded-t-lg overflow-hidden bg-muted aspect-[16/10]">
                <img
                  src={project.desktop}
                  alt={`${project.name} desktop`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="h-3 md:h-4 bg-gradient-to-b from-[hsl(var(--foreground)/0.85)] to-[hsl(var(--foreground)/0.7)] rounded-b-md" />
            <div className="h-1.5 md:h-2 bg-[hsl(var(--foreground)/0.6)] rounded-b-lg mx-auto w-[110%] -mt-[1px] relative left-[-5%]" />
          </div>

          {/* iPad (tablet) */}
          <div className="absolute right-[4%] md:right-[8%] bottom-0 z-20 w-[28%] max-w-[240px]">
            <div className="bg-[hsl(var(--foreground)/0.9)] rounded-xl p-[3px] md:p-[4px]">
              <div className="rounded-lg overflow-hidden bg-muted aspect-[3/4]">
                <img
                  src={project.tablet}
                  alt={`${project.name} tablet`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* iPhone (phone) */}
          <div className="absolute right-[0%] md:right-[2%] bottom-0 z-30 w-[14%] max-w-[100px]">
            <div className="bg-[hsl(var(--foreground)/0.9)] rounded-xl p-[2px] md:p-[3px]">
              <div className="relative rounded-[10px] md:rounded-xl overflow-hidden bg-muted aspect-[9/19]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[4%] bg-[hsl(var(--foreground)/0.9)] rounded-b-lg z-10" />
                <img
                  src={project.phone}
                  alt={`${project.name} mobiel`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project name & navigation below devices */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="min-w-[200px]">
            <p className="text-xl font-heading font-bold text-foreground">{project.name}</p>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
