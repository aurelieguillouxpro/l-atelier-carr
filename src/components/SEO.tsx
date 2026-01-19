import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  keywords?: string;
  schema?: Record<string, unknown>;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultMeta = {
  title: "Carrément Abstrait | Marie-Christine Chaillou - Artiste Peintre Nantes",
  description: "Découvrez l'univers abstrait et coloré de Marie-Christine Chaillou, artiste peintre et sculptrice contemporaine basée à Nantes. Peintures à l'huile au couteau et sculptures en béton ciré.",
  image: "https://carrementabstrait.com/og-image.jpg",
  siteUrl: "https://carrementabstrait.com",
};

// Breadcrumb mapping for SEO
const breadcrumbMap: Record<string, { name: string; parent?: string }> = {
  "/": { name: "Accueil" },
  "/galerie": { name: "Galerie", parent: "/" },
  "/a-propos": { name: "À Propos", parent: "/" },
  "/expositions": { name: "Expositions", parent: "/" },
  "/presse": { name: "Presse", parent: "/" },
  "/contact": { name: "Contact", parent: "/" },
  "/mentions-legales": { name: "Mentions Légales", parent: "/" },
  "/politique-confidentialite": { name: "Politique de Confidentialité", parent: "/" },
};

const generateBreadcrumbSchema = (path: string) => {
  const items: Array<{ "@type": string; position: number; name: string; item: string }> = [];
  let currentPath = path;
  const paths: string[] = [];
  
  while (currentPath && breadcrumbMap[currentPath]) {
    paths.unshift(currentPath);
    currentPath = breadcrumbMap[currentPath].parent || "";
  }
  
  paths.forEach((p, index) => {
    if (breadcrumbMap[p]) {
      items.push({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumbMap[p].name,
        item: `${defaultMeta.siteUrl}${p === "/" ? "" : p}`
      });
    }
  });
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
};

const SEO = ({
  title,
  description = defaultMeta.description,
  canonical,
  type = "website",
  image = defaultMeta.image,
  keywords,
  schema,
  noindex = false,
  publishedTime,
  modifiedTime,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | Carrément Abstrait - Marie-Christine Chaillou`
    : defaultMeta.title;

  const fullCanonical = canonical 
    ? `${defaultMeta.siteUrl}${canonical}`
    : defaultMeta.siteUrl;

  const canonicalPath = canonical || "/";

  // Default artist schema with enhanced local SEO
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${defaultMeta.siteUrl}/#artist`,
    "name": "Marie-Christine Chaillou",
    "alternateName": "Carrément Abstrait",
    "jobTitle": "Artiste peintre et sculptrice",
    "description": "Artiste contemporaine spécialisée dans l'art abstrait, peintures à l'huile au couteau et sculptures en béton ciré depuis plus de 20 ans",
    "url": defaultMeta.siteUrl,
    "image": image,
    "email": "mc.chaillou@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "43 rue Léon Jost",
      "addressLocality": "Nantes",
      "postalCode": "44300",
      "addressRegion": "Loire-Atlantique",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.2184,
      "longitude": -1.5536
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 47.2184,
        "longitude": -1.5536
      },
      "geoRadius": "100000"
    },
    "knowsAbout": [
      "Art abstrait",
      "Peinture à l'huile",
      "Sculpture béton ciré",
      "Art contemporain",
      "Abstraction géométrique",
      "Techniques mixtes"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Beaux-Arts de Nantes"
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema(canonicalPath);

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Language & Geo */}
      <meta name="language" content="French" />
      <meta name="geo.region" content="FR-44" />
      <meta name="geo.placename" content="Nantes" />
      
      {/* Open Graph - Enhanced */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title || 'Carrément Abstrait'} - Œuvres de Marie-Christine Chaillou`} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Carrément Abstrait" />
      
      {/* Article specific meta */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content="Marie-Christine Chaillou" />
      )}
      
      {/* Twitter Card - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title || 'Carrément Abstrait'} - Art abstrait`} />
      <meta name="twitter:site" content="@carrementabstrait" />
      <meta name="twitter:creator" content="@carrementabstrait" />
      
      {/* Additional SEO */}
      <meta name="author" content="Marie-Christine Chaillou" />
      <meta name="copyright" content="Marie-Christine Chaillou" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Schema.org JSON-LD - Main Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
      
      {/* Schema.org JSON-LD - Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;