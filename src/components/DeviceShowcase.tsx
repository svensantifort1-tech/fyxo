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
    bg: "bg-[hsl(240,15%,6%)]",
    glow1: "bg-[hsl(270,100%,65%,0.15)]",
    glow2: "bg-[hsl(180,100%,55%,0.1)]",
    accentColor: "hsl(270,100%,65%)",
    frameColor: "hsl(240,10%,18%)",
    screenBg: "hsl(240,15%,6%)",
  },
  {
    name: "AURUM",
    category: "Fine Dining Restaurant",
    desktop: restaurantDesktop,
    tablet: restaurantTablet,
    phone: restaurantPhone,
    bg: "bg-[hsl(0,0%,4%)]",
    glow1: "bg-[hsl(43,72%,55%,0.1)]",
    glow2: "bg-[hsl(43,72%,55%,0.06)]",
    accentColor: "hsl(43,72%,55%)",
    frameColor: "hsl(40,15%,18%)",
    screenBg: "hsl(0,0%,4%)",
  },
  {
    name: "Wanderlust",
    category: "Travel & Explore",
    desktop: explorerDesktop,
    tablet: explorerTablet,
    phone: explorerPhone,
    bg: "bg-[hsl(210,29%,13%)]",
    glow1: "bg-[hsl(199,89%,38%,0.12)]",
    glow2: "bg-[hsl(36,100%,50%,0.1)]",
    accentColor: "hsl(36,100%,50%)",
    frameColor: "hsl(210,20%,20%)",
    screenBg: "hsl(210,29%,13%)",
  },
];

const DeviceShowcase = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const prev = () => setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section className={`section-padding overflow-hidden relative transition-colors duration-700 ${project.bg}`}>
      {/* Ambient glow effects */}
      <div className={`absolute top-10 left-10 w-72 h-72 rounded-full ${project.glow1} blur-3xl pointer-events-none transition-colors duration-700`} />
      <div className={`absolute bottom-10 right-10 w-96 h-96 rounded-full ${project.glow2} blur-3xl pointer-events-none transition-colors duration-700`} />

      <div className="container-narrow text-center relative z-10">
        <p className="text-sm font-medium uppercase tracking-widest mb-4 transition-colors duration-500" style={{ color: project.accentColor }}>
          {t("portfolio.label")}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white">
          {t("portfolio.showcase.title")}
        </h2>
        <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
          {t("portfolio.showcase.desc")}
        </p>

        {/* Project name & navigation */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="min-w-[200px]">
            <p className="text-xl font-heading font-bold text-white">{project.name}</p>
            <p className="text-sm text-white/40">{project.category}</p>
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6" : "bg-white/20"
              }`}
              style={i === activeIndex ? { backgroundColor: project.accentColor } : undefined}
            />
          ))}
        </div>

        {/* Device group */}
        <div className="relative mt-10 mx-auto max-w-5xl flex items-end justify-center" style={{ minHeight: "clamp(280px, 45vw, 520px)" }}>
          {/* MacBook (desktop) */}
          <div className="relative z-10 w-[65%] max-w-[620px]">
            <div className="rounded-t-xl p-[3px] md:p-[5px] transition-colors duration-700" style={{ backgroundColor: project.frameColor }}>
              <div className="rounded-t-lg overflow-hidden aspect-[16/10] transition-colors duration-700" style={{ backgroundColor: project.screenBg }}>
                <img
                  src={project.desktop}
                  alt={`${project.name} desktop`}
                  className="w-full h-full object-cover object-center transition-opacity duration-500"
                />
              </div>
            </div>
            <div className="h-3 md:h-4 rounded-b-md transition-colors duration-700" style={{ background: `linear-gradient(to bottom, ${project.frameColor}, ${project.screenBg})` }} />
            <div className="h-1.5 md:h-2 rounded-b-lg mx-auto w-[110%] -mt-[1px] relative left-[-5%] transition-colors duration-700" style={{ backgroundColor: project.screenBg }} />
          </div>

          {/* iPad (tablet) */}
          <div className="absolute right-[4%] md:right-[8%] bottom-0 z-20 w-[28%] max-w-[240px]">
            <div className="rounded-xl p-[3px] md:p-[4px] transition-colors duration-700" style={{ backgroundColor: project.frameColor }}>
              <div className="rounded-lg overflow-hidden aspect-[3/4] transition-colors duration-700" style={{ backgroundColor: project.screenBg }}>
                <img
                  src={project.tablet}
                  alt={`${project.name} tablet`}
                  className="w-full h-full object-cover object-center transition-opacity duration-500"
                />
              </div>
            </div>
          </div>

          {/* iPhone (phone) */}
          <div className="absolute right-[0%] md:right-[2%] bottom-0 z-30 w-[14%] max-w-[100px]">
            <div className="rounded-xl p-[2px] md:p-[3px] transition-colors duration-700" style={{ backgroundColor: project.frameColor }}>
              <div className="relative rounded-[10px] md:rounded-xl overflow-hidden aspect-[9/19] transition-colors duration-700" style={{ backgroundColor: project.screenBg }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[4%] rounded-b-lg z-10 transition-colors duration-700" style={{ backgroundColor: project.frameColor }} />
                <img
                  src={project.phone}
                  alt={`${project.name} mobiel`}
                  className="w-full h-full object-cover object-center transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
