import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md py-4" : "bg-transparent py-8"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <motion.h1 
            className="text-xl md:text-2xl tracking-[0.2em] uppercase text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Carrément Abstrait
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navigation.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.href}
                className={`link-underline text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 bg-background z-40"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-8 text-center">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl tracking-[0.2em] uppercase ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-foreground/70"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
