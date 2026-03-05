import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";

const Bedankt = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <AnimatedSection>
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>

          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
            Bedankt voor je aanvraag!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ik heb je bericht ontvangen.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <p className="text-sm text-left text-muted-foreground">
              Ik neem <span className="font-semibold text-foreground">binnen 24 uur</span> contact
              met je op om de eerste stappen van je project te bespreken.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-14 rounded-2xl border border-border bg-card p-8">
            <p className="text-sm text-muted-foreground mb-4">
              Terwijl je wacht... bekijk alvast mijn meest recente projecten
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/portfolio" className="inline-flex items-center gap-2">
                Bekijk portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Link
            to="/"
            className="inline-block mt-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Terug naar de homepage
          </Link>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Bedankt;
