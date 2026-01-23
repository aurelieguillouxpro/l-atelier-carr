import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { Button } from "@/components/ui/button";

// ============= IMAGE IMPORTS =============
// 2025
import acrylique2025_80x80 from "@/assets/artworks/2025-acrylique-80x80.jpg";
import acrylique2025_60x60 from "@/assets/artworks/2025-acrylique-60x60.jpg";
import acrylique2025_40x40 from "@/assets/artworks/2025-acrylique-40x40.jpg";

// 2024
import blancAcrylique2024_60x60 from "@/assets/artworks/2024-blanc-acrylique-60x60.jpg";
import blancAcrylique2024_40x40 from "@/assets/artworks/2024-blanc-acrylique-40x40.jpg";
import blancAcrylique2024_40x40_2 from "@/assets/artworks/2024-blanc-acrylique-40x40-2.jpg";
import acrylique2024_80x80 from "@/assets/artworks/2024-acrylique-80x80.jpg";
import acrylique2024_60x60 from "@/assets/artworks/2024-acrylique-60x60.jpg";
import acrylique2024_20x20 from "@/assets/artworks/2024-acrylique-20x20.jpg";

// 2023
import acrylique2023_80x80 from "@/assets/artworks/2023-acrylique-80x80.jpg";
import acrylique2023_80x80_2 from "@/assets/artworks/2023-acrylique-80x80-2.jpg";
import acrylique2023_40x40 from "@/assets/artworks/2023-acrylique-40x40.jpg";
import encreGestuelle from "@/assets/artworks/encre-gestuelle.jpg";

// 2020
import acrylique2020_80x80 from "@/assets/artworks/2020-acrylique-80x80.jpg";
import acrylique2020_40x40 from "@/assets/artworks/2020-acrylique-40x40.jpg";
import acrylique2020_20x20 from "@/assets/artworks/2020-acrylique-20x20.jpg";

// 2017
import acrylique2017_80x80 from "@/assets/artworks/2017-acrylique-80x80.jpg";
import acrylique2017_80x80_2 from "@/assets/artworks/2017-acrylique-80x80-2.jpg";
import acrylique2017_80x80_3 from "@/assets/artworks/2017-acrylique-80x80-3.jpg";

// 2013
import huileEmpatement2013_80x80 from "@/assets/artworks/2013-huile-empatement-80x80.jpg";
import huileEmpatement2013_80x80_2 from "@/assets/artworks/2013-huile-empatement-80x80-2.jpg";
import huileEmpatement2013_60x60 from "@/assets/artworks/2013-huile-empatement-60x60.jpg";

// 2012
import huileEmpatement2012_80x80 from "@/assets/artworks/2012-huile-empatement-80x80.jpg";
import huileEmpatement2012_80x80_2 from "@/assets/artworks/2012-huile-empatement-80x80-2.jpg";
import huileEmpatement2012_50x50 from "@/assets/artworks/2012-huile-empatement-50x50.jpg";
import huile2012_50x50 from "@/assets/artworks/2012-huile-50x50.jpg";
import huile2012_60x60 from "@/assets/artworks/2012-huile-60x60.jpg";
import huile2012_60x60_2 from "@/assets/artworks/2012-huile-60x60-2.jpg";

// 2010
import huileRougeNoir from "@/assets/artworks/huile-rouge-noir-2010.jpg";
import huileGrisRouge from "@/assets/artworks/huile-gris-rouge-2010.jpg";
import glacisBois2010_30x30 from "@/assets/artworks/2010-glacis-bois-30x30.jpg";
import glacisToile2010_30x30 from "@/assets/artworks/2010-glacis-toile-30x30.jpg";
import glacisToile2010_60x60 from "@/assets/artworks/2010-glacis-toile-60x60.jpg";

// 2009
import techniqueMixte2009 from "@/assets/artworks/2009-technique-mixte.jpg";
import techniqueMixte2009_2 from "@/assets/artworks/2009-technique-mixte-2.jpg";
import techniqueMixte2009_3 from "@/assets/artworks/2009-technique-mixte-3.jpg";

// 2008
import huile2008_60x60 from "@/assets/artworks/2008-huile-60x60.jpg";
import huile2008_60x60_2 from "@/assets/artworks/2008-huile-60x60-2.jpg";
import huile2008_80x80 from "@/assets/artworks/2008-huile-80x80.jpg";

// 2007
import huileBleuJaune from "@/assets/artworks/huile-bleu-jaune-2007.jpg";
import huileOrange from "@/assets/artworks/huile-orange-2007.jpg";
import huileJauneBleu from "@/assets/artworks/huile-jaune-bleu-2007.jpg";
import huileRougeGris from "@/assets/artworks/huile-rouge-gris-2007.jpg";
import huileTurquoise from "@/assets/artworks/huile-turquoise-2007.jpg";
import quadriptyque from "@/assets/artworks/quadriptyque-2007.jpg";

// 2006
import huileBleuCreme from "@/assets/artworks/huile-bleu-creme-2006.jpg";
import huileMarineOrange from "@/assets/artworks/huile-marine-orange-2006.jpg";
import huileBleuOrange from "@/assets/artworks/huile-bleu-orange-2006.jpg";
import huileGrisOrange from "@/assets/artworks/huile-gris-orange-2006.jpg";
import huileOcreGris from "@/assets/artworks/huile-ocre-gris-2006.jpg";
import huileBleuOcre from "@/assets/artworks/huile-bleu-ocre-2006.jpg";

// 2005
import huilePerspective from "@/assets/artworks/huile-perspective-2005.jpg";
import huileCouteau2005_60x60 from "@/assets/artworks/2005-huile-couteau-60x60.jpg";
import huileCouteau2005_50x50 from "@/assets/artworks/2005-huile-couteau-50x50.jpg";
import huileCouteau2005_40x40 from "@/assets/artworks/2005-huile-couteau-40x40.jpg";

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

// ============= ARTWORK DATA =============
interface Artwork {
  id: number;
  title: string;
  category: string;
  technique: string;
  dimensions: string;
  year: string;
  image: string;
  zoom?: number;
}

const artworks: Artwork[] = [
  // === PEINTURES (triées du plus récent au plus ancien) ===
  // 2025
  {
    id: 28,
    title: "Abstraction Graphique I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2025",
    image: acrylique2025_80x80,
  },
  {
    id: 29,
    title: "Abstraction Graphique II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "60 × 60 cm",
    year: "2025",
    image: acrylique2025_60x60,
  },
  {
    id: 30,
    title: "Abstraction Graphique III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2025",
    image: acrylique2025_40x40,
  },
  // 2024
  {
    id: 33,
    title: "Encre Gestuelle III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2024",
    image: blancAcrylique2024_40x40,
  },
  {
    id: 32,
    title: "Encre Gestuelle II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "60 × 60 cm",
    year: "2024",
    image: blancAcrylique2024_60x60,
  },
  {
    id: 34,
    title: "Encre Gestuelle IV",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2024",
    image: blancAcrylique2024_40x40_2,
  },
  {
    id: 31,
    title: "Encre Gestuelle I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2024",
    image: acrylique2024_80x80,
  },
  {
    id: 38,
    title: "Nocturne I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "60 × 60 cm",
    year: "2024",
    image: acrylique2024_60x60,
  },
  {
    id: 39,
    title: "Nocturne II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "20 × 20 cm",
    year: "2024",
    image: acrylique2024_20x20,
  },
  // 2023
  {
    id: 40,
    title: "Géométrie Rouge I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2023",
    image: acrylique2023_80x80,
  },
  {
    id: 41,
    title: "Géométrie Rouge II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2023",
    image: acrylique2023_80x80_2,
  },
  {
    id: 42,
    title: "Géométrie Rouge III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2023",
    image: acrylique2023_40x40,
  },
  // 2020
  {
    id: 43,
    title: "Trame Urbaine I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2020",
    image: acrylique2020_80x80,
  },
  {
    id: 44,
    title: "Trame Urbaine II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2020",
    image: acrylique2020_40x40,
  },
  {
    id: 45,
    title: "Trame Urbaine III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "20 × 20 cm",
    year: "2020",
    image: acrylique2020_20x20,
  },
  // 2017
  {
    id: 46,
    title: "Espace Coloré I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2017",
    image: acrylique2017_80x80,
  },
  {
    id: 47,
    title: "Espace Coloré II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2017",
    image: acrylique2017_80x80_2,
  },
  {
    id: 48,
    title: "Espace Coloré III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2017",
    image: acrylique2017_80x80_3,
  },
  // 2013
  {
    id: 49,
    title: "Matière Vibrante I",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "80 × 80 cm",
    year: "2013",
    image: huileEmpatement2013_80x80,
  },
  {
    id: 50,
    title: "Matière Vibrante II",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "80 × 80 cm",
    year: "2013",
    image: huileEmpatement2013_80x80_2,
  },
  {
    id: 51,
    title: "Matière Vibrante III",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "60 × 60 cm",
    year: "2013",
    image: huileEmpatement2013_60x60,
  },
  // 2012
  {
    id: 52,
    title: "Relief I",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "80 × 80 cm",
    year: "2012",
    image: huileEmpatement2012_80x80,
  },
  {
    id: 53,
    title: "Relief II",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "80 × 80 cm",
    year: "2012",
    image: huileEmpatement2012_80x80_2,
  },
  {
    id: 54,
    title: "Relief III",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "50 × 50 cm",
    year: "2012",
    image: huileEmpatement2012_50x50,
  },
  {
    id: 55,
    title: "Abstraction I",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "50 × 50 cm",
    year: "2012",
    image: huile2012_50x50,
  },
  {
    id: 56,
    title: "Abstraction II",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "60 × 60 cm",
    year: "2012",
    image: huile2012_60x60,
  },
  {
    id: 57,
    title: "Abstraction III",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "60 × 60 cm",
    year: "2012",
    image: huile2012_60x60_2,
  },
  // 2010
  {
    id: 1,
    title: "Tension Rouge",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "50 × 50 cm",
    year: "2010",
    image: huileRougeNoir,
  },
  {
    id: 2,
    title: "Équilibre",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "50 × 50 cm",
    year: "2010",
    image: huileGrisRouge,
  },
  {
    id: 58,
    title: "Glacis I",
    category: "peintures",
    technique: "Glacis à l'huile avec empâtement sur bois",
    dimensions: "30 × 30 cm",
    year: "2010",
    image: glacisBois2010_30x30,
  },
  {
    id: 59,
    title: "Glacis II",
    category: "peintures",
    technique: "Glacis à l'huile avec empâtement sur toile",
    dimensions: "30 × 30 cm",
    year: "2010",
    image: glacisToile2010_30x30,
  },
  {
    id: 60,
    title: "Glacis III",
    category: "peintures",
    technique: "Glacis à l'huile avec empâtement sur toile",
    dimensions: "60 × 60 cm",
    year: "2010",
    image: glacisToile2010_60x60,
  },
  // 2009
  {
    id: 61,
    title: "Composition Mixte I",
    category: "peintures",
    technique: "Technique mixte",
    dimensions: "50 × 65 cm",
    year: "2009",
    image: techniqueMixte2009,
  },
  {
    id: 62,
    title: "Composition Mixte II",
    category: "peintures",
    technique: "Technique mixte",
    dimensions: "50 × 65 cm",
    year: "2009",
    image: techniqueMixte2009_2,
  },
  {
    id: 63,
    title: "Composition Mixte III",
    category: "peintures",
    technique: "Technique mixte",
    dimensions: "50 × 65 cm",
    year: "2009",
    image: techniqueMixte2009_3,
  },
  // 2008
  {
    id: 64,
    title: "Structure Noire I",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "60 × 60 cm",
    year: "2008",
    image: huile2008_60x60,
  },
  {
    id: 65,
    title: "Structure Noire II",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "60 × 60 cm",
    year: "2008",
    image: huile2008_60x60_2,
  },
  {
    id: 66,
    title: "Structure Noire III",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "80 × 80 cm",
    year: "2008",
    image: huile2008_80x80,
  },
  // 2007
  {
    id: 3,
    title: "Symphonie Colorée",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    image: huileBleuJaune,
  },
  {
    id: 4,
    title: "Crépuscule",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    image: huileOrange,
  },
  {
    id: 5,
    title: "Dynamique Primaire",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    image: huileJauneBleu,
  },
  {
    id: 7,
    title: "Verticalité",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2007",
    image: huileRougeGris,
  },
  {
    id: 8,
    title: "Archipel",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2007",
    image: huileTurquoise,
  },
  {
    id: 9,
    title: "Quadriptyque Urbain",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "4 × 40 × 40 cm",
    year: "2007",
    image: quadriptyque,
  },
  // 2006
  {
    id: 10,
    title: "Horizon",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: huileBleuCreme,
  },
  {
    id: 11,
    title: "Architecture Marine",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: huileMarineOrange,
  },
  {
    id: 12,
    title: "Ouverture",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: huileBleuOrange,
  },
  {
    id: 13,
    title: "Métropole",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: huileGrisOrange,
  },
  {
    id: 14,
    title: "Passage",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: huileOcreGris,
  },
  {
    id: 15,
    title: "Sentinelle",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2006",
    image: huileBleuOcre,
  },
  // 2005
  {
    id: 16,
    title: "Perspective",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2005",
    image: huilePerspective,
  },
  {
    id: 35,
    title: "Composition I",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2005",
    image: huileCouteau2005_60x60,
  },
  {
    id: 36,
    title: "Composition II",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2005",
    image: huileCouteau2005_50x50,
  },
  {
    id: 37,
    title: "Composition III",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "40 × 40 cm",
    year: "2005",
    image: huileCouteau2005_40x40,
  },
  // === SCULPTURES (triées du plus récent au plus ancien) ===
  {
    id: 23,
    title: "Envol",
    category: "sculptures",
    technique: "Bronze patiné noir",
    dimensions: "35 × 30 × 25 cm",
    year: "2025",
    image: sculptureNoireDynamique,
    zoom: 1.5,
  },
  {
    id: 20,
    title: "Architecture",
    category: "sculptures",
    technique: "Béton ciré bicolore",
    dimensions: "40 × 20 × 15 cm",
    year: "2024",
    image: sculptureGeometrique,
    zoom: 1.3,
  },
  {
    id: 21,
    title: "Élévation",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "38 × 12 × 10 cm",
    year: "2024",
    image: sculptureElancee,
    zoom: 1.4,
  },
  {
    id: 17,
    title: "Silhouette",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "35 × 12 × 10 cm",
    year: "2023",
    image: sculptureBlanche,
    zoom: 1.4,
  },
  {
    id: 19,
    title: "Mouvement",
    category: "sculptures",
    technique: "Bronze patiné",
    dimensions: "30 × 25 × 20 cm",
    year: "2023",
    image: sculptureNoire,
    zoom: 1.6,
  },
  {
    id: 18,
    title: "Vitrail",
    category: "sculptures",
    technique: "Bois peint",
    dimensions: "45 × 15 × 8 cm",
    year: "2022",
    image: sculptureColoree,
    zoom: 1.3,
  },
  {
    id: 22,
    title: "Contemplation",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "30 × 20 × 15 cm",
    year: "2021",
    image: sculptureSignee,
    zoom: 1.5,
  },
  {
    id: 24,
    title: "Monument",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "60 × 35 × 30 cm",
    year: "2020",
    image: sculptureMonumentale,
    zoom: 1.3,
  },
  {
    id: 25,
    title: "Édifice",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "45 × 20 × 15 cm",
    year: "2019",
    image: sculptureArchitecturale,
    zoom: 1.4,
  },
  {
    id: 26,
    title: "Grâce",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "50 × 15 × 12 cm",
    year: "2019",
    image: sculptureFeminine,
    zoom: 1.4,
  },
  {
    id: 27,
    title: "Gardien",
    category: "sculptures",
    technique: "Béton moucheté",
    dimensions: "35 × 10 × 8 cm",
    year: "2018",
    image: sculptureTotemique,
    zoom: 1.5,
  },
];

const categories = [
  { id: "all", label: "Tout" },
  { id: "peintures", label: "Peintures" },
  { id: "sculptures", label: "Sculptures" },
];

const ITEMS_PER_PAGE = 12;

const Galerie = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredArtworks = activeCategory === "all"
    ? artworks
    : artworks.filter((art) => art.category === activeCategory);

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  const visibleArtworks = filteredArtworks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArtworks.length;

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

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredArtworks.length));
  };

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://carrementabstrait.com/galerie/#collection",
    "name": "Galerie d'Art Abstrait - Peintures et Sculptures",
    "description": "Collection complète des œuvres de Marie-Christine Chaillou : peintures à l'huile abstraites au couteau et sculptures en béton ciré. Art contemporain à Nantes.",
    "url": "https://carrementabstrait.com/galerie",
    "author": {
      "@type": "Person",
      "@id": "https://carrementabstrait.com/#artist",
      "name": "Marie-Christine Chaillou"
    },
    "about": {
      "@type": "Thing",
      "name": "Art abstrait contemporain"
    },
    "numberOfItems": artworks.length,
    "mainEntity": {
      "@type": "ImageGallery",
      "name": "Galerie d'art abstrait Marie-Christine Chaillou",
      "description": "Peintures à l'huile au couteau et sculptures en béton ciré",
      "image": filteredArtworks.slice(0, 12).map((artwork) => ({
        "@type": "VisualArtwork",
        "name": artwork.title,
        "alternateName": `${artwork.technique} - ${artwork.title}`,
        "artist": {
          "@type": "Person",
          "@id": "https://carrementabstrait.com/#artist",
          "name": "Marie-Christine Chaillou"
        },
        "artMedium": artwork.technique,
        "artform": artwork.category === "peintures" ? "Peinture abstraite" : "Sculpture contemporaine",
        "artworkSurface": artwork.category === "peintures" ? "Toile" : "Béton ciré",
        "width": {
          "@type": "Distance",
          "name": artwork.dimensions.split("×")[0]?.trim() + " cm"
        },
        "height": {
          "@type": "Distance", 
          "name": artwork.dimensions.split("×")[1]?.split("cm")[0]?.trim() + " cm"
        },
        "dateCreated": artwork.year,
        "creator": {
          "@type": "Person",
          "name": "Marie-Christine Chaillou"
        }
      }))
    }
  };

  return (
    <Layout>
      <SEO 
        title="Galerie - Peintures et Sculptures Abstraites"
        description="Explorez la galerie de Marie-Christine Chaillou : peintures abstraites, techniques mixtes et sculptures en béton ciré et bois. Art contemporain Nantes."
        canonical="/galerie"
        keywords="galerie art abstrait Nantes, peintures abstraites, sculptures béton ciré, art contemporain Loire-Atlantique, œuvres Marie-Christine Chaillou, artiste plasticienne"
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
              Un univers abstrait où chaque œuvre invite à l'interprétation.
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
              {visibleArtworks.map((artwork, index) => (
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
                    <OptimizedImage
                      src={artwork.image}
                      alt={`${artwork.title} - ${artwork.technique} ${artwork.dimensions} par Marie-Christine Chaillou, artiste Nantes`}
                      className="w-full h-full object-cover object-center"
                      containerClassName="w-full h-full"
                      style={{ transform: `scale(${artwork.zoom || 1})` }}
                      whileHover={{ scale: (artwork.zoom || 1) * 1.05 }}
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

          {/* Load More Button */}
          {hasMore && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center mt-16 gap-4"
            >
              <p className="text-sm text-muted-foreground">
                {visibleCount} / {filteredArtworks.length} œuvres
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={loadMore}
                className="px-12 py-6 text-sm uppercase tracking-[0.15em] border-foreground/20 hover:border-foreground/50 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Voir plus d'œuvres
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
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
              aria-label="Fermer"
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
              aria-label="Plein écran"
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
              aria-label="Image précédente"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              aria-label="Image suivante"
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
              <div className={`relative overflow-hidden ${
                isFullscreen 
                  ? 'max-w-[90vw] max-h-[90vh]' 
                  : 'aspect-square w-full max-w-lg lg:max-w-2xl'
              }`}>
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'} transition-opacity duration-300`}
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
                  <p className="text-white/50 text-sm md:text-base">
                    {selectedArtwork.year}
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
