import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 mt-24">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Carrément Abstrait</h3>
            <p className="text-sm opacity-70">
              Marie-Christine Chaillou<br />
              Artiste peintre & sculptrice<br />
              Nantes, France
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 opacity-70">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/galerie" className="hover:opacity-70 transition-opacity">Galerie</Link></li>
              <li><Link to="/a-propos" className="hover:opacity-70 transition-opacity">À Propos</Link></li>
              <li><Link to="/expositions" className="hover:opacity-70 transition-opacity">Expositions</Link></li>
              <li><Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 opacity-70">Contact</h4>
            <p className="text-sm opacity-70">
              Pour toute demande de collaboration,<br />
              exposition ou information.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 text-sm border border-background/30 px-4 py-2 hover:bg-background hover:text-foreground transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm opacity-50">
          © {currentYear} Marie-Christine Chaillou — Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
