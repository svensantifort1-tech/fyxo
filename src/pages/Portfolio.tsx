import AnimatedSection from "@/components/AnimatedSection";
import { Cpu, Leaf, Armchair, HeartPulse, Megaphone, HardHat } from "lucide-react";
import bobBouwer from "@/assets/bob-bouwer.png";

const projects = [
  {
    name: "Lumina Stratos",
    category: "Technologie & Software",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    icon: Cpu,
  },
  {
    name: "GroenAnker",
    category: "Duurzaam Advies & Logistiek",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop",
    icon: Leaf,
  },
  {
    name: "Velvet & Oak",
    category: "Interieurdesign & Meubels",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    icon: Armchair,
  },
  {
    name: "NovaCura Health",
    category: "Gezondheidszorg & Welzijn",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    icon: HeartPulse,
  },
  {
    name: "Apex Pulse",
    category: "Marketing & Creatief Bureau",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    icon: Megaphone,
  },
  {
    name: "Bob's Bouwbedrijf",
    category: "Bouw & Constructie",
    image: bobBouwer,
    icon: HardHat,
  },
];

const Portfolio = () => (
  <main>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
            Succesverhalen van{" "}
            <span className="text-gradient">onze klanten</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Van ZZP'er tot MKB-bedrijf — elk project is handgemaakt en geoptimaliseerd voor maximale performance.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <AnimatedSection key={project.name} delay={i * 0.08}>
                <div className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-background/90 p-2 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  </main>
);

export default Portfolio;
