import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import plumberSite from "@/assets/portfolio/plumber-site.jpg";
import massageSite from "@/assets/portfolio/massage-site.jpg";
import advisorSite from "@/assets/portfolio/advisor-site.jpg";

const projects = [
  { nameKey: "portfolio.p1.name", catKey: "portfolio.p1.cat", image: plumberSite },
  { nameKey: "portfolio.p2.name", catKey: "portfolio.p2.cat", image: massageSite },
  { nameKey: "portfolio.p3.name", catKey: "portfolio.p3.cat", image: advisorSite },
];

const DeviceShowcase = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((prev) => (prev + dir + projects.length) % projects.length);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning],
  );

  // Swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) navigate(diff < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  const project = projects[current];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-narrow text-center">
        {/* Header */}
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          {t("portfolio.label")}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
          {t("portfolio.showcase.title")}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("portfolio.showcase.desc")}
        </p>

        {/* Device Showcase with navigation */}
        <div
          ref={containerRef}
          className="relative mt-14 mx-auto max-w-5xl select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation arrows */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/80 backdrop-blur border border-border shadow-lg flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/80 backdrop-blur border border-border shadow-lg flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Devices container */}
          <div className="relative flex items-end justify-center px-10 md:px-16" style={{ minHeight: "clamp(280px, 45vw, 520px)" }}>
            {/* MacBook */}
            <div className="relative z-10 w-[70%] max-w-[640px]">
              {/* Screen bezel */}
              <div className="bg-[hsl(var(--foreground)/0.9)] rounded-t-xl p-[3px] md:p-[5px]">
                <div className="rounded-t-lg overflow-hidden bg-muted aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={t(project.nameKey)}
                    className={`w-full h-full object-cover object-top transition-all duration-500 ${isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
                  />
                </div>
              </div>
              {/* Base */}
              <div className="h-3 md:h-4 bg-gradient-to-b from-[hsl(var(--foreground)/0.85)] to-[hsl(var(--foreground)/0.7)] rounded-b-md" />
              <div className="h-1.5 md:h-2 bg-[hsl(var(--foreground)/0.6)] rounded-b-lg mx-auto w-[110%] -mt-[1px] relative left-[-5%]" />
            </div>

            {/* iPad */}
            <div className="absolute right-[4%] md:right-[8%] bottom-0 z-20 w-[28%] max-w-[240px]">
              <div className="bg-[hsl(var(--foreground)/0.9)] rounded-xl p-[3px] md:p-[4px]">
                <div className="rounded-lg overflow-hidden bg-muted aspect-[3/4]">
                  <img
                    src={project.image}
                    alt={t(project.nameKey)}
                    className={`w-full h-full object-cover object-top transition-all duration-500 delay-75 ${isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
                  />
                </div>
              </div>
            </div>

            {/* iPhone */}
            <div className="absolute right-[0%] md:right-[2%] bottom-0 z-30 w-[14%] max-w-[100px]">
              <div className="bg-[hsl(var(--foreground)/0.9)] rounded-xl p-[2px] md:p-[3px]">
                {/* Notch */}
                <div className="relative rounded-[10px] md:rounded-xl overflow-hidden bg-muted aspect-[9/19]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[4%] bg-[hsl(var(--foreground)/0.9)] rounded-b-lg z-10" />
                  <img
                    src={project.image}
                    alt={t(project.nameKey)}
                    className={`w-full h-full object-cover object-top transition-all duration-500 delay-150 ${isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Project name + dots */}
          <div className="mt-8 space-y-4">
            <h3 className={`text-xl md:text-2xl font-heading font-semibold transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
              {t(project.nameKey)}
            </h3>
            <p className={`text-sm text-muted-foreground transition-all duration-500 delay-75 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
              {t(project.catKey)}
            </p>
            {/* Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (!isTransitioning) { setIsTransitioning(true); setCurrent(i); setTimeout(() => setIsTransitioning(false), 500); } }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-accent" : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground/40"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
