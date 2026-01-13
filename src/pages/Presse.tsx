import { motion } from "framer-motion";
import { ExternalLink, Download, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";

const pressArticles = [
  {
    id: 1,
    title: "L'art abstrait ouvre la saison à la Maison du patrimoine de Mesquer",
    source: "Ouest-France",
    date: "Avril 2025",
    excerpt: "C'est la troisième fois que Marie-Christine Chaillou expose à la Maison du patrimoine de Mesquer. « C'est un endroit que j'adore, la maison est belle et mon travail y est bien mis en valeur. »",
    link: "https://www.ouest-france.fr/pays-de-la-loire/mesquer-44420/lart-abstrait-ouvre-la-saison-a-la-maison-du-patrimoine-de-mesquer-653085e4-0e19-11f0-ae86-6d5913869474"
  },
  {
    id: 2,
    title: "Marie-Christine Chaillou à la Maison du patrimoine",
    source: "Ouest-France",
    date: "Novembre 2013",
    excerpt: "Ses rouges et ses oranges sont magnifiques, et la matière est très présente sur ses toiles. Marie-Christine Chaillou utilise la technique de l'huile et manie surtout le couteau.",
    link: "https://www.ouest-france.fr/pays-de-la-loire/la-baule-44500/marie-christine-chaillou-la-maison-du-patrimoine-1657843"
  },
  {
    id: 3,
    title: "L'équilibre scriptural de Marie-Christine Chaillou",
    source: "Ouest-France",
    date: "Octobre 2016",
    excerpt: "Ses dessins sont réalisés d'une manière géométrique et équilibrée. L'artiste applique ensuite des couleurs chatoyantes, « qui donnent de l'énergie ».",
    link: "https://www.ouest-france.fr/pays-de-la-loire/ancenis-saint-gereon-44150/l-equilibre-scriptural-de-marie-christine-chaillou-4551918"
  },
  {
    id: 4,
    title: "Regarder l'exposition de Marie-Christine Chaillou",
    source: "Ouest-France",
    date: "Avril 2017",
    excerpt: "L'artiste peint et sculpte avec équilibre et force. Deux puissances qui se dégagent aussi bien de ses toiles travaillées à l'huile que de ses sculptures faites de béton ciré.",
    link: "https://www.ouest-france.fr/pays-de-la-loire/regarder-l-exposition-de-marie-christine-chaillou-4900841"
  },
  {
    id: 5,
    title: "Sautron. Une expo « Carré'Ment abstrait »",
    source: "Presse Océan",
    date: "Décembre 2014",
    excerpt: "Elle propose des toiles hautes en couleur qui dégagent énergie et puissance, avec des pigments forts et des traits nets et assumés.",
    link: "https://saint-nazaire.maville.com/actu/actudet_-sautron.-une-expo-carre-ment-abstrait-_dep-7102158_actu.Htm"
  },
  {
    id: 6,
    title: "Un art concrètement abstrait",
    source: "Hippocampe Info",
    date: "Octobre 2013",
    excerpt: "Marie-Christine Chaillou pare ses sentiments de couleurs. Ses œuvres abstraites sont très suggestives et ouvrent un nouvel horizon que recherchent les amateurs d'art.",
    link: "https://hippocampeinfo2.over-blog.com/article-marie-christine-chaillou-55497952.html"
  },
  {
    id: 7,
    title: "Exposition municipale à la Chapelle Saint-Germain",
    source: "Facebook",
    date: "2024",
    excerpt: "L'exposition municipale a lieu en ce moment à la Chapelle Saint-Germain à Saint-Julien-de-Concelles.",
    link: "https://www.facebook.com/100083966103967/posts/732054606270070/"
  },
];

const testimonials = [
  {
    id: 1,
    quote: "L'art pratiqué par Marie-Christine Chaillou est toujours en mouvement, très vivant, à l'image de ce que disait Auguste Rodin : « Un art qui a de la vie ne reproduit pas le passé, il le continue ».",
    author: "Padraig De Chemoulin",
    role: "Hippocampe Info"
  },
  {
    id: 2,
    quote: "On sent l'influence des œuvres de Mondrian dans sa démarche, mais Marie-Christine Chaillou évolue dans un univers qui lui est propre.",
    author: "Ouest-France",
    role: "Article de presse"
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
            <a 
              href="/documents/dossier-presse-chaillou.pdf"
              download="Dossier-Presse-Marie-Christine-Chaillou.pdf"
              className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-background/90 transition-colors"
            >
              <Download size={18} />
              Télécharger le dossier de presse
            </a>
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
