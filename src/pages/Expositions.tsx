import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Placeholder data - to be replaced with actual exhibitions
const exhibitions = {
  upcoming: [
    {
      id: 1,
      title: "Abstractions Contemporaines",
      venue: "Galerie Art Moderne",
      location: "Nantes",
      date: "15 Mars - 30 Avril 2025",
      description: "Exposition collective réunissant cinq artistes de la scène abstraite nantaise."
    },
  ],
  past: [
    {
      id: 2,
      title: "Couleurs en Liberté",
      venue: "Espace Culturel du Château",
      location: "Nantes",
      date: "Octobre 2024",
      description: "Exposition personnelle présentant une série de 15 toiles grand format."
    },
    {
      id: 3,
      title: "Salon d'Art Contemporain",
      venue: "Parc des Expositions",
      location: "Paris",
      date: "Septembre 2024",
      description: "Participation au salon annuel avec présentation de sculptures en béton ciré."
    },
    {
      id: 4,
      title: "Matières & Textures",
      venue: "Galerie L'Atelier",
      location: "Rennes",
      date: "Juin 2024",
      description: "Dialogue entre peinture et sculpture autour de la matière."
    },
  ]
};

const Expositions = () => {
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
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Parcours</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
              Expositions
            </h1>
            <p className="text-foreground/60 text-lg">
              J'expose régulièrement mon travail dans des galeries, salons et événements artistiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      {exhibitions.upcoming.length > 0 && (
        <section className="pb-20">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-12"
            >
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary">À venir</h2>
            </motion.div>

            <div className="space-y-8">
              {exhibitions.upcoming.map((expo, index) => (
                <motion.article
                  key={expo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="glass-dark p-8 md:p-12 glow-gold"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Image placeholder */}
                    <div className="aspect-[16/9] lg:aspect-square bg-secondary/50 flex items-center justify-center text-muted-foreground">
                      <span className="text-sm tracking-widest uppercase">Visuel</span>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-3xl tracking-wide mb-3">{expo.title}</h3>
                      <p className="text-xl text-primary mb-6">{expo.venue}</p>
                      
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                        <span className="flex items-center gap-2">
                          <MapPin size={16} strokeWidth={1.5} />
                          {expo.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={16} strokeWidth={1.5} />
                          {expo.date}
                        </span>
                      </div>

                      <p className="text-foreground/70 leading-relaxed">
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
      <section className="py-20">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12"
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
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="text-xl tracking-wide mb-2 group-hover:text-primary transition-colors duration-300">
                  {expo.title}
                </h3>
                <p className="text-primary/80 mb-4">{expo.venue}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} strokeWidth={1.5} />
                    {expo.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} strokeWidth={1.5} />
                    {expo.date}
                  </span>
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed">
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
