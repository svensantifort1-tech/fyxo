import { useLanguage } from "@/i18n/LanguageContext";

import phoneImg from "@/assets/portfolio/device-phone.png";
import tabletImg from "@/assets/portfolio/device-tablet.png";
import desktopImg from "@/assets/portfolio/device-desktop.png";

const DeviceShowcase = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-narrow text-center">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          {t("portfolio.label")}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
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
                <img src={desktopImg} alt="Desktop weergave" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="h-3 md:h-4 bg-gradient-to-b from-[hsl(var(--foreground)/0.85)] to-[hsl(var(--foreground)/0.7)] rounded-b-md" />
            <div className="h-1.5 md:h-2 bg-[hsl(var(--foreground)/0.6)] rounded-b-lg mx-auto w-[110%] -mt-[1px] relative left-[-5%]" />
          </div>

          {/* iPad (tablet) */}
          <div className="absolute right-[4%] md:right-[8%] bottom-0 z-20 w-[28%] max-w-[240px]">
            <div className="bg-[hsl(var(--foreground)/0.9)] rounded-xl p-[3px] md:p-[4px]">
              <div className="rounded-lg overflow-hidden bg-muted aspect-[3/4]">
                <img src={tabletImg} alt="Tablet weergave" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>

          {/* iPhone (phone) */}
          <div className="absolute right-[0%] md:right-[2%] bottom-0 z-30 w-[14%] max-w-[100px]">
            <div className="bg-[hsl(var(--foreground)/0.9)] rounded-xl p-[2px] md:p-[3px]">
              <div className="relative rounded-[10px] md:rounded-xl overflow-hidden bg-muted aspect-[9/19]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[4%] bg-[hsl(var(--foreground)/0.9)] rounded-b-lg z-10" />
                <img src={phoneImg} alt="Mobiele weergave" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
