import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32">
      {/* Decorative line */}
      <div className="container-narrow">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="py-20">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-primary tracking-[0.15em] uppercase mb-4">
                Carrément Abstrait
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Marie-Christine Chaillou<br />
                Artiste peintre & sculptrice<br />
                Nantes, France
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { to: "/galerie", label: "Galerie" },
                  { to: "/a-propos", label: "À Propos" },
                  { to: "/expositions", label: "Expositions" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Contact
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                Pour toute demande de collaboration,<br />
                exposition ou information.
              </p>
              <Link
                to="/contact"
                className="inline-block text-sm tracking-[0.15em] uppercase border border-primary/40 text-primary px-6 py-3 hover:bg-primary hover:text-background transition-all duration-300"
              >
                Me contacter
              </Link>
            </motion.div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              © {currentYear} Marie-Christine Chaillou — Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
