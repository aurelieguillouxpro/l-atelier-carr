import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";

// Import artwork images
import encreGestuelle from "@/assets/artworks/encre-gestuelle.jpg";
import sculptureNoireDynamique from "@/assets/artworks/sculpture-noire-dynamique.jpg";
import sculptureGeometrique from "@/assets/artworks/sculpture-geometrique.jpg";

const featuredWorks = [
  {
    id: 1,
    technique: "Bronze patiné noir — 35×30×25 cm",
    image: sculptureNoireDynamique,
  },
  {
    id: 2,
    technique: "Encre sur papier — 40×50 cm",
    image: encreGestuelle,
  },
  {
    id: 3,
    technique: "Béton ciré bicolore — 40×20×15 cm",
    image: sculptureGeometrique,
  },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Carrément Abstrait",
  "url": "https://carrementabstrait.com",
  "description": "Portfolio de Marie-Christine Chaillou, artiste peintre et sculptrice contemporaine",
  "author": {
    "@type": "Person",
    "name": "Marie-Christine Chaillou",
    "jobTitle": "Artiste peintre et sculptrice"
  }
};

const Index = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEO 
        canonical="/"
        keywords="art abstrait, peinture contemporaine, sculpture béton ciré, artiste Nantes, Marie-Christine Chaillou, huile sur toile, art géométrique"
        schema={homeSchema}
      />
      {/* Hero Section - Full screen, immersif */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background image - tons neutres */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${encreGestuelle})` }}
        />
        
        {/* Overlay élégant */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/70" />
        
        <div className="container-narrow text-center relative z-10">
          {/* Fond semi-transparent pour améliorer la lisibilité */}
          <div className="bg-background/60 backdrop-blur-sm px-8 py-12 md:px-16 md:py-16 rounded-sm">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-accent text-lg md:text-xl text-foreground mb-8"
            >
              « Là où la couleur devient émotion »
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 tracking-tight"
            >
              Carrément Abstrait
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="text-lg md:text-xl text-foreground mb-3"
            >
              Marie-Christine Chaillou
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="text-sm uppercase tracking-[0.3em] text-foreground/70 mb-16"
            >
              Artiste peintre & sculptrice contemporaine
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link
                to="/galerie"
                className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-sm uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all duration-300 hover:gap-4"
              >
                Découvrir les œuvres
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Faire défiler"
        >
          <ChevronDown size={32} className="animate-scroll-hint" />
        </motion.button>
      </section>

      {/* Introduction */}
      <section className="py-28">
        <div className="container-narrow max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl leading-relaxed text-foreground/80"
          >
            Mon atmosphère artistique se traduit au travers de tableaux abstraits colorés, 
            laissant libre cours à votre imaginaire. Le rythme est insufflé par la dynamique 
            de la composition, l'animation des couleurs et des formes. Il est la résonance 
            visuelle retenue par l'œil qui s'y attarde.
          </motion.p>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">Œuvres récentes</h2>
            <p className="text-muted-foreground text-lg">Une sélection de mes dernières créations</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <Link to="/galerie">
                  <div className="aspect-square bg-muted/10 mb-4 overflow-hidden">
                    <OptimizedImage
                      src={work.image}
                      alt={`${work.technique} par Marie-Christine Chaillou, artiste peintre contemporaine Nantes`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{work.technique}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-primary transition-colors link-underline"
            >
              Voir toute la galerie
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-28">
        <div className="container-narrow max-w-4xl text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-accent text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 mb-6">
              « Ce qui m'intéresse, c'est le voyage que chacun entreprend devant mon travail. »
            </p>
            <cite className="text-sm uppercase tracking-[0.2em] text-muted-foreground not-italic">
              — Marie-Christine Chaillou
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-background rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container-narrow text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-6">
              Collaborations & Expositions
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
              Intéressé par une collaboration ?
            </h2>
            <p className="text-primary-foreground/80 mb-12 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Galeries, journalistes, amateurs d'art — je serais ravie d'échanger avec vous 
              autour d'un projet d'exposition ou d'une collaboration artistique.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-background text-foreground px-12 py-5 text-sm uppercase tracking-[0.2em] hover:bg-background/90 transition-all duration-300 hover:gap-4 shadow-lg"
            >
              Me contacter
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
