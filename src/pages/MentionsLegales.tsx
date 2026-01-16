import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const MentionsLegales = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mentions légales - Marie-Christine Chaillou",
    "description": "Mentions légales du site de Marie-Christine Chaillou, artiste peintre et sculptrice à Nantes.",
    "url": "https://carrementabstrait.com/mentions-legales",
    "inLanguage": "fr-FR"
  };

  return (
    <Layout>
      <SEO
        title="Mentions légales"
        description="Mentions légales du site de Marie-Christine Chaillou, artiste peintre et sculptrice à Nantes. Informations sur l'éditeur, l'hébergement et la propriété intellectuelle."
        canonical="/mentions-legales"
        keywords="mentions légales, Marie-Christine Chaillou, artiste Nantes"
        schema={schemaData}
      />

      <main className="pt-32 pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display mb-12">Mentions légales</h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display mb-4">1. Éditeur du site</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Marie-Christine Chaillou</strong><br />
                  Artiste peintre et sculptrice<br />
                  43 rue Léon Jost<br />
                  44300 Nantes, France<br />
                  Email : <a href="mailto:mc.chaillou@gmail.com" className="text-primary hover:underline">mc.chaillou@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">2. Hébergement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ce site est hébergé par :<br />
                  <strong>Lovable</strong><br />
                  Site web : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lovable.dev</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">3. Propriété intellectuelle</h2>
                <p className="text-muted-foreground leading-relaxed">
                  L'ensemble du contenu de ce site (textes, images, photographies d'œuvres, logo, éléments graphiques) 
                  est la propriété exclusive de Marie-Christine Chaillou, sauf mention contraire expresse.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout 
                  ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans 
                  l'autorisation écrite préalable de Marie-Christine Chaillou.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive 
                  d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants 
                  du Code de la Propriété Intellectuelle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">4. Crédits photographiques</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les photographies des œuvres présentées sur ce site sont protégées par le droit d'auteur. 
                  Elles ont été réalisées par ou pour le compte de Marie-Christine Chaillou.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Toute utilisation, reproduction ou diffusion de ces photographies nécessite une autorisation 
                  préalable. Pour toute demande, veuillez contacter : <a href="mailto:mc.chaillou@gmail.com" className="text-primary hover:underline">mc.chaillou@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">5. Responsabilité</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Marie-Christine Chaillou s'efforce d'assurer au mieux de ses possibilités l'exactitude et la 
                  mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, 
                  la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  En conséquence, Marie-Christine Chaillou décline toute responsabilité pour toute imprécision, 
                  inexactitude ou omission portant sur des informations disponibles sur ce site, ainsi que pour 
                  tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification 
                  des informations mises à disposition sur le site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">6. Liens hypertextes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ce site peut contenir des liens vers d'autres sites internet. Marie-Christine Chaillou n'exerce 
                  aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  La création de liens hypertextes vers ce site est soumise à l'accord préalable de l'éditeur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">7. Droit applicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les 
                  tribunaux français seront seuls compétents.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
};

export default MentionsLegales;
