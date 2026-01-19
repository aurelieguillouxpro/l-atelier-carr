import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
        {/* Logo with animation */}
        <Link to="/" className="group flex items-center gap-2 sm:gap-3">
          <motion.img 
            src={logoMcc} 
            alt="Logo MCC" 
            className="h-8 sm:h-10 lg:h-18 w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-sm sm:text-base lg:text-2xl font-semibold tracking-wide whitespace-nowrap">
              CARRéMENT ABSTRAIT
            </h1>
            <p className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.35em] uppercase whitespace-nowrap">
              Marie-Christine Chaillou
            </p>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navigation.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={item.href}
                className={`link-underline text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 relative z-[70]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative w-6 h-6">
            <motion.span
              className={`absolute left-0 w-6 h-0.5 rounded-full ${mobileMenuOpen ? 'bg-background' : 'bg-foreground'}`}
              animate={{
                top: mobileMenuOpen ? "50%" : "25%",
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? "-50%" : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 rounded-full ${mobileMenuOpen ? 'bg-background' : 'bg-foreground'}`}
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
                scaleX: mobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`absolute left-0 w-6 h-0.5 rounded-full ${mobileMenuOpen ? 'bg-background' : 'bg-foreground'}`}
              animate={{
                bottom: mobileMenuOpen ? "50%" : "25%",
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? "50%" : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[60] flex flex-col bg-foreground"
          >
            {/* Header area in menu */}
            <div className="h-[72px] flex-shrink-0" />
            <motion.ul 
              className="container-narrow py-8 space-y-6 flex-1"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navigation.map((item) => (
                <motion.li 
                  key={item.name}
                  variants={{
                    open: { opacity: 1, x: 0, transition: { ease: [0.22, 1, 0.36, 1] } },
                    closed: { opacity: 0, x: -30 }
                  }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-2xl font-light tracking-wide py-2 transition-colors duration-300 ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-background hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
