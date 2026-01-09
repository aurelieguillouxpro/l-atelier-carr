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
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
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
            className="flex justify-center gap-4 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 text-sm uppercase tracking-widest transition-colors ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background"
                    : "bg-transparent text-foreground hover:bg-foreground/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
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
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-muted/30 to-muted/10 mb-4 overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/50">
                      <span className="text-sm">Image</span>
                    </div>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedArtwork(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-background hover:text-background/70 transition-colors"
              onClick={() => setSelectedArtwork(null)}
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 md:left-8 text-background hover:text-background/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 md:right-8 text-background hover:text-background/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
            >
              <ChevronRight size={48} />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full grid lg:grid-cols-2 gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/5] bg-muted/20 flex items-center justify-center text-background/50">
                <span>Image de l'œuvre</span>
              </div>
              <div className="text-background">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  {selectedArtwork.title}
                </h2>
                <p className="text-background/60 mb-2">
                  {selectedArtwork.technique}
                </p>
                <p className="text-background/60 mb-6">
                  {selectedArtwork.dimensions}
                </p>
                <p className="font-accent text-lg text-background/80 leading-relaxed">
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
