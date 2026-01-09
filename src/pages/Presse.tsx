import { motion } from "framer-motion";
import { ExternalLink, Download, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Placeholder data
const pressArticles = [
  {
    id: 1,
    title: "L'abstraction selon Marie-Christine Chaillou",
    source: "Art Magazine",
    date: "Décembre 2024",
    excerpt: "Une exploration lumineuse de l'art abstrait contemporain, où la couleur devient le vecteur d'émotions profondes.",
    link: "#"
  },
  {
    id: 2,
    title: "Rencontre avec une artiste nantaise",
    source: "Ouest-France",
    date: "Octobre 2024",
    excerpt: "Dans son atelier baigné de lumière, Marie-Christine Chaillou nous dévoile les secrets de sa création.",
    link: "#"
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Une artiste qui ose, qui explore, qui nous transporte dans un univers où la couleur vibre d'une intensité rare.",
    author: "Jean Dupont",
    role: "Directeur de galerie"
  },
  {
    id: 2,
    quote: "Le travail de Marie-Christine Chaillou nous rappelle que l'abstraction n'est pas une fuite du réel, mais une plongée dans l'essentiel.",
    author: "Marie Martin",
    role: "Critique d'art"
  },
];

const Presse = () => {
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
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Médias</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
              On parle de moi
            </h1>
            <p className="text-foreground/60 text-lg">
              Découvrez ce que la presse et les professionnels de l'art disent de mon univers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Kit Download */}
      <section className="pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 md:p-16 text-center glass-dark glow-gold"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Professionnels</p>
            <h2 className="text-3xl tracking-wide mb-4">Dossier de presse</h2>
            <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
              Téléchargez mon dossier de presse complet incluant biographie, 
              visuels haute définition et informations de contact.
            </p>
            <button className="group inline-flex items-center gap-4 bg-primary text-background px-10 py-5 text-sm uppercase tracking-[0.15em] hover:bg-primary/90 transition-all duration-300">
              <Download size={18} />
              Télécharger le dossier de presse
            </button>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-20">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12"
          >
            Articles de presse
          </motion.h2>

          <div className="space-y-6">
            {pressArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 md:p-10 border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span className="text-primary">{article.source}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl tracking-wide mb-4 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">{article.excerpt}</p>
                  </div>
                  <a
                    href={article.link}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors duration-300 whitespace-nowrap"
                  >
                    Lire l'article
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Témoignages</p>
            <h2 className="text-4xl tracking-wide">Ce qu'ils en disent</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative p-10 glass-dark"
              >
                <Quote className="absolute top-8 left-8 text-primary/20" size={40} strokeWidth={1} />
                <p className="font-accent text-xl mb-8 pt-8 leading-relaxed text-foreground/80">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <p className="text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Media Logos Placeholder */}
      <section className="py-20">
        <div className="container-narrow">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12"
          >
            Ils ont parlé de mon travail
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {["Média 1", "Média 2", "Média 3", "Média 4"].map((media, index) => (
              <motion.span 
                key={media} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-muted-foreground tracking-widest uppercase text-sm hover:text-primary hover:opacity-100 transition-all duration-300"
              >
                {media}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presse;
