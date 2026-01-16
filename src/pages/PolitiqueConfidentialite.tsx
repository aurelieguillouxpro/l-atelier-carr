import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const PolitiqueConfidentialite = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Politique de confidentialité - Marie-Christine Chaillou",
    "description": "Politique de confidentialité et protection des données personnelles du site de Marie-Christine Chaillou.",
    "url": "https://carrementabstrait.com/politique-confidentialite",
    "inLanguage": "fr-FR"
  };

  return (
    <Layout>
      <SEO
        title="Politique de confidentialité"
        description="Politique de confidentialité et protection des données personnelles. Découvrez comment vos données sont collectées et utilisées sur le site de Marie-Christine Chaillou."
        canonical="/politique-confidentialite"
        keywords="politique confidentialité, RGPD, données personnelles, Marie-Christine Chaillou"
        schema={schemaData}
      />

      <main className="pt-32 pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display mb-12">Politique de confidentialité</h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Cette politique de confidentialité décrit comment Marie-Christine Chaillou collecte, utilise 
                et protège vos données personnelles conformément au Règlement Général sur la Protection des 
                Données (RGPD) et à la loi Informatique et Libertés.
              </p>

              <section>
                <h2 className="text-2xl font-display mb-4">1. Responsable du traitement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Marie-Christine Chaillou</strong><br />
                  43 rue Léon Jost<br />
                  44300 Nantes, France<br />
                  Email : <a href="mailto:mc.chaillou@gmail.com" className="text-primary hover:underline">mc.chaillou@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">2. Données collectées</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les données personnelles collectées sur ce site sont limitées aux informations que vous 
                  fournissez volontairement via le formulaire de contact :
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Contenu de votre message</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">3. Finalité de la collecte</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ces données sont collectées dans le seul but de :
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Répondre à vos demandes de renseignements</li>
                  <li>Vous recontacter concernant une potentielle collaboration ou exposition</li>
                  <li>Traiter vos demandes d'information sur les œuvres</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Vos données ne sont jamais utilisées à des fins commerciales, publicitaires, 
                  ni cédées ou vendues à des tiers.</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">4. Base légale du traitement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le traitement de vos données repose sur votre consentement, que vous manifestez en 
                  remplissant et en soumettant le formulaire de contact.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">5. Durée de conservation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les données collectées via le formulaire de contact sont conservées pendant la durée 
                  nécessaire au traitement de votre demande. Elles sont ensuite supprimées dans un délai 
                  maximum de <strong>3 ans</strong> à compter du dernier contact avec vous.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">6. Vos droits</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez 
                  des droits suivants sur vos données personnelles :
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
                  <a href="mailto:mc.chaillou@gmail.com" className="text-primary hover:underline ml-1">mc.chaillou@gmail.com</a>
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL 
                  (Commission Nationale de l'Informatique et des Libertés) : 
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">www.cnil.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">7. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ce site n'utilise <strong>pas de cookies de traçage publicitaire</strong> ni de cookies 
                  à des fins de profilage ou de marketing.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent 
                  être utilisés. Ces cookies ne collectent aucune donnée personnelle et sont exemptés de 
                  consentement conformément à la réglementation en vigueur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">8. Sécurité des données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                  protéger vos données personnelles contre tout accès non autorisé, modification, 
                  divulgation ou destruction.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  La connexion à ce site est sécurisée par le protocole HTTPS.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">9. Modifications de la politique</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cette politique de confidentialité peut être mise à jour occasionnellement. La date de 
                  dernière mise à jour sera indiquée en bas de cette page. Nous vous encourageons à 
                  consulter régulièrement cette page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question relative à cette politique de confidentialité ou au traitement de 
                  vos données personnelles, vous pouvez nous contacter :
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Email :</strong> <a href="mailto:mc.chaillou@gmail.com" className="text-primary hover:underline">mc.chaillou@gmail.com</a><br />
                  <strong>Adresse :</strong> 43 rue Léon Jost, 44300 Nantes, France
                </p>
              </section>

              <p className="text-sm text-muted-foreground/70 mt-12 pt-8 border-t border-border">
                Dernière mise à jour : Janvier 2026
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
