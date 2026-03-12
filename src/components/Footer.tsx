import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const footerLinks = [
  { key: "nav.werkwijze", to: "/werkwijze" },
  { key: "nav.portfolio", to: "/portfolio" },
  { key: "nav.prijzen", to: "/prijzen" },
  { key: "nav.contact", to: "/contact" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-narrow section-padding !py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          Fyxo<span className="text-accent">.</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fyxo. {t("footer.tagline")}
        </p>
        <div className="flex gap-6">
          {footerLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
