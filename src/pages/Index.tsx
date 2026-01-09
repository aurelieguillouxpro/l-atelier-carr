import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />

        <div className="container-narrow text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-8"
          >
            <span className="inline-block w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-accent text-lg md:text-xl text-primary/80 mb-8"
          >
            « Là où la couleur devient émotion »
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-[0.08em]"
          >
            <span className="text-primary">Carrément</span>
            <br />
            <span className="text-foreground">Abstrait</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/60 mb-4"
          >
            Marie-Christine Chaillou
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-16"
          >
            Artiste peintre & sculptrice contemporaine
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              to="/galerie"
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-primary border border-primary/40 px-10 py-5 hover:bg-primary hover:text-background transition-all duration-500"
            >
              Découvrir les œuvres
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="mt-20"
          >
            <span className="inline-block w-px h-20 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32">
        <div className="container-narrow max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl leading-relaxed text-foreground/70"
          >
            Bienvenue dans mon univers. Ici, les formes se libèrent, les couleurs dialoguent, 
            et chaque œuvre devient une invitation au voyage intérieur. J'explore l'abstraction 
            avec audace et sensibilité, entre <span className="text-primary">huile vibrante</span> et <span className="text-primary">béton ciré sculptural</span>.
          </motion.p>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Collection</p>
            <h2 className="text-4xl md:text-5xl tracking-wide">Œuvres récentes</h2>
          </motion.div>

          {/* Placeholder for artworks */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-secondary/50 mb-6 overflow-hidden relative glow-gold">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-sm tracking-widest uppercase">Œuvre {item}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                <h3 className="text-lg tracking-wide group-hover:text-primary transition-colors duration-300">
                  Titre de l'œuvre
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Technique mixte</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              to="/galerie"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-primary hover:text-foreground transition-colors duration-300 link-underline"
            >
              Voir toute la galerie
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        
        <div className="container-narrow max-w-4xl text-center relative z-10">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <span className="text-6xl text-primary/30">"</span>
            </div>
            <p className="font-accent text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 mb-8">
              Je peins ce que les mots ne peuvent dire. Je sculpte ce que le regard cherche sans le savoir.
            </p>
            <cite className="text-xs uppercase tracking-[0.3em] text-primary not-italic">
              — Marie-Christine Chaillou
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 md:p-20 text-center glass-dark glow-gold"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Collaboration</p>
            <h2 className="text-3xl md:text-4xl tracking-wide mb-6">
              Intéressé par une collaboration ?
            </h2>
            <p className="text-foreground/60 mb-10 max-w-xl mx-auto">
              Galeries, journalistes, amateurs d'art — je serais ravie d'échanger avec vous.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] bg-primary text-background px-10 py-5 hover:bg-primary/90 transition-all duration-300"
            >
              Me contacter
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
