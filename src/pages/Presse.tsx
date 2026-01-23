import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ouestFranceLogo from "@/assets/logos/ouest-france.png";
import presseOceanLogo from "@/assets/logos/presse-ocean.svg";
const pressArticles = [
  {
    id: 4,
    title: "Exposition Carré'Ment abstrait",
    source: "Ville de Vertou",
    date: "Mars 2026",
    excerpt: "Découvrez l'exposition de peintures abstraites de Marie-Christine Chaillou à L'Atelier de Vertou, du 21 au 29 mars 2026.",
    link: "https://vertou.fr/exposition-carrement-abstrait/"
  },
  {
    id: 1,
    title: "Sautron. Une expo « Carré'Ment abstrait »",
    source: "Presse Océan",
    date: "Décembre 2025",
    excerpt: "Elle propose des toiles hautes en couleur qui dégagent énergie et puissance, avec des pigments forts et des traits nets et assumés. C'est une peinture abstraite mais sereine, qui ne choque pas le regard et l'esprit.",
    link: "https://nantes.maville.com/actu/actudet_-sautron.-une-expo-carre-ment-abstrait-_-7102158_actu.Htm"
  },
  {
    id: 0,
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
    title: "Un art concrètement abstrait",
    source: "Hippocampe Info",
    date: "Octobre 2013",
    excerpt: "Marie-Christine Chaillou pare ses sentiments de couleurs. Ses œuvres abstraites sont très suggestives et ouvrent un nouvel horizon que recherchent les amateurs d'art.",
    link: "https://hippocampeinfo2.over-blog.com/article-marie-christine-chaillou-55497952.html"
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

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://carrementabstrait.com/presse/#page",
  "name": "Presse - Revue de presse Marie-Christine Chaillou",
  "description": "Articles de presse et témoignages sur le travail de Marie-Christine Chaillou, artiste plasticienne à Nantes",
  "url": "https://carrementabstrait.com/presse",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Articles de presse",
    "numberOfItems": pressArticles.length,
    "itemListElement": pressArticles.map((article, index) => ({
      "@type": "NewsArticle",
      "position": index + 1,
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.date,
      "url": article.link,
      "publisher": {
        "@type": "Organization",
        "name": article.source
      },
      "about": {
        "@type": "Person",
        "@id": "https://carrementabstrait.com/#artist",
        "name": "Marie-Christine Chaillou"
      }
    }))
  }
};

const Presse = () => {
  return (
    <Layout>
      <SEO 
        title="Presse - Articles et Témoignages"
        description="Revue de presse de Marie-Christine Chaillou : articles Ouest-France, Presse Océan, Hippocampe Info. Témoignages et dossier de presse de l'artiste plasticienne nantaise."
        canonical="/presse"
        keywords="presse artiste Nantes, Ouest-France art abstrait, Presse Océan exposition, articles art contemporain, témoignages, dossier presse artiste plasticienne, médias Loire-Atlantique"
        schema={pressSchema}
      />
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


      {/* Articles */}
      <section className="pb-12 md:pb-20">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold mb-6 md:mb-8"
          >
            Articles de presse
          </motion.h2>

          <div className="space-y-4 md:space-y-6">
            {pressArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border p-4 md:p-6 lg:p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-primary">{article.source}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">{article.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{article.excerpt}</p>
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-primary hover:underline whitespace-nowrap self-start"
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
      <section className="py-12 md:py-20 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold mb-8 md:mb-12 text-center"
          >
            Témoignages
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-5 md:p-8 bg-background border border-border"
              >
                <Quote className="absolute top-4 md:top-6 left-4 md:left-6 text-primary/20" size={24} />
                <p className="font-accent text-base md:text-lg mb-4 md:mb-6 pt-6 md:pt-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <p className="font-semibold text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Media Logos */}
      <section className="py-10 md:py-16 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-6 md:mb-10"
          >
            Ils ont parlé de mon travail
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16"
          >
            {/* Ouest-France */}
            <div className="transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
              <img 
                src={ouestFranceLogo} 
                alt="Logo Ouest-France - Journal régional ayant publié des articles sur Marie-Christine Chaillou" 
                className="h-16 sm:h-20 md:h-[7.5rem] w-auto object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Presse Océan */}
            <div className="transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
              <img 
                src={presseOceanLogo} 
                alt="Logo Presse Océan - Média nantais ayant couvert les expositions de l'artiste" 
                className="h-14 sm:h-18 md:h-24 w-auto object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Hippocampe Info */}
            <div className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105">
              <div className="h-10 md:h-12 flex items-center justify-center px-3 md:px-4 py-2 border border-border rounded bg-background transition-shadow duration-300 hover:shadow-md hover:border-primary/30">
                <span className="font-serif text-base md:text-xl font-bold text-foreground tracking-tight">
                  Hippocampe Info
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Presse;
