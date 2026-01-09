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
