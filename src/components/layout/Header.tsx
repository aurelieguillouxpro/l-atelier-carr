import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoMcc from "@/assets/logos/logo-mcc.png";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Galerie", href: "/galerie" },
  { name: "Expositions", href: "/expositions" },
  { name: "Presse", href: "/presse" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="container-narrow flex items-center justify-between py-6">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <img 
            src={logoMcc} 
            alt="Logo MCC" 
            className="h-10 md:h-12 w-auto"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
              Carrément Abstrait
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Marie-Christine Chaillou
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`link-underline text-sm tracking-wide transition-colors ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <ul className="container-narrow py-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-lg ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
