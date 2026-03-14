import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import fyxoLogo from "@/assets/fyxo-logo.png";

const navLinks = [
  { to: "/", key: "nav.home" },
  { to: "/werkwijze", key: "nav.werkwijze" },
  { to: "/portfolio", key: "nav.portfolio" },
  { to: "/prijzen", key: "nav.prijzen" },
  { to: "/over-ons", key: "nav.overons" },
  { to: "/contact", key: "nav.contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center">
          <img src={fyxoLogo} alt="Fyxo" className="h-28" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors border border-border rounded-full px-3 py-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            {language === "nl" ? "EN" : "NL"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground border border-border rounded-full px-2.5 py-1"
          >
            <Globe className="w-3 h-3" />
            {language === "nl" ? "EN" : "NL"}
          </button>
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.to ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
