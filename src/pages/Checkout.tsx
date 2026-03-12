import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Check, Paintbrush, Gauge, Server, ChevronDown, ArrowLeft,
  Clock, MessageCircle, Users, Mail, Globe, Loader2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

const Checkout = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pakketParam = searchParams.get("pakket");

  const packages = {
    standaard: {
      name: t("checkout.pkg.standaard"),
      price: t("checkout.pkg.standaard.price"),
      description: t("checkout.pkg.standaard.desc"),
      features: [
        { icon: Paintbrush, label: t("checkout.feat.design") },
        { icon: Gauge, label: t("checkout.feat.pagespeed") },
      ],
    },
    premium: {
      name: t("checkout.pkg.premium"),
      price: t("checkout.pkg.premium.price"),
      description: t("checkout.pkg.premium.desc"),
      features: [
        { icon: Paintbrush, label: t("checkout.feat.design") },
        { icon: Gauge, label: t("checkout.feat.pagespeed") },
        { icon: Server, label: t("checkout.feat.hosting") },
      ],
    },
  };

  const pkg = pakketParam === "standaard" ? packages.standaard : packages.premium;

  const contactOptions = [
    { value: "whatsapp", label: t("checkout.contact.whatsapp"), icon: MessageCircle },
    { value: "email", label: t("checkout.contact.email"), icon: Mail },
  ];

  const faqs = [
    { q: t("checkout.faq1.q"), a: t("checkout.faq1.a") },
    { q: t("checkout.faq2.q"), a: t("checkout.faq2.a") },
    { q: t("checkout.faq3.q"), a: t("checkout.faq3.a") },
  ];

  const [form, setForm] = useState({
    naam: "", bedrijfsnaam: "", email: "", website: "", doel: "", contact: "whatsapp",
  });
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          naam: form.naam, email: form.email, bedrijfsnaam: form.bedrijfsnaam,
          bericht: form.doel, bron: "checkout", pakket: pkg.name,
          website: form.website, contact_voorkeur: form.contact,
        },
      });
      if (error) throw error;
      navigate("/bedankt");
    } catch (err) {
      console.error("Submit error:", err);
      toast.error(t("checkout.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate("/prijzen")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t("checkout.back")}
          </button>
          <span className="font-heading font-bold text-lg tracking-tight">Fyxo</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <AnimatedSection>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4" />
              {t("checkout.chosen")} {pkg.name}
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              {t("checkout.title1")}
              <span className="text-gradient">{t("checkout.highlight")}</span>
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-14 rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-semibold">{t("checkout.approach.title")}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{t("checkout.approach.desc")}</p>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-muted/50 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{t("checkout.pkg.label")} {pkg.name}</span>
                <span className="font-heading font-semibold">{pkg.price}</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                {pkg.features.map((f) => (
                  <span key={f.label} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <f.icon className="w-3.5 h-3.5 text-accent" />
                    {f.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12">
            <h2 className="text-2xl font-heading font-bold tracking-tight mb-2">{t("checkout.form.title")}</h2>
            <p className="text-muted-foreground mb-8">{t("checkout.form.desc")}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="naam">{t("checkout.naam")}</Label>
                  <Input id="naam" name="naam" value={form.naam} onChange={handleChange} required placeholder={t("checkout.naam.placeholder")} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="bedrijfsnaam">{t("checkout.bedrijf")}</Label>
                  <Input id="bedrijfsnaam" name="bedrijfsnaam" value={form.bedrijfsnaam} onChange={handleChange} required placeholder={t("checkout.bedrijf.placeholder")} className="mt-1.5" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="email">{t("checkout.email")}</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder={t("checkout.email.placeholder")} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="website">{t("checkout.website")} <span className="text-muted-foreground font-normal">{t("checkout.website.optional")}</span></Label>
                  <Input id="website" name="website" value={form.website} onChange={handleChange} placeholder={t("checkout.website.placeholder")} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="doel">{t("checkout.doel")}</Label>
                <Textarea id="doel" name="doel" value={form.doel} onChange={handleChange} required placeholder={t("checkout.doel.placeholder")} className="mt-1.5 min-h-[100px]" />
              </div>
              <div>
                <Label>{t("checkout.contact.label")}</Label>
                <div className="mt-2 flex flex-wrap gap-3">
                  {contactOptions.map((opt) => (
                    <button key={opt.value} type="button" onClick={() => setForm({ ...form, contact: opt.value })}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        form.contact === opt.value ? "border-accent bg-accent/10 text-accent" : "border-border bg-card text-muted-foreground hover:border-foreground/20"
                      }`}
                    >
                      <opt.icon className="w-4 h-4" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full text-base mt-4" disabled={loading}>
                {loading ? (<><Loader2 className="w-4 h-4 animate-spin" />{t("checkout.submitting")}</>) : t("checkout.submit")}
              </Button>
            </form>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-heading font-semibold">{t("checkout.trust.title")}</p>
                <p className="text-xs text-muted-foreground">{t("checkout.trust.desc")}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-lg font-heading font-semibold text-center mb-6">{t("checkout.faq.title")}</h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left rounded-xl border border-border p-4 transition-colors hover:bg-card">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </div>
                  {openFaq === i && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Checkout;
