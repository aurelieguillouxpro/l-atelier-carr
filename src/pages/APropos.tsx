import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Layout from "@/components/layout/Layout";

const APropos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">L'artiste</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
              Mon parcours
            </h1>
            <p className="text-foreground/60 text-lg">
              L'art comme langage de l'invisible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="pb-32">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] bg-secondary/50 sticky top-32 glow-gold"
            >
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-sm tracking-widest uppercase">Portrait de l'artiste</span>
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg leading-relaxed text-foreground/80">
                Je suis artiste contemporaine, basée à Nantes. Mon œuvre se situe à la croisée 
                de la peinture abstraite et de la sculpture. Formée aux arts plastiques et nourrie 
                par une curiosité insatiable pour la matière, je développe un langage visuel unique, 
                où la <span className="text-primary">couleur explose</span> et le <span className="text-primary">béton s'adoucit</span>.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Mon travail, profondément intuitif, naît d'un dialogue permanent entre geste spontané 
                et réflexion contemplative. Chaque toile, chaque sculpture, est une exploration des 
                émotions enfouies, une traduction plastique de l'indicible.
              </p>

              <blockquote className="relative py-8 my-12">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                <p className="font-accent text-2xl md:text-3xl text-foreground/90 pl-8 leading-relaxed">
                  « Je peins ce que les mots ne peuvent dire. Je sculpte ce que le regard cherche sans le savoir. »
                </p>
              </blockquote>

              <p className="text-lg leading-relaxed text-foreground/80">
                Exposée en galeries et salons d'art contemporain, je poursuis ma quête d'un art vivant, 
                vibrant, résolument abstrait.
              </p>

              {/* Techniques */}
              <div className="pt-12 border-t border-border/50">
                <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  Techniques
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Huile sur toile", "Béton ciré", "Techniques mixtes", "Sculpture"].map((technique) => (
                    <span
                      key={technique}
                      className="px-5 py-2 border border-border/50 text-sm text-foreground/70 hover:border-primary/50 hover:text-primary transition-colors duration-300"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Portfolio */}
              <div className="pt-8">
                <button className="group inline-flex items-center gap-4 border border-primary/40 text-primary px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-background transition-all duration-300">
                  <Download size={18} />
                  Télécharger le portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Approach */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Philosophie</p>
            <h2 className="text-4xl md:text-5xl tracking-wide">
              Ma démarche artistique
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "L'intuition",
                description: "Chaque œuvre naît d'une impulsion, d'un geste premier qui guide la composition. Je laisse la matière me parler."
              },
              {
                title: "La couleur",
                description: "Vibrante, audacieuse, la couleur est au cœur de mon expression. Elle porte l'émotion là où les formes restent silencieuses."
              },
              {
                title: "La matière",
                description: "De l'huile au béton ciré, j'explore les textures pour créer un dialogue entre le lisse et le rugueux, le léger et le dense."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="text-center p-8 glass-dark"
              >
                <h3 className="text-xl tracking-wide text-primary mb-4">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
