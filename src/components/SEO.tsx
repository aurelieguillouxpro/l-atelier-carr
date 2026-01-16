import { Helmet, HelmetProvider } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  keywords?: string;
  schema?: Record<string, unknown>;
}

const defaultMeta = {
  title: "Carrément Abstrait | Marie-Christine Chaillou",
  description: "Découvrez l'univers abstrait et coloré de Marie-Christine Chaillou, artiste peintre et sculptrice contemporaine basée à Nantes. Peintures à l'huile et sculptures en béton ciré.",
  image: "https://carrementabstrait.com/og-image.jpg",
  siteUrl: "https://carrementabstrait.com",
};

const SEO = ({
  title,
  description = defaultMeta.description,
  canonical,
  type = "website",
  image = defaultMeta.image,
  keywords,
  schema,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | Carrément Abstrait - Marie-Christine Chaillou`
    : defaultMeta.title;

  const fullCanonical = canonical 
    ? `${defaultMeta.siteUrl}${canonical}`
    : defaultMeta.siteUrl;

  // Default artist schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marie-Christine Chaillou",
    "jobTitle": "Artiste peintre et sculptrice",
    "description": "Artiste contemporaine spécialisée dans l'art abstrait, peintures à l'huile et sculptures en béton ciré",
    "url": defaultMeta.siteUrl,
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "43 rue Léon Jost",
      "addressLocality": "Nantes",
      "postalCode": "44300",
      "addressRegion": "Loire-Atlantique",
      "addressCountry": "FR"
    },
    "email": "mc.chaillou@gmail.com",
    "knowsAbout": ["Art abstrait", "Peinture à l'huile", "Sculpture béton ciré", "Art contemporain"]
  };

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Carrément Abstrait" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="author" content="Marie-Christine Chaillou" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export { SEO, HelmetProvider };
export default SEO;
