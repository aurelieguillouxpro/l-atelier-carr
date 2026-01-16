import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  "": "Accueil",
  "galerie": "Galerie",
  "a-propos": "À Propos",
  "expositions": "Expositions",
  "presse": "Presse",
  "contact": "Contact",
  "mentions-legales": "Mentions légales",
  "politique-confidentialite": "Politique de confidentialité",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Don't show breadcrumbs on homepage
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Accueil", path: "/" },
    ...pathSegments.map((segment, index) => ({
      label: routeLabels[segment] || segment,
      path: "/" + pathSegments.slice(0, index + 1).join("/"),
    })),
  ];

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://carrementabstrait.com${item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Fil d'Ariane" className="container-narrow py-4">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link
                    to={item.path}
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                    aria-label="Accueil"
                  >
                    <Home size={14} />
                    <span className="sr-only">Accueil</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight size={14} className="text-muted-foreground/50" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
