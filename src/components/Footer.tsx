import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container-narrow section-padding !py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="font-heading text-xl font-bold tracking-tight">
        Fyxo<span className="text-accent">.</span>
      </Link>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Fyxo. Snelle websites met liefde voor code.
      </p>
      <div className="flex gap-6">
        {["Werkwijze", "Portfolio", "Prijzen", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
