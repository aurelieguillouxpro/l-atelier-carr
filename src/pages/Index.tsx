import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Import artwork images - tons neutres privilégiés
import huileRougeNoir from "@/assets/artworks/huile-rouge-noir-2010.jpg";
import huileGrisRouge from "@/assets/artworks/huile-gris-rouge-2010.jpg";
import huileOcreGris from "@/assets/artworks/huile-ocre-gris-2006.jpg";

const featuredWorks = [
  {
    id: 1,
    title: "Tension Rouge",
    technique: "Huile sur toile, 50×50 cm",
    image: huileRougeNoir,
  },
  {
    id: 2,
    title: "Équilibre",
    technique: "Huile sur toile, 50×50 cm",
    image: huileGrisRouge,
  },
  {
    id: 3,
    title: "Passage",
    technique: "Huile sur toile au couteau, 60×60 cm",
    image: huileOcreGris,
  },
];

const Index = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section - Full screen, immersif */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background image - tons neutres */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${huileOcreGris})` }}
        />
        
        {/* Overlay élégant */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/70" />
        
        <div className="container-narrow text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 tracking-tight"
          >
            Carrément Abstrait
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/80 mb-3"
          >
            Marie-Christine Chaillou
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-sm uppercase tracking-[0.4em] text-muted-foreground mb-16"
          >
            Artiste peintre & sculptrice
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

      {/* Introduction - Sobre et factuelle */}
      <section className="py-28">
        <div className="container-narrow max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl leading-relaxed text-foreground/80"
          >
            Artiste contemporaine basée à Nantes, je crée des tableaux abstraits 
            et des sculptures en béton ciré depuis plus de 20 ans. Mon travail 
            explore l'équilibre des formes et l'harmonie des couleurs.
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
            <p className="text-muted-foreground text-lg">Une sélection de mes créations</p>
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
                  <div className="aspect-square bg-muted/10 mb-6 overflow-hidden">
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {work.title}
                  </h3>
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

      {/* CTA Section - Épuré */}
      <section className="py-28 bg-foreground text-background">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Intéressé par mon travail ?
            </h2>
            <p className="text-background/70 mb-10 max-w-xl mx-auto text-lg">
              Galeries, collectionneurs, journalistes — n'hésitez pas à me contacter.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-sm uppercase tracking-[0.2em] hover:bg-background/90 transition-all duration-300 hover:gap-4"
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
