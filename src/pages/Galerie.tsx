import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

// Import artwork images
import huileRougeNoir from "@/assets/artworks/huile-rouge-noir-2010.jpg";
import huileGrisRouge from "@/assets/artworks/huile-gris-rouge-2010.jpg";
import huileBleuJaune from "@/assets/artworks/huile-bleu-jaune-2007.jpg";
import huileOrange from "@/assets/artworks/huile-orange-2007.jpg";
import huileJauneBleu from "@/assets/artworks/huile-jaune-bleu-2007.jpg";
import encreGestuelle from "@/assets/artworks/encre-gestuelle.jpg";
import huileRougeGris from "@/assets/artworks/huile-rouge-gris-2007.jpg";
import huileTurquoise from "@/assets/artworks/huile-turquoise-2007.jpg";
import quadriptyque from "@/assets/artworks/quadriptyque-2007.jpg";
import huileBleuCreme from "@/assets/artworks/huile-bleu-creme-2006.jpg";
import huileMarineOrange from "@/assets/artworks/huile-marine-orange-2006.jpg";
import huileBleuOrange from "@/assets/artworks/huile-bleu-orange-2006.jpg";
import huileGrisOrange from "@/assets/artworks/huile-gris-orange-2006.jpg";
import huileOcreGris from "@/assets/artworks/huile-ocre-gris-2006.jpg";
import huileBleuOcre from "@/assets/artworks/huile-bleu-ocre-2006.jpg";
import huilePerspective from "@/assets/artworks/huile-perspective-2005.jpg";
// Sculptures
import sculptureBlanche from "@/assets/artworks/sculpture-blanche-organique.jpg";
import sculptureColoree from "@/assets/artworks/sculpture-coloree.jpg";
import sculptureNoire from "@/assets/artworks/sculpture-noire.jpg";
import sculptureGeometrique from "@/assets/artworks/sculpture-geometrique.jpg";
import sculptureElancee from "@/assets/artworks/sculpture-elancee.jpg";
import sculptureSignee from "@/assets/artworks/sculpture-blanche-signee.jpg";
import sculptureNoireDynamique from "@/assets/artworks/sculpture-noire-dynamique.jpg";
import sculptureMonumentale from "@/assets/artworks/sculpture-monumentale.jpg";
import sculptureArchitecturale from "@/assets/artworks/sculpture-architecturale.jpg";
import sculptureFeminine from "@/assets/artworks/sculpture-feminine.jpg";
import sculptureTotemique from "@/assets/artworks/sculpture-totemique.jpg";

const artworks = [
  // Sculptures
  {
    id: 17,
    title: "Silhouette",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "35 × 12 × 10 cm",
    year: "2023",
    description: "Une forme féminine stylisée s'élève avec grâce, capturant le mouvement dans la pierre.",
    image: sculptureBlanche,
  },
  {
    id: 18,
    title: "Vitrail",
    category: "sculptures",
    technique: "Bois peint",
    dimensions: "45 × 15 × 8 cm",
    year: "2022",
    description: "Les couleurs primaires s'entrelacent sur le bois sculpté, créant un dialogue entre peinture et volume.",
    image: sculptureColoree,
  },
  {
    id: 19,
    title: "Mouvement",
    category: "sculptures",
    technique: "Bronze patiné",
    dimensions: "30 × 25 × 20 cm",
    year: "2023",
    description: "Des formes organiques s'entremêlent dans un équilibre dynamique, capturant l'instant suspendu.",
    image: sculptureNoire,
  },
  {
    id: 20,
    title: "Architecture",
    category: "sculptures",
    technique: "Béton ciré bicolore",
    dimensions: "40 × 20 × 15 cm",
    year: "2024",
    description: "Géométrie pure où les plans ocre et blanc créent un jeu d'ombres et de lumière.",
    image: sculptureGeometrique,
  },
  {
    id: 21,
    title: "Élévation",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "38 × 12 × 10 cm",
    year: "2024",
    description: "Une forme élancée qui aspire vers le ciel, alliant force et délicatesse.",
    image: sculptureElancee,
  },
  {
    id: 22,
    title: "Contemplation",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "30 × 20 × 15 cm",
    year: "2021",
    description: "Une silhouette méditative aux courbes épurées, signée par l'artiste.",
    image: sculptureSignee,
  },
  {
    id: 23,
    title: "Envol",
    category: "sculptures",
    technique: "Bronze patiné noir",
    dimensions: "35 × 30 × 25 cm",
    year: "2025",
    description: "Formes dynamiques s'élançant dans l'espace, capturant l'énergie du mouvement.",
    image: sculptureNoireDynamique,
  },
  {
    id: 24,
    title: "Monument",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "60 × 35 × 30 cm",
    year: "2020",
    description: "Une pièce monumentale aux lignes architecturales affirmées.",
    image: sculptureMonumentale,
  },
  {
    id: 25,
    title: "Édifice",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "45 × 20 × 15 cm",
    year: "2019",
    description: "Une sculpture architecturale jouant sur les pleins et les vides, évoquant une construction primitive.",
    image: sculptureArchitecturale,
  },
  {
    id: 26,
    title: "Grâce",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "50 × 15 × 12 cm",
    year: "2019",
    description: "Une silhouette féminine élancée, entre présence et absence, forme et vide.",
    image: sculptureFeminine,
  },
  {
    id: 27,
    title: "Gardien",
    category: "sculptures",
    technique: "Béton moucheté",
    dimensions: "35 × 10 × 8 cm",
    year: "2018",
    description: "Un totem minimaliste, figure protectrice aux formes épurées.",
    image: sculptureTotemique,
  },
  // Peintures
  {
    id: 1,
    title: "Tension Rouge",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "50 × 50 cm",
    year: "2010",
    description: "Une confrontation audacieuse entre le rouge vibrant et le noir profond, où les formes géométriques s'imbriquent dans un dialogue de couleurs intenses.",
    image: huileRougeNoir,
  },
  {
    id: 2,
    title: "Équilibre",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "50 × 50 cm",
    year: "2010",
    description: "Jeu subtil de gris et de touches de rouge qui créent une harmonie visuelle entre légèreté et profondeur.",
    image: huileGrisRouge,
  },
  {
    id: 3,
    title: "Symphonie Colorée",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    description: "Une explosion de couleurs où le bleu profond dialogue avec le jaune lumineux et l'orange chaleureux.",
    image: huileBleuJaune,
  },
  {
    id: 4,
    title: "Crépuscule",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    description: "Les teintes chaudes de l'orange et du brun créent une atmosphère enveloppante, évoquant les dernières lueurs du jour.",
    image: huileOrange,
  },
  {
    id: 5,
    title: "Dynamique Primaire",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    description: "Les couleurs primaires s'affrontent et s'enlacent dans une composition vibrante d'énergie.",
    image: huileJauneBleu,
  },
  {
    id: 6,
    title: "Geste Noir",
    category: "peintures",
    technique: "Encre sur papier",
    dimensions: "40 × 50 cm",
    year: "2023",
    description: "La spontanéité du geste capturée dans l'encre, où chaque trait révèle l'instant de sa création.",
    image: encreGestuelle,
  },
  {
    id: 7,
    title: "Verticalité",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2007",
    description: "Le rouge s'élève en lignes verticales sur un fond de gris nuancés, créant une tension entre stabilité et mouvement.",
    image: huileRougeGris,
  },
  {
    id: 8,
    title: "Archipel",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2007",
    description: "Des îlots de turquoise flottent dans un océan de gris et de noir, évoquant des paysages imaginaires.",
    image: huileTurquoise,
  },
  {
    id: 9,
    title: "Quadriptyque Urbain",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "4 × 40 × 40 cm",
    year: "2007",
    description: "Quatre tableaux qui dialoguent entre eux, comme les fenêtres d'une ville abstraite baignée de rouge et de gris.",
    image: quadriptyque,
  },
  {
    id: 10,
    title: "Horizon",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    description: "Le bleu profond et les tons crème se rencontrent, séparés par un trait de rouge vibrant.",
    image: huileBleuCreme,
  },
  {
    id: 11,
    title: "Architecture Marine",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    description: "Une composition dynamique où le bleu marine et l'orange s'affrontent dans une géométrie audacieuse.",
    image: huileMarineOrange,
  },
  {
    id: 12,
    title: "Ouverture",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    description: "Le bleu profond encadre des formes orangées lumineuses, créant une fenêtre vers un espace vibrant de couleurs.",
    image: huileBleuOrange,
  },
  {
    id: 13,
    title: "Métropole",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    description: "Une composition urbaine où le gris industriel rencontre l'énergie du rouge et de l'orange.",
    image: huileGrisOrange,
  },
  {
    id: 14,
    title: "Passage",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    description: "Des teintes terreuses et grises s'ouvrent sur un chemin de lumière bleutée.",
    image: huileOcreGris,
  },
  {
    id: 15,
    title: "Sentinelle",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2006",
    description: "Une forme ocre s'élève au centre, gardienne silencieuse entre les bleus du ciel et de la mer.",
    image: huileBleuOcre,
  },
  {
    id: 16,
    title: "Perspective",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2005",
    description: "Des plans gris-bleu convergent vers un trait rouge central, créant une profondeur hypnotique.",
    image: huilePerspective,
  },
];

const categories = [
  { id: "all", label: "Tout" },
  { id: "peintures", label: "Peintures" },
  { id: "sculptures", label: "Sculptures" },
];

const Galerie = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filteredArtworks = activeCategory === "all"
    ? artworks
    : artworks.filter((art) => art.category === activeCategory);

  const currentIndex = selectedArtwork
    ? filteredArtworks.findIndex((art) => art.id === selectedArtwork.id)
    : -1;

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedArtwork) return;
    const newIndex = direction === "next"
      ? (currentIndex + 1) % filteredArtworks.length
      : (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
    setSelectedArtwork(filteredArtworks[newIndex]);
  };

const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Galerie - Peintures et Sculptures",
    "description": "Collection complète des œuvres de Marie-Christine Chaillou : peintures à l'huile abstraites et sculptures en béton ciré",
    "author": {
      "@type": "Person",
      "name": "Marie-Christine Chaillou"
    },
    "numberOfItems": artworks.length,
    "mainEntity": {
      "@type": "ImageGallery",
      "name": "Galerie d'art abstrait Marie-Christine Chaillou",
      "image": filteredArtworks.slice(0, 10).map((artwork) => ({
        "@type": "VisualArtwork",
        "name": artwork.title,
        "artist": {
          "@type": "Person",
          "name": "Marie-Christine Chaillou"
        },
        "artMedium": artwork.technique,
        "artworkSurface": artwork.category === "peintures" ? "Toile" : "Béton ciré",
        "width": artwork.dimensions.split("×")[0]?.trim(),
        "height": artwork.dimensions.split("×")[1]?.split("cm")[0]?.trim(),
        "dateCreated": artwork.year,
        "description": artwork.description
      }))
    }
  };

  return (
    <Layout>
      <SEO 
        title="Galerie"
        description="Explorez la collection de peintures abstraites et sculptures en béton ciré de Marie-Christine Chaillou. Œuvres à l'huile au couteau, formes géométriques et couleurs vibrantes."
        canonical="/galerie"
        keywords="galerie art abstrait, peintures huile, sculptures béton ciré, art contemporain Nantes, œuvres Marie-Christine Chaillou"
        schema={gallerySchema}
      />
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-4">
              Galerie
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mes peintures sont des fenêtres ouvertes sur l'invisible. 
              Mes sculptures invitent au toucher, à la contemplation.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-3 sm:gap-4 mb-12 md:mb-20"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 sm:px-8 py-3 text-xs sm:text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background"
                    : "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container-narrow">
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredArtworks.map((artwork, index) => (
                <motion.article
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="aspect-square bg-muted/10 mb-4 overflow-hidden relative">
                  <motion.img
                      src={artwork.image}
                      alt={`${artwork.title} - ${artwork.technique} ${artwork.dimensions} par Marie-Christine Chaillou, artiste Nantes`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"
                    />
                  </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {artwork.technique} — {artwork.dimensions}
                          </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox - Fond noir profond */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4 md:p-8"
            onClick={() => {
              setSelectedArtwork(null);
              setIsFullscreen(false);
            }}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => {
                setSelectedArtwork(null);
                setIsFullscreen(false);
              }}
            >
              <X size={28} />
            </button>

            {/* Fullscreen toggle */}
            <button
              className="absolute top-6 right-20 text-white/70 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(!isFullscreen);
              }}
            >
              <Maximize2 size={24} />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
            >
              <ChevronRight size={48} />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col lg:flex-row gap-6 md:gap-12 items-center max-h-[90vh] ${
                isFullscreen ? 'w-full h-full justify-center' : 'max-w-6xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`overflow-hidden ${
                isFullscreen 
                  ? 'max-w-[90vw] max-h-[90vh]' 
                  : 'aspect-square w-full max-w-lg lg:max-w-2xl'
              }`}>
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                />
              </div>
              
              {!isFullscreen && (
                <div className="text-white text-center lg:text-left lg:max-w-xs">
                  <p className="text-white/50 text-sm md:text-base mb-1">
                    {selectedArtwork.technique}
                  </p>
                  <p className="text-white/50 text-sm md:text-base mb-1">
                    {selectedArtwork.dimensions}
                  </p>
                  <p className="text-white/50 text-sm md:text-base mb-6">
                    {selectedArtwork.year}
                  </p>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Galerie;
