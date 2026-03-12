import AnimatedSection from "@/components/AnimatedSection";
import kjellImg from "@/assets/kjell.png";
import svenImg from "@/assets/sven.png";
import { Mail, Users } from "lucide-react";

const team = [
  {
    name: "Kjell",
    role: "Co-founder & Developer",
    image: kjellImg,
    email: "kjell@fyxo.online",
    bio: "Kjell is gepassioneerd door technologie en design. Hij zorgt ervoor dat elk project niet alleen mooi oogt, maar ook technisch sterk in elkaar zit.",
  },
  {
    name: "Sven",
    role: "Co-founder & Designer",
    image: svenImg,
    email: "sven@fyxo.online",
    bio: "Sven heeft een scherp oog voor detail en gebruikerservaring. Hij vertaalt ideeën naar visueel sterke en intuïtieve websites.",
  },
];

const OverOns = () => (
  <main className="min-h-screen pt-24 pb-20">
    <div className="container-narrow px-6">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent tracking-wider uppercase">
            Over ons
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">
            De makers achter Fyxo<span className="text-accent">.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Wij zijn Kjell en Sven — twee jonge ondernemers met een passie voor
            webdesign en development. Samen met ons netwerk van designers en developers
            helpen we bedrijven groeien online.
          </p>
        </div>
      </AnimatedSection>

      {/* Network callout */}
      <AnimatedSection>
        <div className="max-w-2xl mx-auto mb-14 rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Ons netwerk</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Naast onze eigen expertise werken we samen met een breed netwerk van designers, 
              developers en specialisten. Zo leveren we altijd het beste resultaat, ongeacht het project.
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
              <h2 className="font-heading text-xl font-bold text-foreground">
                {member.name}
              </h2>
              <p className="text-accent text-sm font-medium mt-1 mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3 max-w-xs mx-auto">
                {member.bio}
              </p>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
              >
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

export default OverOns;
