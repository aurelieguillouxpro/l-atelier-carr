import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Placeholder data - to be replaced with actual artworks
const artworks = [
  {
    id: 1,
    title: "Éclat d'aurore",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "80 × 100 cm",
    description: "Une explosion de jaunes et d'orangés, comme un soleil naissant sur une mer d'encre."
  },
  {
    id: 2,
    title: "Murmures de pierre",
    category: "sculptures",
    technique: "Béton ciré",
    dimensions: "45 × 30 × 25 cm",
    description: "Formes organiques qui invitent au toucher, entre douceur et solidité."
  },
  {
    id: 3,
    title: "Dialogue intérieur",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "120 × 100 cm",
    description: "Bleus profonds et touches de carmin en conversation silencieuse."
  },
  {
    id: 4,
    title: "Équilibre suspendu",
    category: "sculptures",
    technique: "Béton ciré",
    dimensions: "60 × 40 × 35 cm",
    description: "La gravité apprivoisée, une méditation sur la légèreté."
  },
  {
    id: 5,
    title: "Fragments d'horizon",
    category: "peintures",
    technique: "Technique mixte",
    dimensions: "100 × 80 cm",
    description: "Là où le ciel rencontre la terre dans un éclat de cobalt."
  },
  {
    id: 6,
    title: "Silence doré",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "90 × 90 cm",
    description: "L'or se pose délicatement sur un océan de nuances subtiles."
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
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Collection</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
              Galerie
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Mes peintures sont des fenêtres ouvertes sur l'invisible. 
              Mes sculptures invitent au toucher, à la contemplation.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center gap-2 md:gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 md:px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-background"
                    : "border border-border text-foreground/60 hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32">
        <div className="container-narrow">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArtworks.map((artwork, index) => (
                <motion.article
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="aspect-[4/5] bg-secondary/50 mb-6 overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <span className="text-sm tracking-widest uppercase">Image</span>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                  <h3 className="text-lg tracking-wide group-hover:text-primary transition-colors duration-300">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {artwork.technique} — {artwork.dimensions}
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedArtwork(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-8 right-8 text-foreground/60 hover:text-primary transition-colors duration-300"
              onClick={() => setSelectedArtwork(null)}
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 md:left-12 text-foreground/40 hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button
              className="absolute right-4 md:right-12 text-foreground/40 hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/5] bg-secondary/30 flex items-center justify-center text-muted-foreground glow-gold">
                <span className="tracking-widest uppercase">Image de l'œuvre</span>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
                  {selectedArtwork.category === "peintures" ? "Peinture" : "Sculpture"}
                </p>
                <h2 className="text-4xl md:text-5xl tracking-wide mb-6">
                  {selectedArtwork.title}
                </h2>
                <p className="text-foreground/50 mb-2">
                  {selectedArtwork.technique}
                </p>
                <p className="text-foreground/50 mb-8">
                  {selectedArtwork.dimensions}
                </p>
                <p className="font-accent text-xl text-foreground/70 leading-relaxed">
                  {selectedArtwork.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Galerie;
