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
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              On parle de moi
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez ce que la presse et les professionnels de l'art disent de mon univers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Kit Download */}
      <section className="pb-16">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Dossier de presse</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Téléchargez mon dossier de presse complet incluant biographie, 
              visuels haute définition et informations de contact.
            </p>
            <button className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-background/90 transition-colors">
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
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-8"
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border p-6 md:p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-primary">{article.source}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{article.excerpt}</p>
                  </div>
                  <a
                    href={article.link}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline whitespace-nowrap"
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
      <section className="py-20 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-12 text-center"
          >
            Témoignages
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 bg-background border border-border"
              >
                <Quote className="absolute top-6 left-6 text-primary/20" size={32} />
                <p className="font-accent text-lg mb-6 pt-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Media Logos Placeholder */}
      <section className="py-16">
        <div className="container-narrow">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8"
          >
            Ils ont parlé de mon travail
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["Média 1", "Média 2", "Média 3", "Média 4"].map((media) => (
              <span key={media} className="text-muted-foreground">
                {media}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presse;
