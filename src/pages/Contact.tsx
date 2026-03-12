import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Send, ChevronDown, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    email: "",
    bedrijfsnaam: "",
    bericht: "",
  });

  const faqs = [
    { q: t("contact.faq1.q"), a: t("contact.faq1.a") },
    { q: t("contact.faq2.q"), a: t("contact.faq2.a") },
    { q: t("contact.faq3.q"), a: t("contact.faq3.a") },
    { q: t("contact.faq4.q"), a: t("contact.faq4.a") },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          naam: form.naam,
          email: form.email,
          bedrijfsnaam: form.bedrijfsnaam,
          bericht: form.bericht,
          bron: "contact",
        },
      });

      if (error) throw error;

      toast.success(t("contact.success"));
      setForm({ naam: "", email: "", bedrijfsnaam: "", bericht: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast.error(t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t("contact.label")}</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight max-w-3xl">
              {t("contact.title1")}
              <span className="text-gradient">{t("contact.highlight")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t("contact.desc")}
            </p>
          </AnimatedSection>

          <div className="mt-16 grid lg:grid-cols-5 gap-16">
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("contact.naam")}</label>
                    <Input name="naam" value={form.naam} onChange={handleChange} placeholder={t("contact.naam.placeholder")} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("contact.email")}</label>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t("contact.email.placeholder")} required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">{t("contact.bedrijf")}</label>
                  <Input name="bedrijfsnaam" value={form.bedrijfsnaam} onChange={handleChange} placeholder={t("contact.bedrijf.placeholder")} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">{t("contact.bericht")}</label>
                  <Textarea name="bericht" value={form.bericht} onChange={handleChange} placeholder={t("contact.bericht.placeholder")} rows={5} required />
                </div>
                <Button variant="hero" size="lg" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("contact.submitting")}
                    </>
                  ) : (
                    <>
                      {t("contact.submit")}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-4">{t("contact.info.title")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-4 h-4 text-accent" />
                      <span className="text-sm">info@fyxo.online</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span className="text-sm">{t("contact.location")}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-lg mb-4">{t("contact.faq.title")}</h3>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border border-border rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-4 text-left text-sm font-medium hover:bg-secondary/50 transition-colors"
                        >
                          {faq.q}
                          <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 ml-2 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                        </button>
                        {openFaq === i && (
                          <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
