import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Schema.org structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marie-Christine Chaillou",
    "jobTitle": "Artiste peintre et sculptrice",
    "description": "Artiste contemporaine spécialisée dans l'art abstrait, peintures à l'huile et sculptures en béton ciré",
    "url": "https://carrementabstrait.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nantes",
      "addressRegion": "Loire-Atlantique",
      "addressCountry": "France"
    },
    "sameAs": []
  };

  return (
    <footer className="bg-foreground text-background py-12 mt-24" role="contentinfo">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand with semantic markup */}
          <div itemScope itemType="https://schema.org/Person">
            <h3 className="text-xl font-semibold mb-2" itemProp="name">
              Marie-Christine Chaillou
            </h3>
            <p className="text-sm opacity-70">
              <span itemProp="jobTitle">Artiste peintre &amp; sculptrice</span>
              <br />
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Nantes</span>, <span itemProp="addressCountry">France</span>
              </span>
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation secondaire">
            <h4 className="text-sm uppercase tracking-widest mb-4 opacity-70">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/galerie" className="hover:opacity-70 transition-opacity">Galerie</Link></li>
              <li><Link to="/a-propos" className="hover:opacity-70 transition-opacity">À Propos</Link></li>
              <li><Link to="/expositions" className="hover:opacity-70 transition-opacity">Expositions</Link></li>
              <li><Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link></li>
            </ul>
          </nav>

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
              aria-label="Contacter Marie-Christine Chaillou"
            >
              Me contacter
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm opacity-50">
          <p>© {currentYear} Marie-Christine Chaillou — Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
