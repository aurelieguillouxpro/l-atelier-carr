import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Import artwork images
import huileRougeNoir from "@/assets/artworks/huile-rouge-noir-2010.jpg";
import huileGrisRouge from "@/assets/artworks/huile-gris-rouge-2010.jpg";
import huileOrange from "@/assets/artworks/huile-orange-2007.jpg";

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
    title: "Crépuscule",
    technique: "Huile sur toile au couteau, 80×80 cm",
    image: huileOrange,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="container-narrow text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-accent text-lg md:text-xl text-muted-foreground mb-6"
          >
            « Là où la couleur devient émotion »
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight"
          >
            Carrément Abstrait
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Marie-Christine Chaillou
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12"
          >
            Artiste peintre & sculptrice contemporaine
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Découvrir les œuvres
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-narrow max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed text-foreground/80"
          >
            Mon atmosphère artistique se traduit au travers de tableaux abstraits colorés, 
            laissant libre cours à votre imaginaire. Le rythme est insufflé par la dynamique 
            de la composition, l'animation des couleurs et des formes. Il est la résonance 
            visuelle retenue par l'œil qui s'y attarde.
          </motion.p>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Œuvres récentes</h2>
            <p className="text-muted-foreground">Une sélection de mes dernières créations</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to="/galerie">
                  <div className="aspect-square bg-muted/10 mb-4 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors link-underline"
            >
              Voir toute la galerie
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24">
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
            <cite className="text-sm uppercase tracking-widest text-muted-foreground not-italic">
              — Marie-Christine Chaillou
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Intéressé par une collaboration ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Galeries, journalistes, amateurs d'art — je serais ravie d'échanger avec vous.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-background/90 transition-colors"
            >
              Me contacter
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
