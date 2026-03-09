import AnimatedSection from "@/components/AnimatedSection";
import kjellImg from "@/assets/kjell.png";
import svenImg from "@/assets/sven.png";
import { Linkedin, Mail } from "lucide-react";

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
            webdesign, development en het helpen groeien van bedrijven online.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {team.map((member, i) => (
          <AnimatedSection key={member.name} delay={i * 0.15}>
            <div className="group rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-lg">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {member.name}
                </h2>
                <p className="text-accent text-sm font-medium mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </main>
);

export default OverOns;
