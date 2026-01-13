import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const exhibitions = {
  upcoming: [],
  past: [
    {
      id: 1,
      title: "Carré'Ment abstrait",
      venue: "Le Musée",
      location: "Sautron (44)",
      date: "Décembre 2014",
      description: "Toiles hautes en couleur qui dégagent énergie et puissance, avec des pigments forts et des traits nets et assumés. Peinture abstraite mais sereine, qui ne choque pas le regard et l'esprit."
    },
    {
      id: 2,
      title: "Marie-Christine Chaillou expose",
      venue: "Maison du patrimoine",
      location: "Mesquer (44)",
      date: "Novembre 2013",
      description: "Ses rouges et ses oranges sont magnifiques, et la matière est très présente sur ses toiles. Marie-Christine Chaillou utilise la technique de l'huile et manie surtout le couteau."
    },
    {
      id: 3,
      title: "Un art concrètement abstrait",
      venue: "Galerie",
      location: "La Baule (44)",
      date: "Octobre 2013",
      description: "Marie-Christine Chaillou pare ses sentiments de couleurs. Ses œuvres abstraites sont très suggestives et ouvrent un nouvel horizon que recherchent les amateurs d'art."
    },
  ]
};

const Expositions = () => {
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
              Mon parcours d'expositions
            </h1>
            <p className="text-muted-foreground text-lg">
              J'expose régulièrement mon travail dans des galeries, salons et événements artistiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      {exhibitions.upcoming.length > 0 && (
        <section className="pb-16">
          <div className="container-narrow">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
            >
              <span className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              À venir
            </motion.h2>

            <div className="space-y-8">
              {exhibitions.upcoming.map((expo, index) => (
                <motion.article
                  key={expo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-accent/30 bg-accent/5 p-8"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Image placeholder */}
                    <div className="aspect-[16/9] lg:aspect-square bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center text-muted-foreground/50">
                      <span className="text-sm">Visuel</span>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold mb-2">{expo.title}</h3>
                      <p className="text-lg text-primary mb-4">{expo.venue}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-2">
                          <MapPin size={16} />
                          {expo.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {expo.date}
                        </span>
                      </div>

                      <p className="text-foreground/80 leading-relaxed">
                        {expo.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Exhibitions */}
      <section className="py-16 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-8"
          >
            Expositions passées
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {exhibitions.past.map((expo, index) => (
              <motion.article
                key={expo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{expo.title}</h3>
                <p className="text-primary mb-3">{expo.venue}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    {expo.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {expo.date}
                  </span>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed">
                  {expo.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Expositions;
