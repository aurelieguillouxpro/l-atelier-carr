import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Loader2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import OptimizedImage, { usePreloadImage } from "@/components/OptimizedImage";
import { Button } from "@/components/ui/button";

// ============= MULTI-SIZE IMAGE IMPORTS =============
// 2025
import acrylique2025_80x80_sm from "@/assets/artworks/2025-acrylique-80x80.jpg?w=400&format=webp&quality=80";
import acrylique2025_80x80_md from "@/assets/artworks/2025-acrylique-80x80.jpg?w=800&format=webp&quality=80";
import acrylique2025_80x80_lg from "@/assets/artworks/2025-acrylique-80x80.jpg?w=1200&format=webp&quality=85";
import acrylique2025_60x60_sm from "@/assets/artworks/2025-acrylique-60x60.jpg?w=400&format=webp&quality=80";
import acrylique2025_60x60_md from "@/assets/artworks/2025-acrylique-60x60.jpg?w=800&format=webp&quality=80";
import acrylique2025_60x60_lg from "@/assets/artworks/2025-acrylique-60x60.jpg?w=1200&format=webp&quality=85";
import acrylique2025_40x40_sm from "@/assets/artworks/2025-acrylique-40x40.jpg?w=400&format=webp&quality=80";
import acrylique2025_40x40_md from "@/assets/artworks/2025-acrylique-40x40.jpg?w=800&format=webp&quality=80";
import acrylique2025_40x40_lg from "@/assets/artworks/2025-acrylique-40x40.jpg?w=1200&format=webp&quality=85";

// 2024
import blancAcrylique2024_60x60_sm from "@/assets/artworks/2024-blanc-acrylique-60x60.jpg?w=400&format=webp&quality=80";
import blancAcrylique2024_60x60_md from "@/assets/artworks/2024-blanc-acrylique-60x60.jpg?w=800&format=webp&quality=80";
import blancAcrylique2024_60x60_lg from "@/assets/artworks/2024-blanc-acrylique-60x60.jpg?w=1200&format=webp&quality=85";
import blancAcrylique2024_40x40_sm from "@/assets/artworks/2024-blanc-acrylique-40x40.jpg?w=400&format=webp&quality=80";
import blancAcrylique2024_40x40_md from "@/assets/artworks/2024-blanc-acrylique-40x40.jpg?w=800&format=webp&quality=80";
import blancAcrylique2024_40x40_lg from "@/assets/artworks/2024-blanc-acrylique-40x40.jpg?w=1200&format=webp&quality=85";
import blancAcrylique2024_40x40_2_sm from "@/assets/artworks/2024-blanc-acrylique-40x40-2.jpg?w=400&format=webp&quality=80";
import blancAcrylique2024_40x40_2_md from "@/assets/artworks/2024-blanc-acrylique-40x40-2.jpg?w=800&format=webp&quality=80";
import blancAcrylique2024_40x40_2_lg from "@/assets/artworks/2024-blanc-acrylique-40x40-2.jpg?w=1200&format=webp&quality=85";
import acrylique2024_80x80_sm from "@/assets/artworks/2024-acrylique-80x80.jpg?w=400&format=webp&quality=80";
import acrylique2024_80x80_md from "@/assets/artworks/2024-acrylique-80x80.jpg?w=800&format=webp&quality=80";
import acrylique2024_80x80_lg from "@/assets/artworks/2024-acrylique-80x80.jpg?w=1200&format=webp&quality=85";
import acrylique2024_60x60_sm from "@/assets/artworks/2024-acrylique-60x60.jpg?w=400&format=webp&quality=80";
import acrylique2024_60x60_md from "@/assets/artworks/2024-acrylique-60x60.jpg?w=800&format=webp&quality=80";
import acrylique2024_60x60_lg from "@/assets/artworks/2024-acrylique-60x60.jpg?w=1200&format=webp&quality=85";
import acrylique2024_20x20_sm from "@/assets/artworks/2024-acrylique-20x20.jpg?w=400&format=webp&quality=80";
import acrylique2024_20x20_md from "@/assets/artworks/2024-acrylique-20x20.jpg?w=800&format=webp&quality=80";
import acrylique2024_20x20_lg from "@/assets/artworks/2024-acrylique-20x20.jpg?w=1200&format=webp&quality=85";

// 2023
import acrylique2023_80x80_sm from "@/assets/artworks/2023-acrylique-80x80.jpg?w=400&format=webp&quality=80";
import acrylique2023_80x80_md from "@/assets/artworks/2023-acrylique-80x80.jpg?w=800&format=webp&quality=80";
import acrylique2023_80x80_lg from "@/assets/artworks/2023-acrylique-80x80.jpg?w=1200&format=webp&quality=85";
import acrylique2023_80x80_2_sm from "@/assets/artworks/2023-acrylique-80x80-2.jpg?w=400&format=webp&quality=80";
import acrylique2023_80x80_2_md from "@/assets/artworks/2023-acrylique-80x80-2.jpg?w=800&format=webp&quality=80";
import acrylique2023_80x80_2_lg from "@/assets/artworks/2023-acrylique-80x80-2.jpg?w=1200&format=webp&quality=85";
import acrylique2023_40x40_sm from "@/assets/artworks/2023-acrylique-40x40.jpg?w=400&format=webp&quality=80";
import acrylique2023_40x40_md from "@/assets/artworks/2023-acrylique-40x40.jpg?w=800&format=webp&quality=80";
import acrylique2023_40x40_lg from "@/assets/artworks/2023-acrylique-40x40.jpg?w=1200&format=webp&quality=85";
import encreGestuelle_sm from "@/assets/artworks/encre-gestuelle.jpg?w=400&format=webp&quality=80";
import encreGestuelle_md from "@/assets/artworks/encre-gestuelle.jpg?w=800&format=webp&quality=80";
import encreGestuelle_lg from "@/assets/artworks/encre-gestuelle.jpg?w=1200&format=webp&quality=85";

// 2020
import acrylique2020_80x80_sm from "@/assets/artworks/2020-acrylique-80x80.jpg?w=400&format=webp&quality=80";
import acrylique2020_80x80_md from "@/assets/artworks/2020-acrylique-80x80.jpg?w=800&format=webp&quality=80";
import acrylique2020_80x80_lg from "@/assets/artworks/2020-acrylique-80x80.jpg?w=1200&format=webp&quality=85";
import acrylique2020_40x40_sm from "@/assets/artworks/2020-acrylique-40x40.jpg?w=400&format=webp&quality=80";
import acrylique2020_40x40_md from "@/assets/artworks/2020-acrylique-40x40.jpg?w=800&format=webp&quality=80";
import acrylique2020_40x40_lg from "@/assets/artworks/2020-acrylique-40x40.jpg?w=1200&format=webp&quality=85";
import acrylique2020_20x20_sm from "@/assets/artworks/2020-acrylique-20x20.jpg?w=400&format=webp&quality=80";
import acrylique2020_20x20_md from "@/assets/artworks/2020-acrylique-20x20.jpg?w=800&format=webp&quality=80";
import acrylique2020_20x20_lg from "@/assets/artworks/2020-acrylique-20x20.jpg?w=1200&format=webp&quality=85";

// 2017
import acrylique2017_80x80_sm from "@/assets/artworks/2017-acrylique-80x80.jpg?w=400&format=webp&quality=80";
import acrylique2017_80x80_md from "@/assets/artworks/2017-acrylique-80x80.jpg?w=800&format=webp&quality=80";
import acrylique2017_80x80_lg from "@/assets/artworks/2017-acrylique-80x80.jpg?w=1200&format=webp&quality=85";
import acrylique2017_80x80_2_sm from "@/assets/artworks/2017-acrylique-80x80-2.jpg?w=400&format=webp&quality=80";
import acrylique2017_80x80_2_md from "@/assets/artworks/2017-acrylique-80x80-2.jpg?w=800&format=webp&quality=80";
import acrylique2017_80x80_2_lg from "@/assets/artworks/2017-acrylique-80x80-2.jpg?w=1200&format=webp&quality=85";
import acrylique2017_80x80_3_sm from "@/assets/artworks/2017-acrylique-80x80-3.jpg?w=400&format=webp&quality=80";
import acrylique2017_80x80_3_md from "@/assets/artworks/2017-acrylique-80x80-3.jpg?w=800&format=webp&quality=80";
import acrylique2017_80x80_3_lg from "@/assets/artworks/2017-acrylique-80x80-3.jpg?w=1200&format=webp&quality=85";

// 2013
import huileEmpatement2013_80x80_sm from "@/assets/artworks/2013-huile-empatement-80x80.jpg?w=400&format=webp&quality=80";
import huileEmpatement2013_80x80_md from "@/assets/artworks/2013-huile-empatement-80x80.jpg?w=800&format=webp&quality=80";
import huileEmpatement2013_80x80_lg from "@/assets/artworks/2013-huile-empatement-80x80.jpg?w=1200&format=webp&quality=85";
import huileEmpatement2013_80x80_2_sm from "@/assets/artworks/2013-huile-empatement-80x80-2.jpg?w=400&format=webp&quality=80";
import huileEmpatement2013_80x80_2_md from "@/assets/artworks/2013-huile-empatement-80x80-2.jpg?w=800&format=webp&quality=80";
import huileEmpatement2013_80x80_2_lg from "@/assets/artworks/2013-huile-empatement-80x80-2.jpg?w=1200&format=webp&quality=85";
import huileEmpatement2013_60x60_sm from "@/assets/artworks/2013-huile-empatement-60x60.jpg?w=400&format=webp&quality=80";
import huileEmpatement2013_60x60_md from "@/assets/artworks/2013-huile-empatement-60x60.jpg?w=800&format=webp&quality=80";
import huileEmpatement2013_60x60_lg from "@/assets/artworks/2013-huile-empatement-60x60.jpg?w=1200&format=webp&quality=85";

// 2012
import huileEmpatement2012_80x80_sm from "@/assets/artworks/2012-huile-empatement-80x80.jpg?w=400&format=webp&quality=80";
import huileEmpatement2012_80x80_md from "@/assets/artworks/2012-huile-empatement-80x80.jpg?w=800&format=webp&quality=80";
import huileEmpatement2012_80x80_lg from "@/assets/artworks/2012-huile-empatement-80x80.jpg?w=1200&format=webp&quality=85";
import huileEmpatement2012_80x80_2_sm from "@/assets/artworks/2012-huile-empatement-80x80-2.jpg?w=400&format=webp&quality=80";
import huileEmpatement2012_80x80_2_md from "@/assets/artworks/2012-huile-empatement-80x80-2.jpg?w=800&format=webp&quality=80";
import huileEmpatement2012_80x80_2_lg from "@/assets/artworks/2012-huile-empatement-80x80-2.jpg?w=1200&format=webp&quality=85";
import huileEmpatement2012_50x50_sm from "@/assets/artworks/2012-huile-empatement-50x50.jpg?w=400&format=webp&quality=80";
import huileEmpatement2012_50x50_md from "@/assets/artworks/2012-huile-empatement-50x50.jpg?w=800&format=webp&quality=80";
import huileEmpatement2012_50x50_lg from "@/assets/artworks/2012-huile-empatement-50x50.jpg?w=1200&format=webp&quality=85";
import huile2012_50x50_sm from "@/assets/artworks/2012-huile-50x50.jpg?w=400&format=webp&quality=80";
import huile2012_50x50_md from "@/assets/artworks/2012-huile-50x50.jpg?w=800&format=webp&quality=80";
import huile2012_50x50_lg from "@/assets/artworks/2012-huile-50x50.jpg?w=1200&format=webp&quality=85";
import huile2012_60x60_sm from "@/assets/artworks/2012-huile-60x60.jpg?w=400&format=webp&quality=80";
import huile2012_60x60_md from "@/assets/artworks/2012-huile-60x60.jpg?w=800&format=webp&quality=80";
import huile2012_60x60_lg from "@/assets/artworks/2012-huile-60x60.jpg?w=1200&format=webp&quality=85";
import huile2012_60x60_2_sm from "@/assets/artworks/2012-huile-60x60-2.jpg?w=400&format=webp&quality=80";
import huile2012_60x60_2_md from "@/assets/artworks/2012-huile-60x60-2.jpg?w=800&format=webp&quality=80";
import huile2012_60x60_2_lg from "@/assets/artworks/2012-huile-60x60-2.jpg?w=1200&format=webp&quality=85";

// 2010
import huileRougeNoir_sm from "@/assets/artworks/huile-rouge-noir-2010.jpg?w=400&format=webp&quality=80";
import huileRougeNoir_md from "@/assets/artworks/huile-rouge-noir-2010.jpg?w=800&format=webp&quality=80";
import huileRougeNoir_lg from "@/assets/artworks/huile-rouge-noir-2010.jpg?w=1200&format=webp&quality=85";
import huileGrisRouge_sm from "@/assets/artworks/huile-gris-rouge-2010.jpg?w=400&format=webp&quality=80";
import huileGrisRouge_md from "@/assets/artworks/huile-gris-rouge-2010.jpg?w=800&format=webp&quality=80";
import huileGrisRouge_lg from "@/assets/artworks/huile-gris-rouge-2010.jpg?w=1200&format=webp&quality=85";
import glacisBois2010_30x30_sm from "@/assets/artworks/2010-glacis-bois-30x30.jpg?w=400&format=webp&quality=80";
import glacisBois2010_30x30_md from "@/assets/artworks/2010-glacis-bois-30x30.jpg?w=800&format=webp&quality=80";
import glacisBois2010_30x30_lg from "@/assets/artworks/2010-glacis-bois-30x30.jpg?w=1200&format=webp&quality=85";
import glacisToile2010_30x30_sm from "@/assets/artworks/2010-glacis-toile-30x30.jpg?w=400&format=webp&quality=80";
import glacisToile2010_30x30_md from "@/assets/artworks/2010-glacis-toile-30x30.jpg?w=800&format=webp&quality=80";
import glacisToile2010_30x30_lg from "@/assets/artworks/2010-glacis-toile-30x30.jpg?w=1200&format=webp&quality=85";
import glacisToile2010_60x60_sm from "@/assets/artworks/2010-glacis-toile-60x60.jpg?w=400&format=webp&quality=80";
import glacisToile2010_60x60_md from "@/assets/artworks/2010-glacis-toile-60x60.jpg?w=800&format=webp&quality=80";
import glacisToile2010_60x60_lg from "@/assets/artworks/2010-glacis-toile-60x60.jpg?w=1200&format=webp&quality=85";

// 2009
import techniqueMixte2009_sm from "@/assets/artworks/2009-technique-mixte.jpg?w=400&format=webp&quality=80";
import techniqueMixte2009_md from "@/assets/artworks/2009-technique-mixte.jpg?w=800&format=webp&quality=80";
import techniqueMixte2009_lg from "@/assets/artworks/2009-technique-mixte.jpg?w=1200&format=webp&quality=85";
import techniqueMixte2009_2_sm from "@/assets/artworks/2009-technique-mixte-2.jpg?w=400&format=webp&quality=80";
import techniqueMixte2009_2_md from "@/assets/artworks/2009-technique-mixte-2.jpg?w=800&format=webp&quality=80";
import techniqueMixte2009_2_lg from "@/assets/artworks/2009-technique-mixte-2.jpg?w=1200&format=webp&quality=85";
import techniqueMixte2009_3_sm from "@/assets/artworks/2009-technique-mixte-3.jpg?w=400&format=webp&quality=80";
import techniqueMixte2009_3_md from "@/assets/artworks/2009-technique-mixte-3.jpg?w=800&format=webp&quality=80";
import techniqueMixte2009_3_lg from "@/assets/artworks/2009-technique-mixte-3.jpg?w=1200&format=webp&quality=85";

// 2008
import huile2008_60x60_sm from "@/assets/artworks/2008-huile-60x60.jpg?w=400&format=webp&quality=80";
import huile2008_60x60_md from "@/assets/artworks/2008-huile-60x60.jpg?w=800&format=webp&quality=80";
import huile2008_60x60_lg from "@/assets/artworks/2008-huile-60x60.jpg?w=1200&format=webp&quality=85";
import huile2008_60x60_2_sm from "@/assets/artworks/2008-huile-60x60-2.jpg?w=400&format=webp&quality=80";
import huile2008_60x60_2_md from "@/assets/artworks/2008-huile-60x60-2.jpg?w=800&format=webp&quality=80";
import huile2008_60x60_2_lg from "@/assets/artworks/2008-huile-60x60-2.jpg?w=1200&format=webp&quality=85";
import huile2008_80x80_sm from "@/assets/artworks/2008-huile-80x80.jpg?w=400&format=webp&quality=80";
import huile2008_80x80_md from "@/assets/artworks/2008-huile-80x80.jpg?w=800&format=webp&quality=80";
import huile2008_80x80_lg from "@/assets/artworks/2008-huile-80x80.jpg?w=1200&format=webp&quality=85";

// 2007
import huileBleuJaune_sm from "@/assets/artworks/huile-bleu-jaune-2007.jpg?w=400&format=webp&quality=80";
import huileBleuJaune_md from "@/assets/artworks/huile-bleu-jaune-2007.jpg?w=800&format=webp&quality=80";
import huileBleuJaune_lg from "@/assets/artworks/huile-bleu-jaune-2007.jpg?w=1200&format=webp&quality=85";
import huileOrange_sm from "@/assets/artworks/huile-orange-2007.jpg?w=400&format=webp&quality=80";
import huileOrange_md from "@/assets/artworks/huile-orange-2007.jpg?w=800&format=webp&quality=80";
import huileOrange_lg from "@/assets/artworks/huile-orange-2007.jpg?w=1200&format=webp&quality=85";
import huileJauneBleu_sm from "@/assets/artworks/huile-jaune-bleu-2007.jpg?w=400&format=webp&quality=80";
import huileJauneBleu_md from "@/assets/artworks/huile-jaune-bleu-2007.jpg?w=800&format=webp&quality=80";
import huileJauneBleu_lg from "@/assets/artworks/huile-jaune-bleu-2007.jpg?w=1200&format=webp&quality=85";
import huileRougeGris_sm from "@/assets/artworks/huile-rouge-gris-2007.jpg?w=400&format=webp&quality=80";
import huileRougeGris_md from "@/assets/artworks/huile-rouge-gris-2007.jpg?w=800&format=webp&quality=80";
import huileRougeGris_lg from "@/assets/artworks/huile-rouge-gris-2007.jpg?w=1200&format=webp&quality=85";
import huileTurquoise_sm from "@/assets/artworks/huile-turquoise-2007.jpg?w=400&format=webp&quality=80";
import huileTurquoise_md from "@/assets/artworks/huile-turquoise-2007.jpg?w=800&format=webp&quality=80";
import huileTurquoise_lg from "@/assets/artworks/huile-turquoise-2007.jpg?w=1200&format=webp&quality=85";
import quadriptyque_sm from "@/assets/artworks/quadriptyque-2007.jpg?w=400&format=webp&quality=80";
import quadriptyque_md from "@/assets/artworks/quadriptyque-2007.jpg?w=800&format=webp&quality=80";
import quadriptyque_lg from "@/assets/artworks/quadriptyque-2007.jpg?w=1200&format=webp&quality=85";

// 2006
import huileBleuCreme_sm from "@/assets/artworks/huile-bleu-creme-2006.jpg?w=400&format=webp&quality=80";
import huileBleuCreme_md from "@/assets/artworks/huile-bleu-creme-2006.jpg?w=800&format=webp&quality=80";
import huileBleuCreme_lg from "@/assets/artworks/huile-bleu-creme-2006.jpg?w=1200&format=webp&quality=85";
import huileMarineOrange_sm from "@/assets/artworks/huile-marine-orange-2006.jpg?w=400&format=webp&quality=80";
import huileMarineOrange_md from "@/assets/artworks/huile-marine-orange-2006.jpg?w=800&format=webp&quality=80";
import huileMarineOrange_lg from "@/assets/artworks/huile-marine-orange-2006.jpg?w=1200&format=webp&quality=85";
import huileBleuOrange_sm from "@/assets/artworks/huile-bleu-orange-2006.jpg?w=400&format=webp&quality=80";
import huileBleuOrange_md from "@/assets/artworks/huile-bleu-orange-2006.jpg?w=800&format=webp&quality=80";
import huileBleuOrange_lg from "@/assets/artworks/huile-bleu-orange-2006.jpg?w=1200&format=webp&quality=85";
import huileGrisOrange_sm from "@/assets/artworks/huile-gris-orange-2006.jpg?w=400&format=webp&quality=80";
import huileGrisOrange_md from "@/assets/artworks/huile-gris-orange-2006.jpg?w=800&format=webp&quality=80";
import huileGrisOrange_lg from "@/assets/artworks/huile-gris-orange-2006.jpg?w=1200&format=webp&quality=85";
import huileOcreGris_sm from "@/assets/artworks/huile-ocre-gris-2006.jpg?w=400&format=webp&quality=80";
import huileOcreGris_md from "@/assets/artworks/huile-ocre-gris-2006.jpg?w=800&format=webp&quality=80";
import huileOcreGris_lg from "@/assets/artworks/huile-ocre-gris-2006.jpg?w=1200&format=webp&quality=85";
import huileBleuOcre_sm from "@/assets/artworks/huile-bleu-ocre-2006.jpg?w=400&format=webp&quality=80";
import huileBleuOcre_md from "@/assets/artworks/huile-bleu-ocre-2006.jpg?w=800&format=webp&quality=80";
import huileBleuOcre_lg from "@/assets/artworks/huile-bleu-ocre-2006.jpg?w=1200&format=webp&quality=85";

// 2005
import huilePerspective_sm from "@/assets/artworks/huile-perspective-2005.jpg?w=400&format=webp&quality=80";
import huilePerspective_md from "@/assets/artworks/huile-perspective-2005.jpg?w=800&format=webp&quality=80";
import huilePerspective_lg from "@/assets/artworks/huile-perspective-2005.jpg?w=1200&format=webp&quality=85";
import huileCouteau2005_60x60_sm from "@/assets/artworks/2005-huile-couteau-60x60.jpg?w=400&format=webp&quality=80";
import huileCouteau2005_60x60_md from "@/assets/artworks/2005-huile-couteau-60x60.jpg?w=800&format=webp&quality=80";
import huileCouteau2005_60x60_lg from "@/assets/artworks/2005-huile-couteau-60x60.jpg?w=1200&format=webp&quality=85";
import huileCouteau2005_50x50_sm from "@/assets/artworks/2005-huile-couteau-50x50.jpg?w=400&format=webp&quality=80";
import huileCouteau2005_50x50_md from "@/assets/artworks/2005-huile-couteau-50x50.jpg?w=800&format=webp&quality=80";
import huileCouteau2005_50x50_lg from "@/assets/artworks/2005-huile-couteau-50x50.jpg?w=1200&format=webp&quality=85";
import huileCouteau2005_40x40_sm from "@/assets/artworks/2005-huile-couteau-40x40.jpg?w=400&format=webp&quality=80";
import huileCouteau2005_40x40_md from "@/assets/artworks/2005-huile-couteau-40x40.jpg?w=800&format=webp&quality=80";
import huileCouteau2005_40x40_lg from "@/assets/artworks/2005-huile-couteau-40x40.jpg?w=1200&format=webp&quality=85";

// Sculptures
import sculptureBlanche_sm from "@/assets/artworks/sculpture-blanche-organique.jpg?w=400&format=webp&quality=80";
import sculptureBlanche_md from "@/assets/artworks/sculpture-blanche-organique.jpg?w=800&format=webp&quality=80";
import sculptureBlanche_lg from "@/assets/artworks/sculpture-blanche-organique.jpg?w=1200&format=webp&quality=85";
import sculptureColoree_sm from "@/assets/artworks/sculpture-coloree.jpg?w=400&format=webp&quality=80";
import sculptureColoree_md from "@/assets/artworks/sculpture-coloree.jpg?w=800&format=webp&quality=80";
import sculptureColoree_lg from "@/assets/artworks/sculpture-coloree.jpg?w=1200&format=webp&quality=85";
import sculptureNoire_sm from "@/assets/artworks/sculpture-noire.jpg?w=400&format=webp&quality=80";
import sculptureNoire_md from "@/assets/artworks/sculpture-noire.jpg?w=800&format=webp&quality=80";
import sculptureNoire_lg from "@/assets/artworks/sculpture-noire.jpg?w=1200&format=webp&quality=85";
import sculptureGeometrique_sm from "@/assets/artworks/sculpture-geometrique.jpg?w=400&format=webp&quality=80";
import sculptureGeometrique_md from "@/assets/artworks/sculpture-geometrique.jpg?w=800&format=webp&quality=80";
import sculptureGeometrique_lg from "@/assets/artworks/sculpture-geometrique.jpg?w=1200&format=webp&quality=85";
import sculptureElancee_sm from "@/assets/artworks/sculpture-elancee.jpg?w=400&format=webp&quality=80";
import sculptureElancee_md from "@/assets/artworks/sculpture-elancee.jpg?w=800&format=webp&quality=80";
import sculptureElancee_lg from "@/assets/artworks/sculpture-elancee.jpg?w=1200&format=webp&quality=85";
import sculptureSignee_sm from "@/assets/artworks/sculpture-blanche-signee.jpg?w=400&format=webp&quality=80";
import sculptureSignee_md from "@/assets/artworks/sculpture-blanche-signee.jpg?w=800&format=webp&quality=80";
import sculptureSignee_lg from "@/assets/artworks/sculpture-blanche-signee.jpg?w=1200&format=webp&quality=85";
import sculptureNoireDynamique_sm from "@/assets/artworks/sculpture-noire-dynamique.jpg?w=400&format=webp&quality=80";
import sculptureNoireDynamique_md from "@/assets/artworks/sculpture-noire-dynamique.jpg?w=800&format=webp&quality=80";
import sculptureNoireDynamique_lg from "@/assets/artworks/sculpture-noire-dynamique.jpg?w=1200&format=webp&quality=85";
import sculptureMonumentale_sm from "@/assets/artworks/sculpture-monumentale.jpg?w=400&format=webp&quality=80";
import sculptureMonumentale_md from "@/assets/artworks/sculpture-monumentale.jpg?w=800&format=webp&quality=80";
import sculptureMonumentale_lg from "@/assets/artworks/sculpture-monumentale.jpg?w=1200&format=webp&quality=85";
import sculptureArchitecturale_sm from "@/assets/artworks/sculpture-architecturale.jpg?w=400&format=webp&quality=80";
import sculptureArchitecturale_md from "@/assets/artworks/sculpture-architecturale.jpg?w=800&format=webp&quality=80";
import sculptureArchitecturale_lg from "@/assets/artworks/sculpture-architecturale.jpg?w=1200&format=webp&quality=85";
import sculptureFeminine_sm from "@/assets/artworks/sculpture-feminine.jpg?w=400&format=webp&quality=80";
import sculptureFeminine_md from "@/assets/artworks/sculpture-feminine.jpg?w=800&format=webp&quality=80";
import sculptureFeminine_lg from "@/assets/artworks/sculpture-feminine.jpg?w=1200&format=webp&quality=85";
import sculptureTotemique_sm from "@/assets/artworks/sculpture-totemique.jpg?w=400&format=webp&quality=80";
import sculptureTotemique_md from "@/assets/artworks/sculpture-totemique.jpg?w=800&format=webp&quality=80";
import sculptureTotemique_lg from "@/assets/artworks/sculpture-totemique.jpg?w=1200&format=webp&quality=85";

// ============= ARTWORK DATA =============
interface ImageSrcSet {
  sm: string;
  md: string;
  lg: string;
}

interface Artwork {
  id: number;
  title: string;
  category: string;
  technique: string;
  dimensions: string;
  year: string;
  image: ImageSrcSet;
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
    image: { sm: acrylique2025_80x80_sm, md: acrylique2025_80x80_md, lg: acrylique2025_80x80_lg },
  },
  {
    id: 29,
    title: "Abstraction Graphique II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "60 × 60 cm",
    year: "2025",
    image: { sm: acrylique2025_60x60_sm, md: acrylique2025_60x60_md, lg: acrylique2025_60x60_lg },
  },
  {
    id: 30,
    title: "Abstraction Graphique III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2025",
    image: { sm: acrylique2025_40x40_sm, md: acrylique2025_40x40_md, lg: acrylique2025_40x40_lg },
  },
  // 2024
  {
    id: 31,
    title: "Encre Gestuelle I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2024",
    image: { sm: acrylique2024_80x80_sm, md: acrylique2024_80x80_md, lg: acrylique2024_80x80_lg },
  },
  {
    id: 32,
    title: "Encre Gestuelle II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "60 × 60 cm",
    year: "2024",
    image: { sm: blancAcrylique2024_60x60_sm, md: blancAcrylique2024_60x60_md, lg: blancAcrylique2024_60x60_lg },
  },
  {
    id: 33,
    title: "Encre Gestuelle III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2024",
    image: { sm: blancAcrylique2024_40x40_sm, md: blancAcrylique2024_40x40_md, lg: blancAcrylique2024_40x40_lg },
  },
  {
    id: 34,
    title: "Encre Gestuelle IV",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2024",
    image: { sm: blancAcrylique2024_40x40_2_sm, md: blancAcrylique2024_40x40_2_md, lg: blancAcrylique2024_40x40_2_lg },
  },
  {
    id: 38,
    title: "Nocturne I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "60 × 60 cm",
    year: "2024",
    image: { sm: acrylique2024_60x60_sm, md: acrylique2024_60x60_md, lg: acrylique2024_60x60_lg },
  },
  {
    id: 39,
    title: "Nocturne II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "20 × 20 cm",
    year: "2024",
    image: { sm: acrylique2024_20x20_sm, md: acrylique2024_20x20_md, lg: acrylique2024_20x20_lg },
  },
  // 2023
  {
    id: 6,
    title: "Geste Noir",
    category: "peintures",
    technique: "Encre sur papier",
    dimensions: "40 × 50 cm",
    year: "2023",
    image: { sm: encreGestuelle_sm, md: encreGestuelle_md, lg: encreGestuelle_lg },
  },
  {
    id: 40,
    title: "Géométrie Rouge I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2023",
    image: { sm: acrylique2023_80x80_sm, md: acrylique2023_80x80_md, lg: acrylique2023_80x80_lg },
  },
  {
    id: 41,
    title: "Géométrie Rouge II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2023",
    image: { sm: acrylique2023_80x80_2_sm, md: acrylique2023_80x80_2_md, lg: acrylique2023_80x80_2_lg },
  },
  {
    id: 42,
    title: "Géométrie Rouge III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2023",
    image: { sm: acrylique2023_40x40_sm, md: acrylique2023_40x40_md, lg: acrylique2023_40x40_lg },
  },
  // 2020
  {
    id: 43,
    title: "Trame Urbaine I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2020",
    image: { sm: acrylique2020_80x80_sm, md: acrylique2020_80x80_md, lg: acrylique2020_80x80_lg },
  },
  {
    id: 44,
    title: "Trame Urbaine II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "40 × 40 cm",
    year: "2020",
    image: { sm: acrylique2020_40x40_sm, md: acrylique2020_40x40_md, lg: acrylique2020_40x40_lg },
  },
  {
    id: 45,
    title: "Trame Urbaine III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "20 × 20 cm",
    year: "2020",
    image: { sm: acrylique2020_20x20_sm, md: acrylique2020_20x20_md, lg: acrylique2020_20x20_lg },
  },
  // 2017
  {
    id: 46,
    title: "Espace Coloré I",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2017",
    image: { sm: acrylique2017_80x80_sm, md: acrylique2017_80x80_md, lg: acrylique2017_80x80_lg },
  },
  {
    id: 47,
    title: "Espace Coloré II",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2017",
    image: { sm: acrylique2017_80x80_2_sm, md: acrylique2017_80x80_2_md, lg: acrylique2017_80x80_2_lg },
  },
  {
    id: 48,
    title: "Espace Coloré III",
    category: "peintures",
    technique: "Acrylique sur toile",
    dimensions: "80 × 80 cm",
    year: "2017",
    image: { sm: acrylique2017_80x80_3_sm, md: acrylique2017_80x80_3_md, lg: acrylique2017_80x80_3_lg },
  },
  // 2013
  {
    id: 49,
    title: "Matière Vibrante I",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "80 × 80 cm",
    year: "2013",
    image: { sm: huileEmpatement2013_80x80_sm, md: huileEmpatement2013_80x80_md, lg: huileEmpatement2013_80x80_lg },
  },
  {
    id: 50,
    title: "Matière Vibrante II",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "80 × 80 cm",
    year: "2013",
    image: { sm: huileEmpatement2013_80x80_2_sm, md: huileEmpatement2013_80x80_2_md, lg: huileEmpatement2013_80x80_2_lg },
  },
  {
    id: 51,
    title: "Matière Vibrante III",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "60 × 60 cm",
    year: "2013",
    image: { sm: huileEmpatement2013_60x60_sm, md: huileEmpatement2013_60x60_md, lg: huileEmpatement2013_60x60_lg },
  },
  // 2012
  {
    id: 52,
    title: "Relief I",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "80 × 80 cm",
    year: "2012",
    image: { sm: huileEmpatement2012_80x80_sm, md: huileEmpatement2012_80x80_md, lg: huileEmpatement2012_80x80_lg },
  },
  {
    id: 53,
    title: "Relief II",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "80 × 80 cm",
    year: "2012",
    image: { sm: huileEmpatement2012_80x80_2_sm, md: huileEmpatement2012_80x80_2_md, lg: huileEmpatement2012_80x80_2_lg },
  },
  {
    id: 54,
    title: "Relief III",
    category: "peintures",
    technique: "Huile sur toile avec empâtement",
    dimensions: "50 × 50 cm",
    year: "2012",
    image: { sm: huileEmpatement2012_50x50_sm, md: huileEmpatement2012_50x50_md, lg: huileEmpatement2012_50x50_lg },
  },
  {
    id: 55,
    title: "Abstraction I",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "50 × 50 cm",
    year: "2012",
    image: { sm: huile2012_50x50_sm, md: huile2012_50x50_md, lg: huile2012_50x50_lg },
  },
  {
    id: 56,
    title: "Abstraction II",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "60 × 60 cm",
    year: "2012",
    image: { sm: huile2012_60x60_sm, md: huile2012_60x60_md, lg: huile2012_60x60_lg },
  },
  {
    id: 57,
    title: "Abstraction III",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "60 × 60 cm",
    year: "2012",
    image: { sm: huile2012_60x60_2_sm, md: huile2012_60x60_2_md, lg: huile2012_60x60_2_lg },
  },
  // 2010
  {
    id: 1,
    title: "Tension Rouge",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "50 × 50 cm",
    year: "2010",
    image: { sm: huileRougeNoir_sm, md: huileRougeNoir_md, lg: huileRougeNoir_lg },
  },
  {
    id: 2,
    title: "Équilibre",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "50 × 50 cm",
    year: "2010",
    image: { sm: huileGrisRouge_sm, md: huileGrisRouge_md, lg: huileGrisRouge_lg },
  },
  {
    id: 58,
    title: "Glacis I",
    category: "peintures",
    technique: "Glacis à l'huile avec empâtement sur bois",
    dimensions: "30 × 30 cm",
    year: "2010",
    image: { sm: glacisBois2010_30x30_sm, md: glacisBois2010_30x30_md, lg: glacisBois2010_30x30_lg },
  },
  {
    id: 59,
    title: "Glacis II",
    category: "peintures",
    technique: "Glacis à l'huile avec empâtement sur toile",
    dimensions: "30 × 30 cm",
    year: "2010",
    image: { sm: glacisToile2010_30x30_sm, md: glacisToile2010_30x30_md, lg: glacisToile2010_30x30_lg },
  },
  {
    id: 60,
    title: "Glacis III",
    category: "peintures",
    technique: "Glacis à l'huile avec empâtement sur toile",
    dimensions: "60 × 60 cm",
    year: "2010",
    image: { sm: glacisToile2010_60x60_sm, md: glacisToile2010_60x60_md, lg: glacisToile2010_60x60_lg },
  },
  // 2009
  {
    id: 61,
    title: "Composition Mixte I",
    category: "peintures",
    technique: "Technique mixte",
    dimensions: "50 × 65 cm",
    year: "2009",
    image: { sm: techniqueMixte2009_sm, md: techniqueMixte2009_md, lg: techniqueMixte2009_lg },
  },
  {
    id: 62,
    title: "Composition Mixte II",
    category: "peintures",
    technique: "Technique mixte",
    dimensions: "50 × 65 cm",
    year: "2009",
    image: { sm: techniqueMixte2009_2_sm, md: techniqueMixte2009_2_md, lg: techniqueMixte2009_2_lg },
  },
  {
    id: 63,
    title: "Composition Mixte III",
    category: "peintures",
    technique: "Technique mixte",
    dimensions: "50 × 65 cm",
    year: "2009",
    image: { sm: techniqueMixte2009_3_sm, md: techniqueMixte2009_3_md, lg: techniqueMixte2009_3_lg },
  },
  // 2008
  {
    id: 64,
    title: "Structure Noire I",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "60 × 60 cm",
    year: "2008",
    image: { sm: huile2008_60x60_sm, md: huile2008_60x60_md, lg: huile2008_60x60_lg },
  },
  {
    id: 65,
    title: "Structure Noire II",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "60 × 60 cm",
    year: "2008",
    image: { sm: huile2008_60x60_2_sm, md: huile2008_60x60_2_md, lg: huile2008_60x60_2_lg },
  },
  {
    id: 66,
    title: "Structure Noire III",
    category: "peintures",
    technique: "Huile sur toile",
    dimensions: "80 × 80 cm",
    year: "2008",
    image: { sm: huile2008_80x80_sm, md: huile2008_80x80_md, lg: huile2008_80x80_lg },
  },
  // 2007
  {
    id: 3,
    title: "Symphonie Colorée",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    image: { sm: huileBleuJaune_sm, md: huileBleuJaune_md, lg: huileBleuJaune_lg },
  },
  {
    id: 4,
    title: "Crépuscule",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    image: { sm: huileOrange_sm, md: huileOrange_md, lg: huileOrange_lg },
  },
  {
    id: 5,
    title: "Dynamique Primaire",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "80 × 80 cm",
    year: "2007",
    image: { sm: huileJauneBleu_sm, md: huileJauneBleu_md, lg: huileJauneBleu_lg },
  },
  {
    id: 7,
    title: "Verticalité",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2007",
    image: { sm: huileRougeGris_sm, md: huileRougeGris_md, lg: huileRougeGris_lg },
  },
  {
    id: 8,
    title: "Archipel",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2007",
    image: { sm: huileTurquoise_sm, md: huileTurquoise_md, lg: huileTurquoise_lg },
  },
  {
    id: 9,
    title: "Quadriptyque Urbain",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "4 × 40 × 40 cm",
    year: "2007",
    image: { sm: quadriptyque_sm, md: quadriptyque_md, lg: quadriptyque_lg },
  },
  // 2006
  {
    id: 10,
    title: "Horizon",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: { sm: huileBleuCreme_sm, md: huileBleuCreme_md, lg: huileBleuCreme_lg },
  },
  {
    id: 11,
    title: "Architecture Marine",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: { sm: huileMarineOrange_sm, md: huileMarineOrange_md, lg: huileMarineOrange_lg },
  },
  {
    id: 12,
    title: "Ouverture",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: { sm: huileBleuOrange_sm, md: huileBleuOrange_md, lg: huileBleuOrange_lg },
  },
  {
    id: 13,
    title: "Métropole",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: { sm: huileGrisOrange_sm, md: huileGrisOrange_md, lg: huileGrisOrange_lg },
  },
  {
    id: 14,
    title: "Passage",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2006",
    image: { sm: huileOcreGris_sm, md: huileOcreGris_md, lg: huileOcreGris_lg },
  },
  {
    id: 15,
    title: "Sentinelle",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2006",
    image: { sm: huileBleuOcre_sm, md: huileBleuOcre_md, lg: huileBleuOcre_lg },
  },
  // 2005
  {
    id: 16,
    title: "Perspective",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2005",
    image: { sm: huilePerspective_sm, md: huilePerspective_md, lg: huilePerspective_lg },
  },
  {
    id: 35,
    title: "Composition I",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "60 × 60 cm",
    year: "2005",
    image: { sm: huileCouteau2005_60x60_sm, md: huileCouteau2005_60x60_md, lg: huileCouteau2005_60x60_lg },
  },
  {
    id: 36,
    title: "Composition II",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "50 × 50 cm",
    year: "2005",
    image: { sm: huileCouteau2005_50x50_sm, md: huileCouteau2005_50x50_md, lg: huileCouteau2005_50x50_lg },
  },
  {
    id: 37,
    title: "Composition III",
    category: "peintures",
    technique: "Huile sur toile au couteau",
    dimensions: "40 × 40 cm",
    year: "2005",
    image: { sm: huileCouteau2005_40x40_sm, md: huileCouteau2005_40x40_md, lg: huileCouteau2005_40x40_lg },
  },
  // === SCULPTURES (triées du plus récent au plus ancien) ===
  {
    id: 23,
    title: "Envol",
    category: "sculptures",
    technique: "Bronze patiné noir",
    dimensions: "35 × 30 × 25 cm",
    year: "2025",
    image: { sm: sculptureNoireDynamique_sm, md: sculptureNoireDynamique_md, lg: sculptureNoireDynamique_lg },
    zoom: 1.5,
  },
  {
    id: 20,
    title: "Architecture",
    category: "sculptures",
    technique: "Béton ciré bicolore",
    dimensions: "40 × 20 × 15 cm",
    year: "2024",
    image: { sm: sculptureGeometrique_sm, md: sculptureGeometrique_md, lg: sculptureGeometrique_lg },
    zoom: 1.3,
  },
  {
    id: 21,
    title: "Élévation",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "38 × 12 × 10 cm",
    year: "2024",
    image: { sm: sculptureElancee_sm, md: sculptureElancee_md, lg: sculptureElancee_lg },
    zoom: 1.4,
  },
  {
    id: 17,
    title: "Silhouette",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "35 × 12 × 10 cm",
    year: "2023",
    image: { sm: sculptureBlanche_sm, md: sculptureBlanche_md, lg: sculptureBlanche_lg },
    zoom: 1.4,
  },
  {
    id: 19,
    title: "Mouvement",
    category: "sculptures",
    technique: "Bronze patiné",
    dimensions: "30 × 25 × 20 cm",
    year: "2023",
    image: { sm: sculptureNoire_sm, md: sculptureNoire_md, lg: sculptureNoire_lg },
    zoom: 1.6,
  },
  {
    id: 18,
    title: "Vitrail",
    category: "sculptures",
    technique: "Bois peint",
    dimensions: "45 × 15 × 8 cm",
    year: "2022",
    image: { sm: sculptureColoree_sm, md: sculptureColoree_md, lg: sculptureColoree_lg },
    zoom: 1.3,
  },
  {
    id: 22,
    title: "Contemplation",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "30 × 20 × 15 cm",
    year: "2021",
    image: { sm: sculptureSignee_sm, md: sculptureSignee_md, lg: sculptureSignee_lg },
    zoom: 1.5,
  },
  {
    id: 24,
    title: "Monument",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "60 × 35 × 30 cm",
    year: "2020",
    image: { sm: sculptureMonumentale_sm, md: sculptureMonumentale_md, lg: sculptureMonumentale_lg },
    zoom: 1.3,
  },
  {
    id: 25,
    title: "Édifice",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "45 × 20 × 15 cm",
    year: "2019",
    image: { sm: sculptureArchitecturale_sm, md: sculptureArchitecturale_md, lg: sculptureArchitecturale_lg },
    zoom: 1.4,
  },
  {
    id: 26,
    title: "Grâce",
    category: "sculptures",
    technique: "Béton ciré blanc",
    dimensions: "50 × 15 × 12 cm",
    year: "2019",
    image: { sm: sculptureFeminine_sm, md: sculptureFeminine_md, lg: sculptureFeminine_lg },
    zoom: 1.4,
  },
  {
    id: 27,
    title: "Gardien",
    category: "sculptures",
    technique: "Béton moucheté",
    dimensions: "35 × 10 × 8 cm",
    year: "2018",
    image: { sm: sculptureTotemique_sm, md: sculptureTotemique_md, lg: sculptureTotemique_lg },
    zoom: 1.5,
  },
];

const categories = [
  { id: "all", label: "Tout" },
  { id: "peintures", label: "Peintures" },
  { id: "sculptures", label: "Sculptures" },
];

const ITEMS_PER_PAGE = 12;

// Lightbox component with HD loading
const LightboxImage = ({ 
  artwork, 
  isFullscreen 
}: { 
  artwork: Artwork; 
  isFullscreen: boolean;
}) => {
  const [showHD, setShowHD] = useState(false);
  const isHDLoaded = usePreloadImage(artwork.image.lg);

  useEffect(() => {
    if (isHDLoaded) {
      // Small delay for smooth transition
      const timer = setTimeout(() => setShowHD(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isHDLoaded]);

  return (
    <div className={`relative overflow-hidden ${
      isFullscreen 
        ? 'max-w-[90vw] max-h-[90vh]' 
        : 'aspect-square w-full max-w-lg lg:max-w-2xl'
    }`}>
      {/* Show medium res first, then HD when loaded */}
      <img
        src={showHD ? artwork.image.lg : artwork.image.md}
        alt={artwork.title}
        className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'} transition-opacity duration-300`}
      />
      
      {/* Loading indicator while HD loads */}
      {!isHDLoaded && (
        <div className="absolute top-4 right-4 text-white/50">
          <Loader2 className="w-5 h-5 animate-spin" />
        </div>
      )}
    </div>
  );
};

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

      {/* Lightbox - Fond noir profond avec HD */}
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
              <LightboxImage artwork={selectedArtwork} isFullscreen={isFullscreen} />
              
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
