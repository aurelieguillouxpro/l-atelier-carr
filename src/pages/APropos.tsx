import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import portraitArtiste from "@/assets/portrait-artiste.jpg";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2024-01-01",
  "dateModified": "2026-01-19",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://carrementabstrait.com/#artist",
    "name": "Marie-Christine Chaillou",
    "alternateName": "Carrément Abstrait",
    "jobTitle": "Artiste peintre et sculptrice contemporaine",
    "description": "Artiste spécialisée dans l'abstraction géométrique depuis plus de 20 ans. Formation aux Beaux-Arts de Nantes. Travaille l'huile sur toile au couteau et le béton ciré.",
    "image": "https://carrementabstrait.com/og-image.jpg",
    "knowsAbout": [
      "Peinture à l'huile au couteau",
      "Sculpture béton ciré",
      "Art abstrait géométrique",
      "Techniques mixtes",
      "Composition colorée"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Beaux-Arts de Nantes"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Beaux-Arts de Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "addressCountry": "FR"
      }
    },
    "workLocation": {
      "@type": "Place",
      "name": "Atelier Marie-Christine Chaillou",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "43 rue Léon Jost",
        "addressLocality": "Nantes",
        "postalCode": "44300",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    },
    "award": ["Formation Beaux-Arts de Nantes", "Plus de 20 ans d'expérience"]
  }
};

const APropos = () => {
  return (
    <Layout>
      <SEO 
        title="À Propos - Biographie de l'Artiste"
        description="Découvrez le parcours de Marie-Christine Chaillou, artiste peintre et sculptrice nantaise. Formation aux Beaux-Arts de Nantes, plus de 20 ans d'expérience en abstraction géométrique. Huile au couteau et béton ciré."
        canonical="/a-propos"
        type="profile"
        keywords="biographie artiste Nantes, Marie-Christine Chaillou, Beaux-Arts Nantes, peintre abstrait, sculptrice contemporaine, atelier art Nantes, parcours artistique"
        schema={aboutSchema}
      />
      {/* Hero */}
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
              L'art comme langage de l'invisible
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
                alt="Portrait de Marie-Christine Chaillou, artiste peintre et sculptrice contemporaine basée à Nantes, spécialisée dans l'art abstrait géométrique" 
                className="w-full h-full object-cover object-top"
                loading="lazy"
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
                avec des toiles travaillées à l'huile et des sculptures en béton ciré. J'ai suivi 
                une formation aux Beaux-Arts de Nantes pendant cinq ans, puis fréquenté les ateliers 
                de la Gobinière où j'ai appris la rigueur dans la réalisation des œuvres.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
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

              <p className="text-lg leading-relaxed text-foreground/80">
                Mes tableaux ne portent volontairement aucun titre — une manière de laisser 
                libre cours à l'interprétation et à la lecture de chacun. Seules restent des 
                impressions, des portes intérieures s'ouvrent en grand, les images emplissent 
                l'espace intime au-delà des mots.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Porteuse de rêve, de poésie et de douceur, l'abstraction développe l'imaginaire 
                et l'imagination. Je vous conduis aussi bien au cœur du réel qu'au seuil du rêve, 
                selon votre humeur, le voyage entrepris...
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

      {/* Values / Approach */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-center mb-20"
          >
            Ma démarche artistique
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16">
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
