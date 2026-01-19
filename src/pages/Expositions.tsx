import { motion } from "framer-motion";
import { Calendar, MapPin, Plus, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Helper functions for calendar links
const formatDateForGoogle = (date: Date) => {
  return date.toISOString().replace(/-|:|\.\d{3}/g, '').slice(0, 15) + 'Z';
};

const generateGoogleCalendarUrl = (event: {
  title: string;
  venue: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
}) => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.title} - ${event.venue}`,
    dates: `${formatDateForGoogle(event.startDate)}/${formatDateForGoogle(event.endDate)}`,
    details: event.description,
    location: `${event.venue}, ${event.location}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const generateICalContent = (event: {
  title: string;
  venue: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
}) => {
  const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d{3}/g, '').slice(0, 15) + 'Z';
  
  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(event.startDate)}
DTEND:${formatDate(event.endDate)}
SUMMARY:${event.title} - ${event.venue}
DESCRIPTION:${event.description}
LOCATION:${event.venue}, ${event.location}
END:VEVENT
END:VCALENDAR`;
};

const downloadICalFile = (event: {
  title: string;
  venue: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
}) => {
  const content = generateICalContent(event);
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.replace(/\s+/g, '-')}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const exhibitions = {
  upcoming: [
    {
      id: 0,
      title: "Carré'Ment abstrait",
      venue: "L'Atelier",
      location: "Vertou (44)",
      date: "Mars 2026",
      dateRange: "21 - 29 mars 2026",
      startDate: new Date('2026-03-21T10:00:00'),
      endDate: new Date('2026-03-29T18:00:00'),
      vernissageDate: new Date('2026-03-21T18:00:00'),
      vernissageEndDate: new Date('2026-03-21T21:00:00'),
      description: "Exposition de peintures abstraites hautes en couleur, dégageant énergie et puissance avec des pigments forts et des traits nets. Vernissage le 21 mars à 18h.",
      highlight: "Vernissage le 21 mars à 18h"
    }
  ],
  past: [
    {
      id: 1,
      title: "Carré'Ment abstrait",
      venue: "Le Musée",
      location: "Sautron (44)",
      date: "Décembre 2025",
      description: "Toiles hautes en couleur qui dégagent énergie et puissance, avec des pigments forts et des traits nets et assumés. Peinture abstraite mais sereine, qui ne choque pas le regard et l'esprit."
    },
    {
      id: 2,
      title: "L'art abstrait ouvre la saison",
      venue: "Maison du patrimoine",
      location: "Mesquer (44)",
      date: "Avril 2025",
      description: "C'est la troisième fois que Marie-Christine Chaillou expose à la Maison du patrimoine de Mesquer. « C'est un endroit que j'adore, la maison est belle et mon travail y est bien mis en valeur. »"
    },
    {
      id: 3,
      title: "Marie-Christine Chaillou expose",
      venue: "Maison du patrimoine",
      location: "Mesquer (44)",
      date: "Novembre 2013",
      description: "Ses rouges et ses oranges sont magnifiques, et la matière est très présente sur ses toiles. Marie-Christine Chaillou utilise la technique de l'huile et manie surtout le couteau."
    },
    {
      id: 4,
      title: "Un art concrètement abstrait",
      venue: "Galerie",
      location: "La Baule (44)",
      date: "Octobre 2013",
      description: "Marie-Christine Chaillou pare ses sentiments de couleurs. Ses œuvres abstraites sont très suggestives et ouvrent un nouvel horizon que recherchent les amateurs d'art."
    },
  ]
};

const exhibitionsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Expositions de Marie-Christine Chaillou",
  "description": "Liste des expositions passées et à venir de l'artiste",
  "itemListElement": [
    ...exhibitions.upcoming.map((expo, index) => ({
      "@type": "Event",
      "position": index + 1,
      "name": expo.title,
      "location": {
        "@type": "Place",
        "name": expo.venue,
        "address": expo.location
      },
      "description": expo.description
    })),
    ...exhibitions.past.map((expo, index) => ({
      "@type": "Event",
      "position": exhibitions.upcoming.length + index + 1,
      "name": expo.title,
      "location": {
        "@type": "Place",
        "name": expo.venue,
        "address": expo.location
      },
      "description": expo.description
    }))
  ]
};

const Expositions = () => {
  return (
    <Layout>
      <SEO 
        title="Expositions"
        description="Retrouvez les expositions passées et à venir de Marie-Christine Chaillou. Galeries, salons et événements artistiques en Loire-Atlantique et Bretagne."
        canonical="/expositions"
        keywords="expositions art abstrait, vernissage Nantes, salon artiste, galerie Loire-Atlantique, événements artistiques"
        schema={exhibitionsSchema}
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
              Mon parcours d'expositions
            </h1>
            <p className="text-muted-foreground text-lg">
              J'expose régulièrement mon travail dans des galeries, salons et événements artistiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Exhibitions - Featured Section */}
      {exhibitions.upcoming.length > 0 && (
        <section className="pb-20">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                À venir
              </h2>
              <div className="flex-1 h-px bg-primary/20" />
            </motion.div>

            <div className="space-y-6">
              {exhibitions.upcoming.map((expo, index) => (
                <motion.article
                  key={expo.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Horizontal card */}
                  <div className="relative bg-foreground text-background overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      {/* Date column */}
                      <div className="lg:w-56 flex-shrink-0 bg-primary p-6 lg:p-8 flex flex-col justify-center items-center text-center">
                        <span className="text-5xl lg:text-6xl font-bold text-background">21</span>
                        <span className="text-xl uppercase tracking-widest text-background/90 mt-1">Mars</span>
                        <span className="text-sm text-background/60 mt-2 border-t border-background/20 pt-2 px-4">2026</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                            {expo.title}
                          </h3>
                          
                          <p className="text-lg text-background/80 mb-1">{expo.venue}</p>
                          
                          <div className="flex items-center gap-2 text-background/60 mb-4">
                            <MapPin size={14} />
                            <span className="text-sm">{expo.location}</span>
                            <span className="text-background/30 mx-2">•</span>
                            <span className="text-sm">{expo.dateRange}</span>
                          </div>

                          <p className="text-background/60 text-sm leading-relaxed max-w-xl hidden md:block">
                            {expo.description}
                          </p>
                        </div>

                        {/* Highlight */}
                        {expo.highlight && (
                          <div className="flex items-center justify-center gap-2 bg-primary/20 px-4 py-2 text-sm lg:w-52 flex-shrink-0">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            <span className="text-primary text-xs uppercase tracking-wider">{expo.highlight}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Exhibitions */}
      <section className="py-16 bg-foreground/[0.02]">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Expositions passées
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {exhibitions.past.map((expo, index) => (
              <motion.article
                key={expo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:bg-foreground/[0.02]"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-muted/50 flex flex-col items-center justify-center text-center">
                    <span className="text-lg font-semibold text-foreground/70">{expo.date.split(' ')[0].slice(0, 3)}</span>
                    <span className="text-xs text-muted-foreground">{expo.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{expo.title}</h3>
                    <p className="text-primary/80 text-sm mb-2">{expo.venue}</p>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin size={12} />
                      <span>{expo.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed mt-4 line-clamp-2">
                  {expo.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Expositions;
