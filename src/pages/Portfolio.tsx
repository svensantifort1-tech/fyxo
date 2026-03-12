import AnimatedSection from "@/components/AnimatedSection";
import { Scissors, Wrench, Briefcase, Dumbbell, Coffee, Camera } from "lucide-react";

const projects = [
  {
    name: "Massage & Wellness Studio",
    category: "Massagesalon",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
    icon: Scissors,
  },
  {
    name: "Van Dijk Loodgieters",
    category: "Loodgieter",
    image: "https://images.unsplash.com/photo-1581092921461-eab10380ed62?w=600&h=400&fit=crop",
    icon: Wrench,
  },
  {
    name: "Bakker Advies & Consultancy",
    category: "Adviseur / ZZP'er",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    icon: Briefcase,
  },
  {
    name: "FitZone Personal Training",
    category: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    icon: Dumbbell,
  },
  {
    name: "Koffiebar De Molen",
    category: "Horeca",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
    icon: Coffee,
  },
  {
    name: "Studio Lens Fotografie",
    category: "Fotograaf",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop",
    icon: Camera,
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
            Van ZZP'er tot MKB-bedrijf — elk project is op maat gemaakt en geoptimaliseerd voor maximale snelheid.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <AnimatedSection key={project.name} delay={i * 0.08}>
                <div className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30">
                  {/* Device mockup frame */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <div className="absolute inset-2 rounded-lg overflow-hidden border border-border/50 shadow-sm">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105 object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Small tablet mockup */}
                    <div className="absolute bottom-1 right-3 w-16 h-20 rounded-md overflow-hidden border-2 border-border/60 shadow-md bg-background">
                      <img
                        src={project.image}
                        alt={`${project.name} tablet`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Small phone mockup */}
                    <div className="absolute bottom-1 right-1 w-8 h-14 rounded-sm overflow-hidden border-2 border-border/60 shadow-md bg-background">
                      <img
                        src={project.image}
                        alt={`${project.name} mobiel`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-accent" />
                      <h3 className="text-lg font-heading font-semibold">{project.name}</h3>
                    </div>
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
