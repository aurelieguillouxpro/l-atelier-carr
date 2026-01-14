import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Layout from "@/components/layout/Layout";
import portraitArtiste from "@/assets/portrait-artiste.jpg";

const APropos = () => {
  return (
    <Layout>
      {/* Hero - Simplifié */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-4">
              Mon parcours
            </h1>
            <p className="text-muted-foreground text-lg">
              Plus de 20 ans dans l'abstraction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm mx-auto lg:max-w-none lg:aspect-[4/5] aspect-[3/4] bg-gradient-to-br from-muted/30 to-muted/10 lg:sticky lg:top-32 overflow-hidden"
            >
              <motion.img 
                src={portraitArtiste} 
                alt="Marie-Christine Chaillou, artiste contemporaine" 
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl leading-relaxed">
                Je vis et travaille à Nantes. Depuis plus de 20 ans, j'évolue dans l'abstraction 
                avec des toiles travaillées à l'huile et des sculptures en béton ciré.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                J'ai suivi une formation aux Beaux-Arts de Nantes pendant cinq ans, puis fréquenté 
                les ateliers de la Gobinière où j'ai appris la rigueur dans la réalisation des œuvres.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                J'ai commencé par peindre des paysages figuratifs avant de me consacrer entièrement 
                à l'abstraction géométrique. Aujourd'hui, rien de figuratif dans mon travail — 
                règnent la couleur, le trait, et avant tout la composition.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                J'utilise principalement la technique de l'huile, plus contraignante que l'acrylique, 
                et je manie surtout le couteau. Mes tableaux ne portent volontairement aucun titre — 
                une manière de laisser libre cours à l'interprétation de chacun.
              </p>

              {/* Techniques */}
              <div className="pt-10 border-t border-border mt-12">
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  Techniques
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Huile sur toile", "Béton ciré", "Techniques mixtes", "Sculpture"].map((technique) => (
                    <span
                      key={technique}
                      className="px-5 py-2.5 bg-foreground/5 text-sm hover:bg-foreground/10 transition-colors"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Portfolio */}
              <div className="pt-8">
                <motion.button 
                  className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-all duration-300"
                  whileHover={{ gap: "16px" }}
                >
                  <Download size={18} />
                  Télécharger le portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Approach - Simplifié */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-center mb-20"
          >
            Ma démarche
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "L'équilibre",
                description: "Une approche géométrique où chaque forme trouve sa place. L'influence de Mondrian est présente, dans un univers qui m'est propre."
              },
              {
                title: "La couleur",
                description: "Des couleurs vibrantes qui donnent de l'énergie. La matière est très présente sur mes toiles, travaillée au couteau."
              },
              {
                title: "La liberté",
                description: "Une peinture sereine qui laisse libre cours à l'imaginaire. Chaque spectateur y trouve sa propre lecture."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-5">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
