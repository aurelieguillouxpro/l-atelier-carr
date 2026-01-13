import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Layout from "@/components/layout/Layout";
import portraitArtiste from "@/assets/portrait-artiste.jpg";

const APropos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Mon parcours
            </h1>
            <p className="text-muted-foreground text-lg">
              L'art comme langage de l'invisible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="pb-20">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-gradient-to-br from-muted/30 to-muted/10 sticky top-32 overflow-hidden"
            >
              <img 
                src={portraitArtiste} 
                alt="Marie-Christine Chaillou, artiste contemporaine" 
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                Je vis et travaille à Nantes. Depuis plus de 20 ans, j'évolue dans l'abstraction 
                avec des toiles travaillées à l'huile et des sculptures en béton ciré. J'ai suivi 
                une formation aux Beaux-Arts de Nantes pendant cinq ans, puis fréquenté les ateliers 
                de la Gobinière où j'ai appris la rigueur dans la réalisation des œuvres.
              </p>

              <p className="text-lg leading-relaxed">
                J'ai commencé par peindre des paysages figuratifs avant de me consacrer entièrement 
                à l'abstraction géométrique. Aujourd'hui, rien de figuratif dans mon travail — 
                règnent la couleur, le trait, et avant tout la composition. J'utilise principalement 
                la technique de l'huile, plus contraignante que l'acrylique, et je manie surtout le couteau.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 my-8">
                <p className="font-accent text-xl md:text-2xl text-foreground/90">
                  « Ce qui m'intéresse, c'est le voyage que chacun entreprend devant mon travail. »
                </p>
              </blockquote>

              <p className="text-lg leading-relaxed">
                Mes tableaux ne portent volontairement aucun titre — une manière de laisser 
                libre cours à l'interprétation et à la lecture de chacun. Seules restent des 
                impressions, des portes intérieures s'ouvrent en grand, les images emplissent 
                l'espace intime au-delà des mots.
              </p>

              <p className="text-lg leading-relaxed">
                Porteuse de rêve, de poésie et de douceur, l'abstraction développe l'imaginaire 
                et l'imagination. Je vous conduis aussi bien au cœur du réel qu'au seuil du rêve, 
                selon votre humeur, le voyage entrepris...
              </p>

              {/* Techniques */}
              <div className="pt-8 border-t border-border mt-12">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Techniques
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Huile sur toile", "Béton ciré", "Techniques mixtes", "Sculpture"].map((technique) => (
                    <span
                      key={technique}
                      className="px-4 py-2 bg-foreground/5 text-sm"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Portfolio */}
              <div className="pt-8">
                <button className="inline-flex items-center gap-3 border border-foreground px-6 py-3 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
                  <Download size={16} />
                  Télécharger le portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Approach */}
      <section className="py-20 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-16"
          >
            Ma démarche artistique
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "L'équilibre",
                description: "Mes dessins sont réalisés d'une manière géométrique et équilibrée. On peut y sentir l'influence de Mondrian, mais j'évolue dans un univers qui m'est propre."
              },
              {
                title: "La couleur",
                description: "Des couleurs chatoyantes qui donnent de l'énergie. Mes rouges et mes oranges sont intenses, et la matière est très présente sur mes toiles."
              },
              {
                title: "La liberté",
                description: "C'est une peinture abstraite mais sereine, qui ne choque pas le regard et l'esprit. Elle laisse libre cours à l'imaginaire du visiteur."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
