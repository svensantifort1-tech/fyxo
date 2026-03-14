import AnimatedSection from "@/components/AnimatedSection";
import DeviceShowcase from "@/components/DeviceShowcase";

const Portfolio = () => {
  return (
    <main>
      <section className="pt-32 md:pt-40">
        <AnimatedSection delay={0.15}>
          <DeviceShowcase />
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Portfolio;
