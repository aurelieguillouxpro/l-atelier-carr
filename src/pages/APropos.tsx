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
    "jobTitle": "Artiste plasticienne",
    "description": "Artiste plasticienne spécialisée dans l'abstraction depuis plus de 25 ans. Formation aux Beaux-Arts de Nantes. Peintures et sculptures.",
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
    "award": ["Formation Beaux-Arts de Nantes", "Plus de 25 ans d'expérience"]
  }
};

const APropos = () => {
  return (
    <Layout>
      <SEO 
        title="À Propos - Biographie de l'Artiste"
        description="Découvrez le parcours de Marie-Christine Chaillou, artiste plasticienne nantaise. Formation aux Beaux-Arts de Nantes, plus de 25 ans d'expérience en abstraction. Peintures et sculptures."
        canonical="/a-propos"
        type="profile"
        keywords="biographie artiste Nantes, Marie-Christine Chaillou, Beaux-Arts Nantes, artiste plasticienne, atelier art Nantes, parcours artistique"
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
              Un voyage vers l'infini : un horizon sans fin...
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
              <p className="text-base md:text-lg leading-relaxed">
                Marie-Christine CHAILLOU vit et travaille à Nantes depuis plus de 25 ans, 
                elle a suivi une formation à l'école des beaux-arts de Nantes ainsi que dans 
                divers ateliers où elle a appris la rigueur dans la réalisation des œuvres.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Elle évolue dans l'abstraction tant au travers de ses toiles que de ses sculptures. 
                Elle nous conduit aussi bien au cœur du réel, qu'au seuil du rêve, selon l'humeur 
                du passant, le voyage entrepris….
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 my-8">
                <p className="font-accent text-xl md:text-2xl text-foreground/90">
                  VOYAGER EN ABSTRACTION, c'est développer son imaginaire et son imagination. 
                  C'est également prendre toutes les libertés d'interprétation et se laisser 
                  porter par ses émotions.
                </p>
              </blockquote>

              <p className="text-lg leading-relaxed text-foreground/80">
                Par la puissance de ses couleurs, par la force de son trait, quelle que soit 
                la technique mise en œuvre, Marie-Christine nous entraîne dans son monde où 
                voyager en toute liberté reste la priorité.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Le rythme de son travail est insufflé par la dynamique de ses compositions.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                L'énergie et la sérénité qui en ressortent nous portent dans cette découverte 
                et ce voyage. Seules restent des impressions porteuses de rêve, de poésie et d'évasion.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Des portes intérieures s'ouvrent en grand, les images emplissent l'espace intime 
                au-delà des mots.
              </p>

              {/* Techniques */}
              <div className="pt-10 border-t border-border mt-12">
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  Techniques
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Huile sur toile", "Techniques mixtes", "Acryliques sur toile", "Gestuel acrylique sur papier", "Sculptures en bois et béton ciré"].map((technique) => (
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
                description: "Au premier regard on pourrait croire que la composition est née d'une construction mathématique puis le regard se perd : un horizon sans fin... La recherche permanente d'équilibre et de couleurs nous donne à voir beaucoup de force et de beauté dans leur patient assemblage."
              },
              {
                title: "La couleur",
                description: "Sérénité et lumière de la toile blanche, patient découpage en pans de couleur pure, où on s'enchante de cette symphonie géométrique, alliance toujours heureuse de rigueur adoucie de courbes douces."
              },
              {
                title: "La liberté",
                description: "L'artiste confirme la grande liberté qu'elle exprime dans la création de ses œuvres tant pour elle que pour ceux qui la contemplent."
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
