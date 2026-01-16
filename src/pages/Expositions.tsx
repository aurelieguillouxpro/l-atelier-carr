import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const exhibitions = {
  upcoming: [
    {
      id: 0,
      title: "Couleurs en mouvement",
      venue: "Galerie L'Atelier",
      location: "Nantes (44)",
      date: "Mars 2026",
      dateRange: "15 mars - 30 avril 2026",
      description: "Une nouvelle série d'œuvres explorant le dialogue entre la peinture gestuelle et la sculpture monumentale. Vernissage le 15 mars à 18h.",
      highlight: "Vernissage le 15 mars à 18h"
    }
  ],
  past: [
    {
      id: 1,
      title: "Carré'Ment abstrait",
      venue: "Le Musée",
      location: "Sautron (44)",
      date: "Décembre 2025",
      description: "Toiles hautes en couleur qui dégagent énergie et puissance, avec des pigments forts et des traits nets et assumés. Peinture abstraite mais sereine, qui ne choque pas le regard et l'esprit."
    },
    {
      id: 2,
      title: "L'art abstrait ouvre la saison",
      venue: "Maison du patrimoine",
      location: "Mesquer (44)",
      date: "Avril 2025",
      description: "C'est la troisième fois que Marie-Christine Chaillou expose à la Maison du patrimoine de Mesquer. « C'est un endroit que j'adore, la maison est belle et mon travail y est bien mis en valeur. »"
    },
    {
      id: 3,
      title: "Marie-Christine Chaillou expose",
      venue: "Maison du patrimoine",
      location: "Mesquer (44)",
      date: "Novembre 2013",
      description: "Ses rouges et ses oranges sont magnifiques, et la matière est très présente sur ses toiles. Marie-Christine Chaillou utilise la technique de l'huile et manie surtout le couteau."
    },
    {
      id: 4,
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

      {/* Upcoming Exhibitions - Featured Section */}
      {exhibitions.upcoming.length > 0 && (
        <section className="pb-20">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                À venir
              </h2>
              <div className="flex-1 h-px bg-primary/20" />
            </motion.div>

            <div className="space-y-10">
              {exhibitions.upcoming.map((expo, index) => (
                <motion.article
                  key={expo.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Card with gradient border effect */}
                  <div className="relative bg-foreground text-background overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
                    
                    <div className="relative p-8 md:p-12 lg:p-16">
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Content */}
                        <div>
                          <p className="text-primary text-sm uppercase tracking-[0.15em] mb-4">
                            {expo.dateRange}
                          </p>
                          
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
                            {expo.title}
                          </h3>
                          
                          <p className="text-xl text-background/80 mb-2">{expo.venue}</p>
                          
                          <div className="flex items-center gap-2 text-background/60 mb-8">
                            <MapPin size={16} />
                            <span>{expo.location}</span>
                          </div>

                          <p className="text-background/70 leading-relaxed mb-8 max-w-lg">
                            {expo.description}
                          </p>

                          {expo.highlight && (
                            <div className="inline-flex items-center gap-3 bg-primary/20 border border-primary/30 px-6 py-3">
                              <Calendar size={18} className="text-primary" />
                              <span className="text-primary font-medium">{expo.highlight}</span>
                            </div>
                          )}
                        </div>

                        {/* Visual element */}
                        <div className="hidden lg:flex items-center justify-center">
                          <div className="relative">
                            <div className="w-48 h-48 border border-primary/30 rotate-45" />
                            <div className="absolute inset-4 border border-primary/20 rotate-45" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-6xl font-light text-primary/40">MC</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
