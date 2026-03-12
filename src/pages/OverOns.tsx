import AnimatedSection from "@/components/AnimatedSection";
import kjellImg from "@/assets/kjell.png";
import svenImg from "@/assets/sven.png";
import { Mail, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const OverOns = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: "Kjell",
      role: "Co-founder & Developer",
      image: kjellImg,
      email: "kjell@fyxo.online",
      bio: t("overons.kjell.bio"),
    },
    {
      name: "Sven",
      role: "Co-founder & Designer",
      image: svenImg,
      email: "sven@fyxo.online",
      bio: t("overons.sven.bio"),
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-narrow px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent tracking-wider uppercase">
              {t("overons.label")}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">
              {t("overons.title")}<span className="text-accent">.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("overons.desc")}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-2xl mx-auto mb-14 rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{t("overons.network.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("overons.network.desc")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-border mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.name === "Kjell" ? "object-[25%_center]" : ""}`}
                  />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">{member.name}</h2>
                <p className="text-accent text-sm font-medium mt-1 mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 max-w-xs mx-auto">{member.bio}</p>
                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OverOns;
